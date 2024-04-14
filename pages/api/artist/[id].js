//for retrieving an artist by ID.
import dbConnect from '../../../lib/mongodb';
import Artist from '../../../models/Artist';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const artist = await Artist.findById(id);
        if (!artist) return res.status(404).json({ error: 'Artist not found' });
        res.status(200).json(artist);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
