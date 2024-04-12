import React from 'react';
import Slider from 'react-slick';

const ArtistCarousel = ({ artists }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {artists.map((artist, index) => (
                <div key={index} className="p-4">
                    <img src={artist.spotifyImage} alt={artist.name} className="block mx-auto"/>
                    <p className="text-center text-white">{artist.name}</p>
                </div>
            ))}
        </Slider>
    );
};

export default ArtistCarousel;