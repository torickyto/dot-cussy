// fetches details of a Spotify artist using the Spotify API.
import axios from "axios";

export const fetchSpotifyArtist = async (artistId, accessToken) => {
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Spotify artist:", error);
    throw error;
  }
};
