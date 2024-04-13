// ArtistPage.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ArtistHeader from '../../app/components/ArtistHeader';  // Make sure the import path is correct

const ArtistPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const fetchArtistData = async () => {
            if (!id) return;
            const accessToken = await fetch('/api/spotify').then(res => res.json()).then(data => data.accessToken);
            const artistData = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(res => res.json());
            setArtist(artistData);
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
            <div style={{ color: 'white', textAlign: 'center', padding: '20px' }}>
                <h1>{artist.name}</h1>
                <img src={artist.images[0].url} alt={artist.name} style={{ width: '200px', borderRadius: '100px' }} />
                <p>{artist.genres.join(', ')}</p>
            </div>
        </>
    );
};

export default ArtistPage;
