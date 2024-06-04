export default function ErrorBoundary() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-4 md:px-6 bg-slate-700">
      <div className="text-center space-y-2">
        <div style={{ textAlign: "center", padding: "20px", color: "white" }}>
          <h1 className="text-6xl">Oops! Something went wrong.</h1>
          <p className="text-3xl pt-4">Don't tell my boss {":)" }</p>
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGZvZ216cnZmcHRyeWJiemdzZm03M29ocXphM25kNHBsd3hzeXZ3dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CWN0uW6ELn3pK/giphy.gif"
            alt="Error Gif"
            className="h-full w-full p-4"
          />
        </div>
        <a
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
