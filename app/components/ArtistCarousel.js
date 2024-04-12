import React, { useEffect, useState } from 'react';

const ArtistCarousel = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const fetchArtists = async () => {
            const response = await fetch('/api/artists');
            const data = await response.json();
            setArtists(data);
        };

        fetchArtists();
    }, []);

    return (
        <div className="carousel-container">
            {Array.isArray(artists) ? artists.map(artist => (
                <div key={artist.spotifyId} className="carousel-item">
                    <img src={artist.imageUrl} alt={artist.name} />
                    <h3>{artist.name}</h3>
                </div>
            )) : <p>No artists found</p>}
        </div>
    );
}

export default ArtistCarousel;