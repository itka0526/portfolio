import { Navbar } from "./components/Navbar";
import { useRef } from "react";
import { Section } from "./components/Section";
import { Greeting } from "./components/Greeting";
import { WhatCanIdo } from "./components/WhatCanIdo";
import { SectionBreak } from "./components/SectionBreak";
import { Skills } from "./components/Skills";

function App() {
    const mainRef = useRef<HTMLElement>(null);

    return (
        <main className="w-full" ref={mainRef}>
            <Navbar scrollTo={mainRef} />
            <Section>
                <Greeting />
            </Section>
            <SectionBreak>
                <WhatCanIdo />
            </SectionBreak>
            <Section>
                <Skills />
            </Section>
        </main>
    );
}

export default App;
