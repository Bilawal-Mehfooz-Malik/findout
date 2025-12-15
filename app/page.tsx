export default function HomePage() {
  return (
    <main className="mx-auto max-w-screen-md px-4 py-6">
      {/* Global Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search food, residences, places..."
          className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring"
        />
      </div>
    </main>
  );
}
