import React from "react";

const WorkingTop = () => {
  return (
    <section className="w-full h-lvh pt-12 md:pt-24 lg:pt-32 dark:bg-gray-950 bg-gray-100">
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-800 dark:text-white">
              Ridecrypt : Decentralized Ride-Hailing
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-400 md:text-xl">
              Ridecrypt is a decentralized ride-hailing application that utilizes geofencing and Ethereum L2 solutions
              to implement trustless ride-hailing.
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 p-4 w-3/5 h-full">
            <div className="grid gap-1  bg-gray-200 dark:bg-slate-700 rounded-lg p-4">
              <h3 className="text-xl font-bold dark:text-white text-gray-800">Decentralized Ride-Hailing</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt is a decentralized ride-hailing application that leverages blockchain technology to provide a
                trustless and transparent platform for riders and drivers.
              </p>
            </div>
            <div className="grid gap-1  bg-gray-200 dark:bg-slate-700 text-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold dark:text-white">Geofencing</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt utilizes geofencing technology to ensure that rides are only initiated and completed within
                designated service areas, providing a secure and reliable experience for all users.
              </p>
            </div>
            <div className="grid gap-1  bg-gray-200 dark:bg-slate-700 text-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold dark:text-white">Ethereum L2 Integration</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Ridecrypt integrates with Ethereum Layer 2 solutions to provide fast, low-cost, and secure transactions
                for ride payments, ensuring a seamless user experience.
              </p>
            </div>
          </div>
          <div className="">
            <div className="rounded-lg p-4">
              <img
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjQzcWU3NmVoM2pyNjh0aGM4N2drM2dzaWxwNXkzOWlpNGU3a2JuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6zwCn1vbgaYZDVnQt2/giphy.gif"
                className="giphy-embed w-full h-full rounded-lg"
                allowFullScreen
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingTop;
