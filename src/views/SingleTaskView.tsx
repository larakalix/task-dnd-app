import { ViewWrapper } from "@/wrapper/ViewWrapper";
import { HandleSummaryTask } from "@/components/task-handling/summary-task/HandleSummaryTask";

type Props = {
    id: string;
};

export const SingleTaskView = ({ id }: Props) => {
    return (
        <ViewWrapper title="Update task">
            <HandleSummaryTask id={id} />
        </ViewWrapper>
    );
};
