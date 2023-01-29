import { scrollToRef } from "./hooks/scrollToRef";

export function Navbar({ scrollTo }: { scrollTo: React.RefObject<HTMLElement> }) {
    return (
        <nav
            className="
                h-14 px-4 flex justify-between items-center
                sticky top-0 bg-white z-10 border-b-2 border-black
                "
        >
            <LeftSide scrollTo={scrollTo} />
            <RightSide />
        </nav>
    );
}

const LeftSide = ({ scrollTo }: { scrollTo: React.RefObject<HTMLElement> }) => {
    return (
        <div onClick={() => scrollToRef(scrollTo)} className="hover:cursor-pointer">
            <span className="font-extrabold text-2xl ">IP</span>
        </div>
    );
};

const RightSide = () => {
    return <div></div>;
};
