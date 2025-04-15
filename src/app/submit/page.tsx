export default function SubmitPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black">
        <h1 className="text-4xl font-bold mb-4 text-center">Submit to Craybo</h1>
        <p className="mb-6 text-center max-w-xl">
          Are you an artist, creative, or collaborator looking to be part of the movement? Tell us about yourself.
        </p>
        <form className="w-full max-w-md space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-black rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-black rounded-xl" />
          <textarea placeholder="Tell us about your work or proposal…" className="w-full p-3 border border-black rounded-xl h-32" />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
            Submit
          </button>
        </form>
      </main>
    );
  }