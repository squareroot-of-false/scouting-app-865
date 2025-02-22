import { useContext } from "react";
import { AppContext, AppData } from "./context";
import { google, sheets_v4 } from "googleapis";

const clientId = {
    "type": "service_account",
    "project_id": "scouting-app-416501",
    "private_key_id": "682838a70d7a8b1f5918fb4e819cdc5e3144f1c4",
    "private_key":
        "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7hycK08LtrAlR\n0SGvVSNZKwzWdHtoGs/uee74QCmhYigW+9P/7VZEv5a8bicb9B9DKcHRygioHHRg\ndoUN8pT4Mrj237xG53cjwY7wagw9p+qIHjO/Zi8vCwGd4KD7mTfMeLmsZpwW7lak\nQQd/81v6l+CY0u3oNfLW2EgaPE4rlqrIJu5+kyXG/iQKrZnu2foT7o7L3sKTVcvV\niWyzV6SrcUe3Yz+BlLb2lZ8eXajUeOdsRe69rvY2kySWQruZdhRaklHFRga8Fp4V\nOtxUA8TpL5lSKSaLJo0pfOjkOUU6NO67Y1wI+oX+ASL/CyGfzWBvcHiU7tpsZy6/\nyG9hOjJxAgMBAAECggEAFCJgNkDjSnpwq7itCbK172J4Z+QsxdIvJhcwabYV4i50\nSHd0XSOh4hLB/+xBxbYRzzfCCCDNiiM3+Y1wHr2/ceCcTGFcSS6b85paGwT/2HTZ\ncRDxFGlHwqDHZSiTkD/0pj8GDHUd6DZh1hPnVr0N0JuS8UWgZpC4SIoDP9HewL4m\n7de67VyfpCY/P/D0IuyKDSwFJ1Pt+qI4EyjDdcLYFiE+PMkOQcZeSncRDkSbP/rR\nqpkDNHoeQ8k2KQzjrE1AX/voz6BVQT8UGRbyUfwc3mUZHN93f1DrpLSCLa3M3epU\nQefaQ8yCA5GiLFzxwdqVS/U8hYCKQUb9lGp/DotKawKBgQDm1GUqhCr93rPj+01v\nkDxidWOYiNc1CcTs+/MJdhPGWNeyZ+MvQSIMqdsHajtC2ZuozfxPbCIipPh5GOz0\nYMsuAjvmdz7xbpqwrB2n5AyLSdWzBrxWe50trr2uDlKwjvO4W0Qt9aQvX/T0jo0L\niDbmopitg45TPpg2V5KinbbW0wKBgQDP+f2V4RCtCU9+LM0SRWo0N30t/GjYOgvj\nQa5zJ8nwzjaJ8LJutHJMjNIKM/SlzvxBNFZmRbuDelbD7bdmgwQxOnCMdybnQjrh\n7RGoK41lXweMnV86mCKBT1aLr+aY5kuOhRTlXHRg1n0MARZgNYR/a23+9S3SHR5X\nnxbXCkNPKwKBgHomoZabNIj95iJaJUNJh7ruthLNL12A2vYx6g3yr0pCT3q4oS+r\nfxJGfILzA4M/1rDAuKlq5rGArYCf4Rz9b+fcBMjUB7oJttCRdGwZMU4wd2byxI3b\ngnTfSL8oEzgdnfnMSksr94OeeulD2n3kynDIUJVZzeJdeH0hYJavcUdDAoGBAJnP\nNG+n54FRJW0XDQK6O3UqpHVh+tgO9cO4S5/2iS6CE2uoiw28fduHOb859XC6x2wh\nnNQ+NhNiYtC7+arisjMGGT6I0EivfoSfozNQIl4aDac8q7TV1o7zcfoUuOHTT4Wz\nfmSyH4+OkSRTmYzFh5wEg3DPOnft+QasLWQTvvvJAoGBALbj9OeE6TGTvJzg1PS4\nwDbiAAbz2AwV+pVzkJuE+5i1WFHglpJsMrSmuFtfNNywlhLoTkRgcO4MMVpkKpTY\nPOQwomUI+ruG+kliOjBxNppf1iE78Ei0wmdfD+P1QvzgY8gRWP0vwgp2YkfBkQ3a\nV0ZPlQQDYi5wl9IgOP9CpX11\n-----END PRIVATE KEY-----\n",
    "client_email":
        "service-account@scouting-app-416501.iam.gserviceaccount.com",
    "client_id": "114609723550190806850",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url":
        "https://www.googleapis.com/robot/v1/metadata/x509/service-account%40scouting-app-416501.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
};

const scopes = "https://www.googleapis.com/auth/spreadsheets";

const spreadsheetId = '1ezBwSX63XEl19HrrPjG4Om8JQvH89rdPQQB7Dpo1RkU';
const token = new google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scopes: scopes
});
const sheets = new sheets_v4.Sheets({auth: token})
let workSheet: sheets_v4.Schema$Spreadsheet | undefined = undefined;

async function getWorkSheet(sheets: sheets_v4.Resource$Spreadsheets, title: string) {
    try {
        // try creating the sheet
        await sheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [{
                    addSheet: {
                        properties: {
                            title
                        }
                    }
                }]
            }
        });
    } catch {
        // do nothing if it exists
    }

    // get the sheet
    return (await sheets.get({
        spreadsheetId,
        ranges: [title]
    })).data;
}

export async function initSheets() {
    if (!workSheet) {
        workSheet = await getWorkSheet(sheets.spreadsheets, "Test Data");
    }
}

async function addRow(values: any[]) {
    await sheets.spreadsheets.values.append({
        spreadsheetId,
        requestBody: {values}
    });
}

export async function sendToSheets(context: AppData) {
    addRow([context.scouterName, context.match, context.team, context.position, ])
}