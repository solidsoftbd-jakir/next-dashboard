import { db, sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const client = await db.connect();

    try {
        const result = await client.query('SELECT * FROM products;');
        return NextResponse.json(result.rows); // Return only the rows
    } catch (error) {
        console.error('Error querying products:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    } finally {
        client.release();
    }
}
