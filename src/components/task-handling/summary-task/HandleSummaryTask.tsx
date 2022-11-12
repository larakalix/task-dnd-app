import { useSingleTask } from "./hooks/useSingleTask";

type Props = {
    id: string;
};

export const HandleSummaryTask = ({ id }: Props) => {
    const {} = useSingleTask(id);

    return <div>HandleSummaryTask</div>;
};
