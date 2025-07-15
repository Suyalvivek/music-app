export function Player({ song, fn }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
      <button
        onClick={() => fn(false, null)}
        className="px-6 py-2 text-white text-base font-semibold rounded-xl backdrop-blur-md bg-gradient-to-r from-[#4c1d95] to-[#5b21b6] shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400">
        ← Back to songs
      </button>
      <img
        src={song.artworkUrl100}
        alt={song.trackName}
        className="w-32 h-32 rounded-xl shadow mb-4 border-4 border-indigo-100 object-cover"
      />
      <div className="text-2xl font-extrabold text-indigo-800 mb-1 text-center font-sans">{song.artistName}</div>
      <div className="text-lg text-gray-700 mb-4 text-center font-medium">{song.trackName}</div>
      {song.previewUrl ? (
        <audio src={song.previewUrl} controls autoPlay className="w-full mt-2 rounded" />
      ) : (
        <div className="text-red-400">No audio preview available.</div>
      )}
    </div>
  );
}