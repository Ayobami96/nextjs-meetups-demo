// api/new-meetup
// Post requeat

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Bammy:0kikih0lla@cluster0.1edqu8a.mongodb.net/meetups');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        
        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup Inserted'});
    }
}

export default handler;