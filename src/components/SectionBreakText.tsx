import { ArrowDownRight } from "react-feather";
import { scrollToId } from "./hooks/scrollToId";

export function SectionBreakText({ text, scrollToIdName }: { text: string; scrollToIdName: string }) {
    return (
        <div
            className="flex items-center md:hover:-translate-y-1 duration-200 transition-transform hover:cursor-pointer"
            onClick={() => scrollToId(scrollToIdName)}
        >
            <span className="text-2xl font-bold">{text}</span>
            <ArrowDownRight className="h-8 w-8" />
        </div>
    );
}
