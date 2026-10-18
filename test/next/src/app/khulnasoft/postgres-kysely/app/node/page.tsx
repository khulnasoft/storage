import { queryUsers } from '@/lib/postgres-kysely';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page(): Promise<React.JSX.Element> {
  const users = await queryUsers();
  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
