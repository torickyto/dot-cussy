import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div style={{ padding: '20px' }}>
            <Slider {...settings}>
            {artists.map(artist => (
  <Link legacyBehavior key={artist.spotifyId} href={`/artist/${artist.spotifyId}`}>
    <a>
      <div style={{ margin: '10px', textAlign: 'center' }}>
        <img src={artist.imageUrl} alt={artist.name} style={{ width: '300px', height: '300px', borderRadius: '100%' }} />
        <h3 className="text-white text-4xl">{artist.name}</h3>
      </div>
    </a>
  </Link>
))}
            </Slider>
        </div>
    );
}

export default ArtistCarousel;