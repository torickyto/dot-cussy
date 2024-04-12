import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['artist', 'manager', 'promoter'], required: true },
  name: { type: String, required: true },
  genre: { type: String, required: true },
  spotifyLink: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

export default mongoose.models.User || mongoose.model('User', userSchema);