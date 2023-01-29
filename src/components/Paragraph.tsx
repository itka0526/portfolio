export function Paragraph({ title, paragraph }: { title: string; paragraph: JSX.Element }) {
    return (
        <p className="text-xl mb-8">
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            {paragraph}
        </p>
    );
}
