import { ArrowDownRight } from "react-feather";
import { scrollToId } from "./hooks/scrollToId";

export function WhatCanIdo() {
    return (
        <div
            className="flex items-center md:hover:-translate-y-1 duration-200 transition-transform hover:cursor-pointer"
            onClick={() => scrollToId("skill")}
        >
            <span className="text-2xl font-bold">Что я умею?</span>
            <ArrowDownRight className="h-8 w-8" />
        </div>
    );
}
