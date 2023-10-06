import Image from 'next/image';

export default function Home() {
  return (
    <main className="main">
      <div className="center">
        <Image
          className="logo"
          src="/sublimemeh-logo.svg"
          alt="SublimeMeh Logo"
          width={393.79}
          height={57.68}
          priority
        />
      </div>
    </main>
  );
}
