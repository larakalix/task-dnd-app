import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Task } from "@/types/task";
import { Status } from "@/types/drop-zones";

type TaskStoreState = {
    tasks: Task[];
    addTask: (task: Task) => void;
    updateTask: (id: string, props: { [key: string]: unknown }) => void;
};

export const useTaskStore = create<TaskStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                tasks: [
                    {
                        id: "123",
                        title: "Ticket M-123",
                        description: "This is a ticket",
                        status: Status.Backlog,
                        isLocked: false,
                    },
                    {
                        id: "656",
                        title: "Ticket M-656",
                        description: "This is a ticket",
                        status: Status.Backlog,
                        isLocked: false,
                    },
                    {
                        id: "111",
                        title: "Ticket M-111",
                        description: "This is a ticket",
                        status: Status.Backlog,
                        isLocked: true,
                    },
                ],
                addTask: (task) => {
                    if (!task) return false;

                    set((state) => ({
                        tasks: [...state.tasks, task],
                    }));

                    return !!task;
                },
                updateTask: (id, props) => {
                    const tasks = get().tasks;
                    const task = tasks.find((t) => t.id === id);

                    // console.log("PROPS", props);

                    if (task) {
                        if (props["status"] as Status)
                            task.status = props["status"] as Status;

                        if (
                            (props.hasOwnProperty("isLocked") as boolean) ===
                            true
                        )
                            task.isLocked = Boolean(props["isLocked"]);
                    }

                    set({ tasks });
                },
            }),
            {
                name: "task-storage",
            }
        )
    )
);
