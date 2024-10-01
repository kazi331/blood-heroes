import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>404</h1>
      <h2>The page is not found </h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}
