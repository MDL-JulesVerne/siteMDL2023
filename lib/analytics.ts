
import { Collection, MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://website:jMnST25hOaiWvjg3@cluster0.nfgszqt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

const dbName = 'website';

export default async function addView() {
    
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection('analytics');

    collection.updateOne({ date: `${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}` }, { $inc: { pageviews: 1 } }, { upsert: true }, (err) => {
        client.close();
    })
}