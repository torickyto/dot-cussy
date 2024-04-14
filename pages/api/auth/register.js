//for registering a new user
import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password, role, genre, spotifyLink } = req.body;

    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email }); // Look up by email
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with that email" });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const user = new User({
      name,
      email,
      role,
      genre,
      spotifyLink,
      password: hashedPassword,
    });

    try {
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
