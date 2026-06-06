export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-8">
          Contact Us
        </h2>

        <input
          placeholder="Name"
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        />

        <input
          placeholder="Phone"
          className="w-full p-4 mb-4 bg-zinc-900 rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full p-4 mb-4 bg-zinc-900 rounded h-40"
        />

        <button className="w-full py-4 bg-yellow-500 text-black font-bold rounded">
          Send Inquiry
        </button>

      </div>
    </section>
  );
}
