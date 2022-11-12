import Router from "next/router";
import { SingleTaskView } from "@/views/SingleTaskView";

export const Task = () => {
    const { id } = Router.query;

    if (!id) return null;

    return <SingleTaskView id={String(id)} />;
};
