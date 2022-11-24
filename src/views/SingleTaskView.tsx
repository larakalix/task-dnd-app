import { ViewWrapper } from "@/wrapper/ViewWrapper";
import { HandleSummaryTask } from "@/components/task-handling/summary-task/HandleSummaryTask";

type Props = {
    id: string;
};

export const SingleTaskView = ({ id }: Props) => {
    return (
        <ViewWrapper title="Update task">
            <div className="flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl">
                <HandleSummaryTask id={id} />
            </div>
        </ViewWrapper>
    );
};
