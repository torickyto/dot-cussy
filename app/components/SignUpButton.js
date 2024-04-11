import { useState } from 'react';
import SignUpForm from './SignUpForm.js';

export default function SignUpButton() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <button className="bg-green-500 text-white rounded-full px-4 py-2" onClick={() => setShowForm(!showForm)}>
                Sign Up
            </button>
            {showForm && <SignUpForm />}
        </>
    );
}