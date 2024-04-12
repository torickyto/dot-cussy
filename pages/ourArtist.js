import React from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';  // Adjust path as needed
import ArtistCarousel from '../app/components/ArtistCarousel';

const OurArtists = () => {
    const artists = [
        { name: 'Artist One', spotifyImage: '/path-to-image-1.jpg' },
        { name: 'Artist Two', spotifyImage: '/path-to-image-2.jpg' },
        { name: 'Artist Three', spotifyImage: '/path-to-image-3.jpg' }
    ];

    return (
        <>
            <Head>
                <title>Our Artists</title>
            </Head>
            <Header />
            <main style={{ backgroundColor: 'black', minHeight: '100vh' }}>
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-white text-center text-4xl mb-8">Our Artists</h1>
                    <ArtistCarousel artists={artists} />
                </div>
            </main>
        </>
    );
};

export default OurArtists;
