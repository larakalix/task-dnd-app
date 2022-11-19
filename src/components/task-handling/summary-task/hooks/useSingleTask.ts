import { useTaskStore } from "@/store/taskStore";

export const useSingleTask = (id: string) => {
    const { getTask } = useTaskStore((state) => state);

    return {
        getTask,
    };
};
