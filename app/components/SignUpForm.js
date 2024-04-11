import { useState } from 'react';

export default function SignUpForm() {
    const [role, setRole] = useState('');

    return (
        <div className="bg-green-500 p-5 rounded-lg">
            <div>
                <p className="text-white">Are you a:</p>
                <div className="flex space-x-2">
                    <button className="bg-green-700 rounded-full px-4 py-2 text-white" onClick={() => setRole('artist')}>Artist</button>
                    <button className="bg-green-700 rounded-full px-4 py-2 text-white" onClick={() => setRole('manager')}>Manager</button>
                    <button className="bg-green-700 rounded-full px-4 py-2 text-white" onClick={() => setRole('promoter')}>Promoter</button>
                </div>
            </div>
            <form className="mt-4 space-y-4">
                <input type="text" placeholder="Artist Name" className="w-full rounded-lg p-2" />
                <input type="text" placeholder="Genre" className="w-full rounded-lg p-2" />
                <input type="text" placeholder="Spotify Link" className="w-full rounded-lg p-2" />
                <input type="password" placeholder="Password" className="w-full rounded-lg p-2" />
                <div className="flex justify-between">
                    <button type="submit" className="bg-green-700 text-white rounded-full px-4 py-2">Register</button>
                    <button className="bg-green-700 text-white rounded-full px-4 py-2">Sign in with Spotify</button>
                </div>
            </form>
        </div>
    );
}