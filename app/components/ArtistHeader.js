import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SignInButton from "./SignInButton";

const ArtistHeader = ({ artist }) => {
  const router = useRouter();
  const isArtistPage = router.pathname.includes("/artist/[id]");

  const headerStyle = {
    background: "linear-gradient(to bottom, #333, #000)",
    height: "20vh",
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full px-4 z-10"
        style={headerStyle}
      >
        <div className="header-container flex justify-between items-center w-full h-full">
          <Link legacyBehavior href="/ourArtists">
            <a className="text-2xl md:text-3xl lg:text-4xl text-white hover:underline">
              &larr; Back to Our Artists
            </a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="flex-initial mr-36 -mt-32">
              <img
                src="/dotcussyPatch.png"
                alt="logo"
                className="h-32 w-auto"
              />
            </a>
          </Link>
          <SignInButton />
        </div>
        {isArtistPage && artist && (
          <div className=" -mt-28 w-full flex justify-center items-end pb-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-bold">
              {artist.name}
            </h1>
          </div>
        )}
      </header>
    </>
  );
};

export default ArtistHeader;
