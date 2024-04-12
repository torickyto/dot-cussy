import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';
import ArtistCarousel from '../app/components/ArtistCarousel';

const getSpotifyAccessToken = async () => {
  const res = await fetch('/api/spotify');
  const data = await res.json();
  return data.accessToken;
};

const fetchSpotifyArtist = async (artistId, accessToken) => {
  const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  return data;
};

const OurArtists = () => {
    const [artists, setArtists] = useState([]);
    const [artistId, setArtistId] = useState('');

    const handleAddArtist = async () => {
        if (!artistId.trim()) return;
        try {
            const accessToken = await getSpotifyAccessToken();
            const artist = await fetchSpotifyArtist(artistId, accessToken);
            if (artist) {
                await fetch('/api/artists', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    spotifyId: artist.id,
                    name: artist.name,
                    imageUrl: artist.images[0].url,
                  }),
                });
                setArtists(prev => [...prev, artist]);
                setArtistId('');
            }
        } catch (error) {
            console.error('Failed to fetch or add artist:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Our Artists</title>
            </Head>
            <Header />
            <main className="bg-black flex flex-col items-center justify-center h-screen">
                <div className="space-y-8 max-w-4xl p-8 text-center">
                    <h1 className="text-white text-5xl font-bold mb-8">Our Artists</h1>
                    <ArtistCarousel artists={artists} />
                    <input
                        type="text"
                        placeholder="Enter Spotify Artist ID"
                        value={artistId}
                        onChange={e => setArtistId(e.target.value)}
                        className="text-black p-3 rounded-lg mb-4 w-full max-w-xl"
                    />
                    <button onClick={handleAddArtist} className="bg-green-700 text-white text-3xl px-6 py-3 rounded-full">
                        Add Artist
                    </button>
                </div>
            </main>
        </>
    );
};

export default OurArtists;
