import { Paragraph } from "./Paragraph";

export function Skills() {
    const p1 = (
            <p>
                Я могу создавать небольшие веб-сайты, такие как этот, используя <b>ReactJS</b> и <b>TailwindCSS</b>. Но я также знаю <b>NodeJS</b> и
                чистый <b>CSS</b>. И я очень хорошо знаком с другими технологиями, такими как <b>GitHub</b>, <b>NextJS</b>, <b>GraphQL</b>,{" "}
                <b>PostgreSQL</b>. Я немного знаю фреймворк <b>Fiber</b> от <b>Golang</b> и <b>Docker</b>. Но всё-таки мои умения лучше подходят для
                фронтенд-разработчика.
            </p>
        ),
        p2 = (
            <p>
                Мои навыки - это способность быстро находить решения, умение гуглить проблемы, способность понимать чужой код и быстро осваивать новые
                технологии.
            </p>
        ),
        p3 = (
            <>
                Мои любимые языки программирования:
                <ul className="list-disc ml-8 my-4">
                    <li className="italic">TypeScript</li>
                    <li className="italic">JavaScript</li>
                    <li className="italic">Python</li>
                    <li className="italic">C#</li>
                    <li className="italic">Golang</li>
                    <li className="italic">SQL</li>
                </ul>
                Половину из них я выучил сам, а половину из университета.
            </>
        );
    return (
        <div id="skill" className="flex flex-col gap-8">
            <Paragraph title="Технологии" paragraph={p1} />
            <Paragraph title="Навыки" paragraph={p2} />
            <Paragraph title="Языки програмирования" paragraph={p3} />
        </div>
    );
}
