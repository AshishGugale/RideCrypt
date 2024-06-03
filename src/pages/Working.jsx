import { GithubIcon } from "lucide-react";
import { ResponsiveLine } from "@nivo/line";
import WorkingWorkflow from "../components/working/workingWorkflow";
import WorkingKeyFeatures from "../components/working/workingKeyFeatures";
import WorkingTop from "../components/working/workingTop";
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
      <main className="flex-1">
        <WorkingTop />
        <WorkingKeyFeatures />
        <WorkingWorkflow />
      </main>
    </div>
  );
}
