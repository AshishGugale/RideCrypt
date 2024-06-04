const RidecryptWorkflow = () => {
  return (
    <section>
      <div className="flex flex-col  bg-gray-100">
        <div className="flex flex-col dark:bg-gray-950 items-center dark:text-gray-50 justify-center pt-12  text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-gray-50 text-gray-800">
              Workflow
            </h2>
            <p className="max-w-[900px] dark:text-gray-400 text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The entire workflow can be divided into 3 planes: rider, driver and server
            </p>
          </div>
        </div>
        <div className="flex flex-row ">
          <section id="rider-workflow" className="w-full dark:bg-gray-950 text-gray-900 dark:text-gray-50">
            <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 h-full">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 sm:p-8 h-full">
                <h2 className="text-2xl font-semibold mb-4 ">Rider Workflow</h2>
                <div className="border-b-2 dark:border-white mb-2 -mt-1 border-gray-900"></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Proposal floated</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Riders float a ride proposal and send a pre-assigned fare to the smart contract.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className=" dark:text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>
                    <div>
                      <h3 className="text-lg font-medium">Receive Passcode</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Riders receive a randomly generated passcode to provide to the driver.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className=" dark:text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>
                    <div>
                      <h3 className="text-lg font-medium">Ride allocation</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Riders are assigned a ride when a driver accepts the proposal. In case of a cancellation, they
                        can request their deposit back which cancels the floated proposal.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className=" dark:text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>
                    <div>
                      <h3 className="text-lg font-medium">Ride Completion</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Riders reach their destination without the need for manual payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="driver-workflow" className="w-full  dark:bg-gray-950 text-gray-900 dark:text-gray-50">
            <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 h-full ">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 sm:p-8 h-full ">
                <h2 className="text-2xl font-semibold mb-4">Driver Workflow</h2>
                <div className="border-b-2 dark:border-white mb-2 -mt-1 border-gray-900"></div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Accept Proposal</h3>
                      <p className="text-gray-700 dark:text-gray-400">Drivers accept a ride proposal from the rider.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Verify Passcode</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Drivers board the rider based on the provided passcode.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Complete Ride</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Drivers drop the rider at the specified location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Withdraw Payment</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        Drivers withdraw their earnings through a decentralized payment system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="server-workflow" className="w-full dark:bg-gray-950 text-gray-900 dark:text-gray-50">
            <div className="w-full max-w-4xl mx-auto p-6 sm:p-10 h-full">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 sm:p-8 h-full">
                <h2 className="text-2xl font-semibold mb-4">Server Workflow</h2>
                <div className="border-b-2 dark:border-white mb-2 -mt-1 border-gray-900"></div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Smart Contract Creation</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        The server creates a smart contract proposal when the rider inputs the correct passcode.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Geofence Generation</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        The server generates a geofence around 150m of the drop-off location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500 dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Cab Location Tracking</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        The server continuously listens for updates on the cab's location.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-500  dark:text-white rounded-full w-8 h-8 flex items-center justify-center">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Ride Fulfillment</h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        The ride is marked as fulfilled when the cab crosses the geofence, enabling the rider to pull
                        their payment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default RidecryptWorkflow;
