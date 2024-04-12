import { useState } from 'react';

export default function SignUpForm() {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');  // Add email state
    const [genre, setGenre] = useState('');
    const [spotifyLink, setSpotifyLink] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            role, name, email, genre, spotifyLink, password  // Include email in userData
        };
        
        const response = await fetch('/api/auth/register', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            console.log('User registered successfully');
        } else {
            console.error('Failed to register user');
        }
    };

    return (
        <div className="bg-green-500 p-5 rounded-lg">
            <div>
                <p className="text-white">Are you a:</p>
                <div className="flex space-x-2">
                    <button onClick={() => setRole('artist')} className="bg-green-700 rounded-full px-4 py-2 text-white">Artist</button>
                    <button onClick={() => setRole('manager')} className="bg-green-700 rounded-full px-4 py-2 text-white">Manager</button>
                    <button onClick={() => setRole('promoter')} className="bg-green-700 rounded-full px-4 py-2 text-white">Promoter</button>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Artist Name" className="w-full rounded-lg p-2" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg p-2" />  // Email input field
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" className="w-full rounded-lg p-2" />
                <input type="text" value={spotifyLink} onChange={e => setSpotifyLink(e.target.value)} placeholder="Spotify Link" className="w-full rounded-lg p-2" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-lg p-2" />
                <div className="flex justify-between">
                    <button type="submit" className="bg-green-700 text-white rounded-full px-4 py-2">Register</button>
                </div>
            </form>
        </div>
    );
}