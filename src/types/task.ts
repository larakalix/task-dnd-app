import { Status } from "./drop-zones";

export type ITask = {
    id?: string;
    title: string;
    description: string;
    status: Status;
    isLocked: boolean;
    labels: ITaskLabel[];
    comments: ITaskComment[];
};

export type ITaskStatus = {
    id: string;
    title: string;
};

export type ITaskLabel = {
    id: string;
    title: string;
    color: string;
};

export type ITaskComment = {
    id: string;
    text: string;
    user: string;
    date: string;
};

export type IHandleSingleTaskProps = {
    status: Status;
    task?: ITask | null;
};
