// create an artist page with dynamically rendered artist information

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ArtistHeader from '../../app/components/ArtistHeader';
import Footer from '../../app/components/Footer';

const ArtistPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [artist, setArtist] = useState(null);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        const fetchArtistData = async () => {
            if (!id) return;
            const accessToken = await fetch('/api/spotify').then(res => res.json()).then(data => data.accessToken);

            // Fetch artist details
            const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const artistData = await artistResponse.json();
            setArtist(artistData);

            // Fetch artist's top tracks
            const tracksResponse = await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const tracksData = await tracksResponse.json();
            setTopTracks(tracksData.tracks);
        };

        fetchArtistData();
    }, [id]);

    if (!artist) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Head>
                <title>{artist.name}</title>
            </Head>
            <ArtistHeader artist={artist} />
            <main style={{ background: "radial-gradient(circle, darkgray 0%, black 100%)", minHeight: '100vh', paddingTop: '20vh', textAlign: 'center', overflowY: 'auto' }}>
                <div className="container mx-auto">
                    <img src={artist.images[0].url} alt={artist.name} style={{ width: '200px', height: '200px', borderRadius: '50%', margin: '0 auto', marginTop: '10px' }} />
                    <p className="text-white mt-4">{artist.genres.join(', ')}</p>
                    <div className="mt-8" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                        <h2 className="text-white text-4xl font-bold">Top Tracks</h2>
                        {topTracks.map(track => (
                            <div key={track.id} className="bg-black bg-opacity-75 rounded-lg p-4 my-4 mx-auto shadow-lg" style={{ maxWidth: '500px', textAlign: 'center' }}>
                                <img src={track.album.images[0].url} alt={track.name} style={{ width: '120px', height: '120px', borderRadius: '10%', margin: '10px auto' }} />
                                <h3 className="text-white text-xl">{track.name}</h3>
                                <audio controls src={track.preview_url} style={{ width: '250px', outline: 'none', borderRadius: '10px', margin: '10px auto', display: 'block' }}>
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </main>
        </>
    );
};

export default ArtistPage;
