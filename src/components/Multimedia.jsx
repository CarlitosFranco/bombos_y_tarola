import React from "react";
import video from "../img/multimedia/Cans.mp4";
import cancion1 from "../img/multimedia/mundo_de_piedra.mp3";
import cancion2 from "../img/multimedia/mundo.mp3";
import cancion3 from "../img/multimedia/querer_querernos.mp3";

const Multimedia = () => {
  return (
    <section className="media-row">
      {/* 🎵 Playlist */}
      <div className="playlist">
        <h3>Playlist</h3>

        <div className="cancion">
          <p>Track 1</p>
          <audio controls>
            <source src={cancion1} type="audio/mpeg" />
            Tu navegador no soporta audio.
          </audio>
        </div>

        <div className="cancion">
          <p>Track 2</p>
          <audio controls>
            <source src={cancion2} type="audio/mpeg" />
            Tu navegador no soporta audio.
          </audio>
        </div>

        <div className="cancion">
          <p>Track 3</p>
          <audio controls>
            <source src={cancion3} type="audio/mpeg" />
            Tu navegador no soporta audio.
          </audio>
        </div>
      </div>

      {/* 🎥 Video recomendado */}
      <div className="recomendado">
        <h3>Artista Recomendado</h3>
        <div className="video-container">
          <video controls>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Multimedia;
