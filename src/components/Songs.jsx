import { Song } from "./Song";

export const Songs = ({ allSongs ,fn}) => {
  return (
    <div className="songs-grid">
      {allSongs.map((currentSong, index) => 
        <Song song={currentSong} key={index} fn={fn} />
      )}
    </div>
  );
};
