/**
 * SignUpForm component handles the registration form for signing up new users.
 * It collects user details (role, name, email, genre, Spotify link, password) and performs form validation and submission.
 */
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignUpForm({ onClose }) {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [genre, setGenre] = useState("");
  const [spotifyLink, setSpotifyLink] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);

  const validateForm = () => {
    const newErrors = {};
    if (!role) newErrors.role = "Role is required";
    if (!name) newErrors.name = "Artist name is required";
    if (!email) newErrors.email = "Email is required";
    if (!genre) newErrors.genre = "Genre is required";
    if (!spotifyLink) newErrors.spotifyLink = "Spotify link is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const userData = { role, name, email, genre, spotifyLink, password };

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      setMessage("User registered successfully!");
      setTimeout(() => {
        setShowForm(false);
        if (onClose) onClose();
      }, 2000);
    } else {
      const data = await response.json();
      setMessage(data.message || "Failed to register user");
    }
  };

  if (!showForm) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-green-500 p-8 rounded-2xl w-full max-w-4xl">
        <div>
          <p className="text-white text-5xl text-center mb-5">Are you a:</p>
          <div className="flex justify-center space-x-2">
            {["artist", "manager", "promoter"].map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`rounded-full px-6 py-3 text-white text-4xl ${
                  role === item ? "bg-black" : "bg-green-700"
                }`}
                style={
                  errors.role ? { borderColor: "red", borderWidth: 5 } : {}
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          {errors.role && (
            <p className="text-2xl text-red-600 -mt-14">{errors.role}</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="text-2xl mt-6 space-y-4">
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Artist Name"
            className="w-full rounded-lg p-3"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-lg p-3"
          />
          {errors.genre && (
            <p className="text-red-600 text-sm">{errors.genre}</p>
          )}
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            className="w-full rounded-lg p-3"
          />
          {errors.spotifyLink && (
            <p className="text-red-600 text-sm">{errors.spotifyLink}</p>
          )}
          <input
            type="text"
            value={spotifyLink}
            onChange={(e) => setSpotifyLink(e.target.value)}
            placeholder="Spotify Link"
            className="w-full rounded-lg p-3"
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg p-3"
            style={{ color: 'black' }}
          />

          {message && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-5xl text-white z-50">
              <div className="p-7 rounded-xl bg-black">{message}</div>
            </div>
          )}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => signIn("spotify")}
              className="bg-green-700 text-white rounded-full px-6 py-3"
            >
              Sign in with Spotify
            </button>
            <button
              type="submit"
              className="bg-green-700 text-white rounded-full px-6 py-3"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
