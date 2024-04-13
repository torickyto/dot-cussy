import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;
  const authOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions
    );
    const data = await response.json();

    if (data.access_token) {
      return res.status(200).json({ accessToken: data.access_token });
    } else {
      return res.status(400).json({ error: "Failed to get access token" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
