import { Children, PropsWithChildren, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowLeftCircle, CornerDownLeft, ExternalLink, GitHub, Youtube } from "react-feather";
import Tilt from "react-parallax-tilt";

export function Projects() {
    return (
        <div id="projects" className="w-full flex flex-col ">
            <ScrollableRow>
                <Project imgSrc="/chat-app-ss.webp">
                    <Links
                        links={["https://chat-with-me-i54t.onrender.com/", "https://github.com/itka0526/chat-app", "https://youtu.be/MImD-nzYmy0"]}
                    />
                </Project>
                <Project imgSrc="/mirea-schedule-ss.webp">
                    <Links links={["http://mirea-schedule.vercel.app/", "https://github.com/itka0526/mirea-schedule"]} />
                </Project>
                <Project imgSrc="/file-sharing-ss.webp">
                    <Links
                        links={[
                            "https://file-sharing-tool.onrender.com/",
                            "https://github.com/itka0526/file-sharing-tool",
                            "https://youtu.be/lDejknTOJjA",
                        ]}
                    />
                </Project>
            </ScrollableRow>
        </div>
    );
}

function Links({ links }: { links: string[] }) {
    return (
        <div style={{ gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))` }} className="grid justify-center items-center h-full w-full">
            {links.map((link, idx) => {
                return (
                    <div key={link} className="h-full w-full flex justify-center items-center">
                        <a href={"/portfolio/" + link} className="">
                            {idx === 0 ? (
                                <ExternalLink className="w-9 h-9" />
                            ) : idx === 1 ? (
                                <GitHub className="w-9 h-9" />
                            ) : idx === 2 ? (
                                <Youtube className="w-9 h-9" />
                            ) : null}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

function ScrollableRow({ children }: PropsWithChildren) {
    return <div className={`flex w-full py-8 px-4 gap-5 invisible-scrollbar overflow-x-auto overflow-y-visible scrollable-row`}>{children}</div>;
}

type ProjectProps = {
    imgSrc: string;
};

function Project({ children, imgSrc }: ProjectProps & PropsWithChildren) {
    const tiltRef = useRef<Tilt>(null);

    return (
        <div className="min-w-[42.5vw] min-h-[22vw] max-md:min-w-[85vw] max-md:min-h-[44vw] p-2 hover:scale-[1.03] duration-300 transition-transform ease-linear">
            <Tilt
                ref={tiltRef}
                tiltReverse={true}
                glareEnable={true}
                glareMaxOpacity={0.1}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="w-full h-full custom-shadow rounded-md overflow-hidden transition-transform "
            >
                <div className="w-full h-full flex justify-center items-center shadow-lg relative group">
                    <img draggable={false} className="object-contain" src={imgSrc}></img>
                    <FadeInElement>{children}</FadeInElement>
                </div>
            </Tilt>
        </div>
    );
}

function FadeInElement({ children }: PropsWithChildren) {
    return (
        <div className="w-full absolute max-md:h-1/4 h-1/5 bottom-0 left-0 glass-bg opacity-0 transition-opacity md:group-hover:opacity-100 max-md:opacity-100">
            {children}
        </div>
    );
}
