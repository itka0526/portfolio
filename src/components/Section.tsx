export function Section({ children }: React.PropsWithChildren) {
    return (
        <section
            className="
            w-full my-28 overflow-x-hidden
            flex justify-center items-center
        "
        >
            <div className="w-3/4">{children}</div>
        </section>
    );
}
