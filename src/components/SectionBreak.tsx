export function SectionBreak(props: React.PropsWithChildren) {
    return (
        <div className="w-full flex items-center gap-2 fade-in-1">
            <div className="border-b-2 border-black grow"></div>
            {props.children}
            <div className="border-b-2 border-black grow"></div>
        </div>
    );
}
