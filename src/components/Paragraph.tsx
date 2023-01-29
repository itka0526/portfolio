export function Paragraph({ title, paragraph }: { title: string; paragraph: JSX.Element }) {
    return (
        <div className="text-xl">
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <div>{paragraph}</div>
        </div>
    );
}
