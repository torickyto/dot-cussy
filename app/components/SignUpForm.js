import { useState } from 'react';

export default function SignUpForm({ onClose }) {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [genre, setGenre] = useState('');
    const [spotifyLink, setSpotifyLink] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            role, name, email, genre, spotifyLink, password
        };

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            setMessage('User registered successfully!');
            setTimeout(() => {
                setShowForm(false);
                if (onClose) onClose(); // Close the form if parent component provides this method
            }, 2000);
        } else {
            const data = await response.json();
            setMessage(data.message || 'Failed to register user');
        }
    };

    if (!showForm) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-green-500 p-8 rounded-2xl w-full max-w-4xl">
                <div>
                    <p className="text-white text-5xl text-center mb-5">Are you a...</p>
                    <div className="flex justify-center space-x-2">
                        {['artist', 'manager', 'promoter'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setRole(item)}
                                className={`rounded-full px-6 py-3 text-white text-4xl ${role === item ? 'bg-black' : 'bg-green-700'}`}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="text-2xl mt-6 space-y-6">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Artist Name" className="w-full rounded-lg p-3" />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg p-3" />
                    <input type="text" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" className="w-full rounded-lg p-3" />
                    <input type="text" value={spotifyLink} onChange={e => setSpotifyLink(e.target.value)} placeholder="Spotify Link" className="w-full rounded-lg p-3" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-lg p-3" />
                    {message && <p className="text-white">{message}</p>}
                    <div className="flex justify-between">
                        <button type="button" onClick={() => signIn('spotify')} className="bg-green-700 text-white rounded-full px-6 py-3">Sign in with Spotify</button>
                        <button type="submit" className="bg-green-700 text-white rounded-full px-6 py-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}