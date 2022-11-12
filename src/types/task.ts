import { Status } from "./drop-zones";

export type Task = {
    id?: string;
    title: string;
    description: string;
    status: Status;
    isLocked: boolean;
};

export type TaskStatus = {
    id: string;
    title: string;
};
