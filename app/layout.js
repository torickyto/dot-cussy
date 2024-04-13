import "./globals.css";
import { NextAuthProviders } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body style={{
        backgroundImage: "url('/homeBackground.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: '0',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw'
      }}>
        <NextAuthProviders>
          <div className=" max-w-4xl mx-auto">
            {children}
          </div>
        </NextAuthProviders>
      </body>
    </html>
  );
}
