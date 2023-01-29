import { GitHub, Smartphone } from "react-feather";
import { Telegram } from "./Telegram";

export function Footer() {
    return (
        <footer id="contacts" className="flex items-center justify-center">
            <div className="flex w-2/3 md:w-1/3 justify-between items-center my-8">
                <a
                    href="https://github.com/itka0526"
                    title="https://github.com/itka0526"
                    target={"_blank"}
                    className="flex flex-col justify-center items-center gap-2 custom-hover"
                >
                    <span className="font-bold">ГитХаб</span>
                    <GitHub className="h-9 w-9" />
                </a>
                <a
                    href="https://t.me/itka0526"
                    title="https://t.me/itka0526"
                    target={"_blank"}
                    className="flex flex-col justify-center items-center gap-2 custom-hover"
                >
                    <span className="font-bold">Телеграм</span>
                    <Telegram className="h-10 w-10" />
                </a>
                <a href="tel:+79771041142" title="+7(977)104-11-42" className="flex flex-col justify-center items-center gap-2 custom-hover ">
                    <span className="font-bold">Телефон</span>
                    <Smartphone className="h-9 w-9" />
                </a>
            </div>
        </footer>
    );
}
