import { Navbar } from "./components/Navbar";
import { useRef } from "react";
import { Section } from "./components/Section";
import { Greeting } from "./components/Greeting";
import { SectionBreakText } from "./components/SectionBreakText";
import { SectionBreak } from "./components/SectionBreak";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

function App() {
    const mainRef = useRef<HTMLElement>(null);

    return (
        <main className="w-full" ref={mainRef}>
            <Navbar scrollTo={mainRef} />
            <Section>
                <Greeting />
            </Section>
            <SectionBreak>
                <SectionBreakText text="Что я умею?" scrollToIdName="skill" />
            </SectionBreak>
            <Section>
                <Skills />
            </Section>
            <SectionBreak>
                <SectionBreakText text="Контакты" scrollToIdName="contacts" />
            </SectionBreak>
            <Footer />
        </main>
    );
}

export default App;
