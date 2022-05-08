import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const bookingSystem = require('../../booking-system.json');
const admin = require('firebase-admin');
import { autoId } from '@google-cloud/firestore/build/src/util';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const COLLECTION_NAME = 'events';

    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: cert(bookingSystem),
        });
    }

    const db = getFirestore();

    const targetDoc = '3ToD982CLZwYadfUWBJ0';

    if (req.method === 'POST') {
        const docRef = db.collection(COLLECTION_NAME).doc();
        const insertData = {
            uuid: autoId(),
            name: 'Yoga',
            crated_at: admin.firestore.FieldValue.serverTimestamp(),
            starting_time: '2022-05-08T11:00:00Z',
            ending_time: '2022-05-08T12:00:00Z',
        };

        await docRef.set(insertData);
    }

    if (req.method === 'GET') {
        await db.collection(COLLECTION_NAME).get();
    }

    if (req.method === 'DELETE') {
        await db.collection(COLLECTION_NAME).doc(targetDoc).delete();
    }

    res.status(200);
}
