import { AppData } from "./context";

const API_HOST = "http://randomcode.dev:42069"
const API_ROOT = API_HOST + "/warp7api/scouting"
const API_SEND = API_ROOT + "/add_report"

export async function sendReport(data: AppData) {
    const raw = data.serialize();
    const json = JSON.stringify(raw);

    console.log(json);

    try {
        const response = await fetch(API_SEND, {
            method: "POST",
            body: json,
            // text/plain instead of application/json so i dont have to handle OPTIONS
            headers: { "Content-Type": "text/plain; charset=UTF-8" }
        });
    } catch { };
}