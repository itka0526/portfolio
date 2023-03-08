export function Section({ children }: React.PropsWithChildren) {
    return (
        <section
            className="
            w-full my-10 md:my-20 lg:my-28 overflow-x-hidden
            flex justify-center items-center
        "
        >
            <div className="w-11/12 md:w-5/6 lg:w-4/5">{children}</div>
        </section>
    );
}

export function FullSection({ children }: React.PropsWithChildren) {
    return (
        <section
            className="
            w-full my-10 md:my-20 lg:my-28 overflow-x-hidden overflow-y-visible
            flex justify-center items-center
        "
        >
            {children}
        </section>
    );
}
