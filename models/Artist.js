import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  spotifyId: { type: String, required: true, unique: true },
  name: String,
  imageUrl: String,
});

export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);
