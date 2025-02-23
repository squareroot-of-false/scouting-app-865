import { AppData } from "./context";

const API_HOST = "http://localhost:42069"
const API_SEND = API_HOST + "/warp7api/scouting/add_report"

export async function sendReport(data: AppData) {
    const raw = data.serialize();
    const json = JSON.stringify(raw);

    const response = await fetch(API_SEND, {
        method: "POST",
        body: json,
        headers: {"Content-Type": "text/json; charset=UTF-8"}
    });
}