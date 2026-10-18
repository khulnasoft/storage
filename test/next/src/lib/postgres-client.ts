import type { QueryResult } from '@khulnasoft/postgres';
import { createClient } from '@khulnasoft/postgres';

export const queryUsers = async (): Promise<QueryResult> => {
  // Only create connection if env var is present
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL not configured');
  }

  const db = createClient();
  await db.connect();
  const timeoutPromise = new Promise<never>((_, reject) =>
    // eslint-disable-next-line no-promise-executor-return -- [@khulnasoft/style-guide@5 migration]
    setTimeout(() => {
      reject(new Error('SELECT hung for more than 20 seconds'));
    }, 20000),
  );
  const usersPromise = db.query('SELECT * FROM users');
  try {
    return await Promise.race([timeoutPromise, usersPromise]);
  } finally {
    await db.end();
  }
};
