// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      <h1 className="text-5xl font-bold mb-4 text-center">Welcome to Craybo</h1>
      <p className="text-xl max-w-xl text-center mb-6">
        The Creative Hub for Artists, Dreamers & Doers. We empower local creatives with media, production, education, and love.
      </p>
      <a
        href="/submit"
        className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
      >
        Join Craybo
      </a>
    </main>
  );
}
