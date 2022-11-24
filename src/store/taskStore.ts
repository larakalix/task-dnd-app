import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ITask, ITaskLabel } from "@/types/task";
import { Status } from "@/types/drop-zones";
import { LABELS, TASKS } from "src/data/data";

type TaskStoreState = {
    tasks: ITask[];
    labels: ITaskLabel[];
    addTask: (task: ITask) => void;
    getTask: (id: string) => Omit<ITask, "id"> | undefined;
    updateTask: (id: string, props: Partial<ITask>) => void;
    reorderTasks: (fromId: string, toId: string) => void;
};

export const useTaskStore = create<TaskStoreState>()(
    devtools(
        persist(
            (set, get) => ({
                tasks: TASKS,
                labels: LABELS,
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
