import { useState, useMemo, useEffect, useContext, useCallback } from "react";
import { Input } from "../components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { getAllFloats } from "../integration/scripts";
import { Web3Context } from "../context/web3Context";
import { SearchIcon } from "lucide-react";
import axios from "axios";

export default function Component() {
  const [loading, setLoading] = useState(true);
  const { contractInstance } = useContext(Web3Context);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    minDistance: 0,
    maxDistance: 10000000,
    minBaseFare: 0,
    maxBaseFare: 10000000,
  });
  const [fares, setFares] = useState([]);

  const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
    lat1 /= Math.pow(10, 6);
    lon1 /= Math.pow(10, 6);
    lat2 /= Math.pow(10, 6);
    lon2 /= Math.pow(10, 6);
    const toRadians = (degree) => degree * (Math.PI / 180);

    const R = 6371; // Earth's radius in kilometers

    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }, []);

  const filteredFares = useMemo(() => {
    return fares.filter(
      (fare) =>
        fare.pickupLocation.toLowerCase().includes(filters.pickupLocation.toLowerCase()) &&
        fare.dropoffLocation.toLowerCase().includes(filters.dropoffLocation.toLowerCase()) &&
        fare.distance >= filters.minDistance &&
        fare.distance <= filters.maxDistance &&
        fare.baseFare >= filters.minBaseFare &&
        fare.baseFare <= filters.maxBaseFare &&
        (fare.pickupLocation.toLowerCase().includes(search.toLowerCase()) ||
          fare.dropoffLocation.toLowerCase().includes(search.toLowerCase()) ||
          fare.distance.toString().includes(search) ||
          fare.baseFare.toString().includes(search))
    );
  }, [fares, filters, search]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleFilterChange = useCallback((field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  }, []);

  const getReverseGeocoding = async (lat, lon) => {
    try {
      const config = {
        method: "get",
        url: `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${import.meta.env.VITE_GEO_KEY}`,
        headers: {},
      };

      const response = await axios(config);
      return response.data.features[0].properties.name;
    } catch (err) {
      console.error("Error fetching reverse geocoding:", err);
      return null; // Return null in case of error
    }
  };

  useEffect(() => {
    const fetchFloats = async () => {
      try {
        const fetchedData = await getAllFloats(contractInstance);
        let tempData = [];
        for (let i = 0; i < fetchedData.length; i++) {
          if (fetchedData[i][3] === true) {
            continue;
          }
          const pickupLocation = await getReverseGeocoding(
            Number(fetchedData[i][4]) / Math.pow(10, 6),
            Number(fetchedData[i][5]) / Math.pow(10, 6)
          );
          const dropoffLocation = await getReverseGeocoding(
            Number(fetchedData[i][6]) / Math.pow(10, 6),
            Number(fetchedData[i][7]) / Math.pow(10, 6)
          );
          if (!pickupLocation || !dropoffLocation) {
            continue;
          }
          tempData.push({
            id: Number(fetchedData[i][0]),
            pickupLocation: pickupLocation,
            dropoffLocation: dropoffLocation,
            distance: calculateDistance(
              Number(fetchedData[i][4]),
              Number(fetchedData[i][5]),
              Number(fetchedData[i][6]),
              Number(fetchedData[i][7])
            ),
            baseFare: Number(fetchedData[i][2]) / Math.pow(10, 15),
          });
        }
        setFares(tempData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching floats:", err);
        setLoading(false);
      }
    };
    fetchFloats();
  }, [contractInstance, calculateDistance]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Cab Fare Listings</h1>
        <p className="text-gray-500">Find and accept cab fares that fit your needs.</p>
      </div>
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="pickup-location" className="block text-gray-700 font-medium mb-2">
            Pickup Location
          </label>
          <Input
            id="pickup-location"
            type="text"
            value={filters.pickupLocation}
            onChange={(e) => handleFilterChange("pickupLocation", e.target.value)}
            placeholder="Enter pickup location"
          />
        </div>
        <div>
          <label htmlFor="dropoff-location" className="block text-gray-700 font-medium mb-2">
            Dropoff Location
          </label>
          <Input
            id="dropoff-location"
            type="text"
            value={filters.dropoffLocation}
            onChange={(e) => handleFilterChange("dropoffLocation", e.target.value)}
            placeholder="Enter dropoff location"
          />
        </div>
        <div>
          <label htmlFor="min-distance" className="block text-gray-700 font-medium mb-2">
            Min Distance
          </label>
          <Input
            id="min-distance"
            type="number"
            value={filters.minDistance}
            onChange={(e) => handleFilterChange("minDistance", Number(e.target.value))}
            placeholder="Enter minimum distance"
          />
        </div>
        <div>
          <label htmlFor="max-distance" className="block text-gray-700 font-medium mb-2">
            Max Distance
          </label>
          <Input
            id="max-distance"
            type="number"
            value={filters.maxDistance}
            onChange={(e) => handleFilterChange("maxDistance", Number(e.target.value))}
            placeholder="Enter maximum distance"
          />
        </div>
        <div>
          <label htmlFor="min-base-fare" className="block text-gray-700 font-medium mb-2">
            Min Base Fare
          </label>
          <Input
            id="min-base-fare"
            type="number"
            value={filters.minBaseFare}
            onChange={(e) => handleFilterChange("minBaseFare", Number(e.target.value))}
            placeholder="Enter minimum base fare"
          />
        </div>
        <div>
          <label htmlFor="max-base-fare" className="block text-gray-700 font-medium mb-2">
            Max Base Fare
          </label>
          <Input
            id="max-base-fare"
            type="number"
            value={filters.maxBaseFare}
            onChange={(e) => handleFilterChange("maxBaseFare", Number(e.target.value))}
            placeholder="Enter maximum base fare"
          />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4">
          <label htmlFor="search" className="block text-gray-700 font-medium mb-2">
            Search
          </label>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              id="search"
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search by pickup, dropoff, distance, or fare"
              className="pl-10"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          "loading...."
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pickup Location</TableHead>
                <TableHead>Dropoff Location</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Base Fare</TableHead>
                <TableHead>Accept</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFares.map((fare) => (
                <TableRow key={fare.id}>
                  <TableCell>{fare.pickupLocation}</TableCell>
                  <TableCell>{fare.dropoffLocation}</TableCell>
                  <TableCell>{fare.distance.toFixed(2)} miles</TableCell>
                  <TableCell>${fare.baseFare.toFixed(6)}</TableCell>
                  <TableCell>
                    <Button size="sm">Accept</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
