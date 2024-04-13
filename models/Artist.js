import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  spotifyId: { type: String, required: true, unique: true },
  name: String,
  imageUrl: String
});

// Check if the model exists first and if not, compile it
export default mongoose.models.Artist || mongoose.model('Artist', artistSchema);