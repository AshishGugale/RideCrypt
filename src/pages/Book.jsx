import React from "react";
import { Label } from "../components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Calendar } from "../components/ui/calendar";

const Book = () => {
  return (
    <section>
      <div className="flex p-4 gap-4">
        <div className="w-1/2">
          <Card className="w-full h-full"></Card>
        </div>
        <div className="flex flex-col items-start space-y-4 w-1/2">
          <div className="w-full">
            <Card className="w-full rounded-lg shadow-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <Label htmlFor="pickup" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Pickup Location
                  </Label>
                  <Input
                    type="text"
                    id="pickup"
                    placeholder="Enter pickup location"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Drop-off Location
                  </Label>
                  <Input
                    type="text"
                    id="dropoff"
                    placeholder="Enter drop-off location"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1] sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">Select Date</span>
                        <span className="font-normal">{new Date().toLocaleDateString()}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px] bg-gray-950 text-white">
                      <Calendar />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Time
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="flex-col items-start w-full h-auto">
                        <span className="font-semibold uppercase text-[0.65rem]">Select Time</span>
                        <span className="font-normal">{new Date().toLocaleTimeString()}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 max-w-[276px] bg-gray-950 text-white">
                      <div />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <Button size="lg" className="w-full bg-[#6B46C1] text-white hover:bg-[#805AD5] focus:ring-[#6B46C1]">
                Find Ride
              </Button>
            </Card>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <h1 className="text-2xl font-bold">Book a Ride</h1>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Economy</CardTitle>
                  <CardDescription>Affordable and comfortable ride</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold">$10</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per ride</div>
                    </div>
                    <Button variant="outline">Select</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Luxurious and spacious ride</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold">$20</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per ride</div>
                    </div>
                    <Button variant="outline">Select</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>SUV</CardTitle>
                  <CardDescription>Spacious and comfortable for groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold">$30</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per ride</div>
                    </div>
                    <Button variant="outline">Select</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
