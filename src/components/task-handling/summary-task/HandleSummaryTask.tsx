import { useSingleTask } from "./hooks/useSingleTask";
import { Status } from "@/types/drop-zones";
import { HandleSingleTask } from "../add-task/HandleSingleTask";
import { SingleTaskSource } from "@/types/task";

type Props = {
    id: string;
};

export const HandleSummaryTask = ({ id }: Props) => {
    const { getTask } = useSingleTask(id);

    const task = getTask(id);

    return (
        <HandleSingleTask
            status={task ? task.status : Status.Backlog}
            task={task}
            source={SingleTaskSource.SingleView}
        />
    );
};
