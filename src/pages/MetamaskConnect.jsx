import { Button } from "../components/ui/button";

export default function MetamaskConnect() {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-950">
      <img
        src="/metamask.png"
        alt="Background"
        fill="true"
        height="100%"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
      />
      <div className="relative z-10 space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Please connect your Metamask to connect with RideCrypt...
        </h1>
        <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
          Connect Metamask
        </Button>
      </div>
    </div>
  );
}
