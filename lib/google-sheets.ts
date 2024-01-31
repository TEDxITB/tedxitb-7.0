import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import "server-only";

export const appendGoogleSheets = async (
  spreadsheetId: string,
  range: string,
  valueInputOption: "RAW" | "USER_ENTERED",
  values: string[][]
) => {
  // Get private key
  const { privateKey } = JSON.parse(
    process.env.GOOGLE_PRIVATE_KEY || '{ "privateKey": null }'
  );

  // Auth Service Account
  const auth = new GoogleAuth({
    scopes: "https://www.googleapis.com/auth/spreadsheets",
    projectId: process.env.GOOGLE_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: privateKey,
    },
  });

  // Service
  const service = google.sheets({
    version: "v4",
    auth,
  });

  // Request body
  const requestBody = {
    values,
  };

  const promise = service.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption,
    requestBody,
  });

  return promise;
};
