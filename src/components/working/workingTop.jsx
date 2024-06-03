import React from "react";

const WorkingTop = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Ridecrypt : Decentralized Ride-Hailing
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl">
              Ridecrypt is a decentralized ride-hailing application that utilizes geofencing and Ethereum L2 solutions
              to implement trustless ride-hailing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="/placeholder.svg"
            width="550"
            height="310"
            alt="Ridecrypt Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Decentralized Ride-Hailing</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt is a decentralized ride-hailing application that leverages blockchain technology to provide a
                trustless and transparent platform for riders and drivers.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Geofencing</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt utilizes geofencing technology to ensure that rides are only initiated and completed within
                designated service areas, providing a secure and reliable experience for all users.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Ethereum L2 Integration</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt integrates with Ethereum Layer 2 solutions to provide fast, low-cost, and secure transactions
                for ride payments, ensuring a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingTop;
