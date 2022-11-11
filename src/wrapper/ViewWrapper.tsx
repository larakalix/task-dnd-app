type Props = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

export const ViewWrapper = ({ title, children }: Props) => {
    return (
        <section className="px-4 py-6">
            <h1 className="text-t-dz-black uppercase font-bold tracking-wider text-[1.4rem] mb-4">
                {title}
            </h1>

            <div>{children}</div>
        </section>
    );
};
