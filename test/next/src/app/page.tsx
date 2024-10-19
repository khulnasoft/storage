import Link from 'next/link';

export default function Page(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100vw',
      }}
    >
      <h2>App Links</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'stretch',
        }}
      >
        <Link href="/khulnasoft/edge-config">Edge Config</Link>
        <Link href="/khulnasoft/kv">KV</Link>
        <Link href="/khulnasoft/postgres">Postgres</Link>
        <Link href="/khulnasoft/postgres-kysely">Postgres Kysely</Link>
        <Link href="/khulnasoft/blob">Blob</Link>
      </div>
      <h2>Page Links</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'stretch',
        }}
      >
        <Link href="/vercel/pages/blob">Blob</Link>
        <Link href="/vercel/pages/blob/image">Blob Image</Link>
      </div>
    </div>
  );
}
