import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Task } from "@/types/task";
import { Status } from "@/types/drop-zones";

type TaskStoreState = {
    tasks: Task[];
    updateTask: (id: string, status: Status) => void;
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
                    },
                    {
                        id: "656",
                        title: "Ticket M-656",
                        description: "This is a ticket",
                        status: Status.Backlog,
                    },
                    {
                        id: "111",
                        title: "Ticket M-111",
                        description: "This is a ticket",
                        status: Status.Backlog,
                    },
                ],
                updateTask: (id: string, status: Status) => {
                    const tasks = get().tasks;
                    const task = tasks.find((t) => t.id === id);
                    if (task) {
                        task.status = status;
                        set({ tasks });
                    }
                },
            }),
            {
                name: "task-storage",
            }
        )
    )
);
