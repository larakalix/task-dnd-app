import { useEffect, useState } from "react";

export const HydrateGuard = ({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (typeof window === "undefined" || !isHydrated) return null;

    return <>{children}</>;
};
