import React from "react";

export function TopToBottomSection({ children }: React.PropsWithChildren) {
    return (
        <section className="px-4">
            <div className="top-to-bottom-section-div">{children}</div>
        </section>
    );
}
