import Link from 'next/link';

export default function AddFirstSite() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 28,
        padding: 24,
        textAlign: 'center',
        background: 'var(--dots-yellow), var(--sheet)',
      }}
    >
      <span className="balloon" style={{ maxWidth: 380 }}>
        Your first site goes here!
      </span>
      <p style={{ maxWidth: 420, fontSize: 17, lineHeight: 1.55, marginTop: 8 }}>
        Add your site to the dashboard and take control of your comments.
      </p>
      <Link href="/dashboard/add" className="btn-pop">
        Add New Site
      </Link>
    </div>
  );
}
