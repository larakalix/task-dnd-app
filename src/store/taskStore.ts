import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Task } from "@/types/task";
import { Status } from "@/types/drop-zones";

type TaskStoreState = {
    tasks: Task[];
    addTask: (task: Task) => void;
    getTask: (id: string) => Omit<Task, "id"> | undefined;
    updateTask: (id: string, props: Partial<Task>) => void;
    reorderTasks: (fromId: string, toId: string) => void;
};

export const useTaskStore = create<TaskStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                tasks: [
                    {
                        id: "123",
                        title: "Ticket M-123",
                        description:
                            "Believing neglected so so allowance existence departure in.",
                        status: Status.Backlog,
                        isLocked: false,
                    },
                    {
                        id: "656",
                        title: "Ticket M-656",
                        description:
                            "Particular unaffected projection sentiments no my.",
                        status: Status.Backlog,
                        isLocked: false,
                    },
                    {
                        id: "111",
                        title: "Ticket M-111",
                        description:
                            "Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated.",
                        status: Status.Backlog,
                        isLocked: true,
                    },
                    {
                        id: "984",
                        title: "Ticket M-984",
                        description:
                            "Talking chamber as shewing an it minutes. Trees fully of blind do.",
                        status: Status.Backlog,
                        isLocked: false,
                    },
                ],
                addTask: (task) => {
                    if (!task) return false;

                    set((state) => ({
                        tasks: [...state.tasks, task],
                    }));

                    return !!task;
                },
                getTask: (id: string) => {
                    return get().tasks.find((task) => task.id === id);
                },
                updateTask: (id, props) => {
                    const tasks = get().tasks;
                    let task = get().tasks.find((t) => t.id === id);

                    if (task) Object.assign(task, props);

                    set({ tasks });
                },
                reorderTasks: (fromId, toId) => {
                    const tasks = get().tasks;
                    const from = tasks.find((task) => task.id === fromId);
                    const to = tasks.find((task) => task.id === toId);

                    const fromIndex = tasks.indexOf(from!);
                    const toIndex = tasks.indexOf(to!);
                    const element = tasks.splice(fromIndex, 1)[0];

                    tasks.splice(toIndex, 0, element);

                    set({ tasks });
                },
            }),
            {
                name: "task-storage",
            }
        )
    )
);
