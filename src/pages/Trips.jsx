import { useState, useEffect, useContext, useCallback } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../components/ui/dropdown-menu";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { Label } from "../components/ui/label";
import { ListFilterIcon, FileIcon } from "lucide-react";
import { getUserRidesAvailed, getUserRidesPerformed, getAllProposals, getAllFloats } from "../integration/scripts.js";
import { Web3Context } from "../context/web3Context";
import axios from "axios";

export default function Trips() {
  const { contractInstance, address } = useContext(Web3Context);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [earnings, setEarnings] = useState(0);
  const [spend, setSpend] = useState(0);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (contractInstance === null) return;
        const ridesAvailed = await getUserRidesAvailed(contractInstance);
        const ridesPerformed = await getUserRidesPerformed(contractInstance);
        const allProposals = await getAllProposals(contractInstance);
        let combinedData = [],
          filteredData = [];
        for (let i = 0; i < ridesAvailed.length; i++) {
          combinedData.push(allProposals[Number(ridesAvailed[i]) - 1]);
        }
        for (let i = 0; i < ridesPerformed.length; i++) {
          combinedData.push(allProposals[Number(ridesPerformed[i]) - 1]);
        }
        for (let i = 0; i < combinedData.length; i++) {
          const pickupLocation = await getReverseGeocoding(
            Number(combinedData[i][7]) / Math.pow(10, 6),
            Number(combinedData[i][8]) / Math.pow(10, 6)
          );
          const dropoffLocation = await getReverseGeocoding(
            Number(combinedData[i][9]) / Math.pow(10, 6),
            Number(combinedData[i][10]) / Math.pow(10, 6)
          );
          if (!pickupLocation || !dropoffLocation) {
            continue;
          }
          if (combinedData[i][3] === address) setEarnings(earnings + Number(combinedData[i][4]) / Math.pow(10, 15));
          if (combinedData[i][2] === address) setSpend(spend + Number(combinedData[i][4]) / Math.pow(10, 15));

          filteredData.push({
            proposalId: Number(combinedData[i][0]),
            floatId: Number(combinedData[i][1]),
            passenger: combinedData[i][2],
            driver: combinedData[i][3],
            pickupLocation: pickupLocation,
            dropoffLocation: dropoffLocation,
            distance: calculateDistance(
              Number(combinedData[i][7]),
              Number(combinedData[i][8]),
              Number(combinedData[i][9]),
              Number(combinedData[i][10])
            ),
            baseFare: Number(combinedData[i][4]) / Math.pow(10, 15),
            isCompleted: combinedData[i][5],
            isFulfilled: combinedData[i][6],
          });
        }
        setData(filteredData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [contractInstance]);
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <div className="p-4 sm:px-6 sm:py-0 md:gap-8 mt-4 mb-4">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>{address}</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Introducing Our Dynamic Rides Dashboard for Seamless Management and Insightful Analysis.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button>Create New Ride</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Total Spend</CardDescription>
                <CardTitle className="text-4xl">{spend} $</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
              </CardContent>
              <CardFooter>
                <Progress value={25} aria-label="25% increase" />
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2">
              <CardHeader className="pb-2">
                <CardDescription>Total Earnings</CardDescription>
                <CardTitle className="text-4xl">{earnings} $</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">+10% from last month</div>
              </CardContent>
              <CardFooter>
                <Progress value={12} aria-label="12% increase" />
              </CardFooter>
            </Card>
          </div>
          <Tabs defaultValue="week">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                      <ListFilterIcon className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                  <FileIcon className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value="week">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Rides</CardTitle>
                  <CardDescription>Recent rides from your service.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-center">Passenger</TableHead>
                        <TableHead className="text-center">Driver</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Pickup Location</TableHead>
                        <TableHead className="text-center">Dropoff Location</TableHead>
                        <TableHead className="text-center">Fare in Finney</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={6}>loading....</TableCell>
                        </TableRow>
                      ) : (
                        data.map((ride, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="font-medium text-center">{ride.passenger}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium text-center">{ride.driver}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium text-center">
                                {ride.isCompleted ? (
                                  ride.isFulfilled && ride.driver === address ? (
                                    <Button className="text-xs" variant="ghost">
                                      Withdraw funds
                                    </Button>
                                  ) : (
                                    <Badge className="text-xs" variant="secondary">
                                      Completed
                                    </Badge>
                                  )
                                ) : (
                                  <Badge className="text-xs" variant="destructive">
                                    Ongoing
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium text-center">{ride.pickupLocation}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium text-center">{ride.dropoffLocation}</div>
                            </TableCell>
                            <TableCell>
                              <div className="font-medium text-center">{ride.baseFare}</div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
