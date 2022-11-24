import { ITask, ITaskLabel } from "@/types/task";
import { Status } from "@/types/drop-zones";

export const LABELS: ITaskLabel[] = [
    {
        id: "label-1",
        title: "Bug",
        color: "bg-red-500",
    },
    {
        id: "label-2",
        title: "Feature",
        color: "bg-blue-500",
    },
    {
        id: "label-3",
        title: "Improvement",
        color: "bg-green-500",
    },
    {
        id: "label-4",
        title: "Story",
        color: "bg-gray-500",
    },
];

export const TASKS: ITask[] = [
    {
        id: "123",
        title: "Ticket M-123",
        description:
            "Believing neglected so so allowance existence departure in.",
        status: Status.Backlog,
        isLocked: false,
        labels: [
            {
                id: "label-2",
                title: "Feature",
                color: "bg-blue-500",
            },
        ],
        comments: [
            {
                id: "comment-1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                user: "John Doe",
                date: "2020-01-01",
            },
        ],
    },
    {
        id: "656",
        title: "Ticket M-656",
        description: "Particular unaffected projection sentiments no my.",
        status: Status.Backlog,
        isLocked: false,
        labels: [
            {
                id: "label-2",
                title: "Feature",
                color: "bg-blue-500",
            },
            {
                id: "label-3",
                title: "Improvement",
                color: "bg-green-500",
            },
        ],
        comments: [],
    },
    {
        id: "111",
        title: "Ticket M-111",
        description:
            "Situation to be at offending elsewhere distrusts if. Particular use for considered projection cultivated.",
        status: Status.Backlog,
        isLocked: true,
        labels: [
            {
                id: "label-1",
                title: "Bug",
                color: "bg-red-500",
            },
            {
                id: "label-3",
                title: "Improvement",
                color: "bg-green-500",
            },
        ],
        comments: [],
    },
    {
        id: "984",
        title: "Ticket M-984",
        description:
            "Talking chamber as shewing an it minutes. Trees fully of blind do.",
        status: Status.Backlog,
        isLocked: false,
        labels: [
            {
                id: "label-1",
                title: "Bug",
                color: "bg-red-500",
            },
            {
                id: "label-3",
                title: "Improvement",
                color: "bg-green-500",
            },
            {
                id: "label-4",
                title: "Story",
                color: "bg-gray-500",
            },
        ],
        comments: [],
    },
];
