This project serves as the digital presence for Dot Cussy, a record label that showcases its artists and their music. It integrates with Spotify to fetch artist details and showcase top tracks. Users can create an account, log in through Spotify, and manage the roster of artists.

Uses:
- **MongoDB**
- **Node.js with Next.js**
- **React.js with Tailwind CSS**
- **Spotify API**
- **NextAuth**

Features:

- **User Authentication**: Users can sign up, log in, and log out. Supports authentication through Spotify, allowing users to link their Spotify accounts.
- **Artist Roster**: View a list of all artists signed under the record label. Each artist has a profile with their top tracks sourced from Spotify.
- **Add Artists**: Users can add new artists to the roster by entering the artist's Spotify ID, which then fetches and stores the artist's information from Spotify.
- **Interactive Artist Pages**: Each artist has a dedicated page displaying their image, genre, and a selection of their top tracks with an embedded Spotify player.
