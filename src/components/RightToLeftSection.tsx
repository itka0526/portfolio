import React from "react";

export function RightToLeftSection({ children }: React.PropsWithChildren) {
    return <div className="right-to-left-div flex justify-center items-center">{children}</div>;
}
