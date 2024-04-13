import dbConnect from "../../lib/mongodb";
import Artist from "../../models/Artist";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const artists = await Artist.find({});
      res.status(200).json(artists);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const artist = new Artist(req.body);
      await artist.save();
      res.status(201).json(artist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
