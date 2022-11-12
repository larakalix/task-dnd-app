import Router from "next/router";
import { SingleTaskView } from "@/views/SingleTaskView";

export default function Task() {
    const { id } = Router.query;

    if (!id || !Router.isReady) return null;

    return <SingleTaskView id={String(id)} />;
}
