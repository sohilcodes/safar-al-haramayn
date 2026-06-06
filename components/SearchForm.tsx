export default function SearchForm() {
  return (
    <form className="bg-white rounded-2xl p-6 shadow-xl">

      <div className="grid md:grid-cols-3 gap-4">

        <select className="border rounded-xl p-3">
          <option>Mumbai</option>
          <option>Bengaluru</option>
        </select>

        <select className="border rounded-xl p-3">
          <option>Muharram</option>
          <option>Safar</option>
        </select>

        <button
          className="
          bg-[#0B6B3A]
          text-white
          rounded-xl
          p-3
          "
        >
          Search Packages
        </button>

      </div>

    </form>
  );
}
