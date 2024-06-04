import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { ClockIcon, SmartphoneIcon, StarIcon, ShieldCheckIcon, LucideCircleDollarSign, BlocksIcon } from "lucide-react";
// import TypingAnimation from "../components/animations/TypingAnimations";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-gray-950">
      <main className="flex-1">
        <section>
          <section className="w-full h-[80vh] relative overflow-hidden">
            <img
              src="https://i.imgur.com/yDmQJ8H.jpg"
              alt="City Skyline"
              fill="true"
              width="100%"
              className="object-cover object-center filter brightness-50 dark:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center text-center space-y-4 text-gray-50">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Your Ride is Just a Tap Away
                </h1>
                <p className="max-w-xl text-lg md:text-xl">
                  Book a ride in seconds with our easy-to-use app. Reliable, safe, and convenient transportation at your
                  fingertips.
                </p>
                <div className="flex gap-4">
                  <Button>Sign Up</Button>
                  <Button>Get a Ride</Button>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose RideCrypt ?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We offer a <strong>cost efficient and trustless</strong> transportation solution that puts you in
                  control.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              <div className="grid gap-1">
                <ShieldCheckIcon className="w-10 h-10 text-[#6B46C1]" />
                <h3 className="text-lg font-bold">Safety First</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  RideCrypt ensures safe and transparent rides through blockchain technology, eliminating the need for
                  intermediaries.
                </p>
              </div>
              <div className="grid gap-1">
                <BlocksIcon className="w-10 h-10 text-[#6B46C1]" />
                <h3 className="text-lg font-bold">Web3</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  RideCrypt leverages Arbitrum to remove the long waiting times usually associated with DApps
                </p>
              </div>
              <div className="grid gap-1">
                <SmartphoneIcon className="w-10 h-10 text-[#6B46C1]" />
                <h3 className="text-lg font-bold">Convenient Booking</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Book a ride in seconds with our easy-to-use app. No more waiting on the phone or hailing a cab.
                </p>
              </div>
              <div className="grid gap-1">
                <LucideCircleDollarSign className="w-10 h-10 text-[#6B46C1]" />
                <h3 className="text-lg font-bold">Low prices</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  RideCrypt reduces operational costs by utilizing decentralized networks, offering more affordable
                  fares for riders and better earnings for drivers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-white">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real people who have experienced our ride hailing service.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-800 text-white border border-slate-200">
                <CardContent>
                  <div className="flex items-center gap-4 pt-3">
                    <Avatar className="border w-12 h-12">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-400">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold mt-4">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">
                    "I've been using this ride hailing service for over a year now and I'm consistently impressed by the
                    reliability and convenience. The app is so easy to use and the drivers are always friendly and
                    professional."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-white border border-slate-200">
                <CardContent>
                  <div className="flex items-center gap-4 pt-3">
                    <Avatar className="border w-12 h-12">
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Anderson</div>
                      <div className="text-sm text-gray-400">New York, NY</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold mt-4">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">
                    "I've used a lot of ride hailing services, but this one stands out for its commitment to safety and
                    reliability. The drivers are always professional and the app is super-easy to use."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-white border border-slate-200">
                <CardContent>
                  <div className="flex items-center gap-4 pt-3">
                    <Avatar className="border w-12 h-12">
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Michael Johnson</div>
                      <div className="text-sm text-gray-400">Chicago, IL</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold mt-4">
                    <div className="flex items-center gap-px">
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                      <StarIcon className="w-4 h-4 fill-[#6B46C1]" />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-400">
                    "I've been using this ride hailing service for the past few months and it's been a game-changer for
                    me. The convenience and reliability have made my life so much easier."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
