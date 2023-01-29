import { CornerDownLeft } from "react-feather";
import { RightToLeftSection } from "./RightToLeftSection";
import { FillerOne } from "./FillerOne";
import { scrollToId } from "./hooks/scrollToId";

export function Greeting() {
    return (
        <RightToLeftSection>
            <div id="greeting" className="grid md:grid-cols-[45%,55%] gap-4">
                <div className="flex flex-col justify-evenly">
                    <h1 className="greeting-text">
                        Привет,
                        <br /> Меня зовут <br />
                        <span className="red-blue-switch transition-colors font-extrabold"> Итгэлт</span>.
                    </h1>
                    <p className="text-2xl">
                        Я <span className="">❤️</span> программировать и спать.
                    </p>
                    <div
                        className="flex items-center md:hover:-translate-y-1 duration-200 transition-transform hover:cursor-pointer"
                        onClick={() => scrollToId("skill")}
                    >
                        <span className="text-xl md:text-2xl underline underline-offset-[6px]">Дальше читать</span>
                        <CornerDownLeft className="scale-105 mx-1 mt-1" />
                    </div>
                </div>
                <FillerOne />
            </div>
        </RightToLeftSection>
    );
}
