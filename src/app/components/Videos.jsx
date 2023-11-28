import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "720",
      width: "1280",
      playerVars: {'controls': 0
        // autoplay: 1, 
      },
    };

    return (
      <div className="mx-auto text-gray-700">
        <h2 className="text-6xl font-bold pt-8 text-center">
          Aquí podrás encontrar los mejores
        </h2>
		<h2 className="text-6xl font-bold pb-8 text-center">
			cursos que hay de Japonés
        </h2>
        <h3 className="text-3xl font-semibold py-8 text-center">
          Kira Teachings / Minna no Nihongo - Youtube
        </h3>
        <div className="flex justify-center py-8 items-center animate-fade-down animate-once animate-duration-[3000ms]">
          <YouTube videoId="MYnjT0xZvsk" opts={opts} onReady={this._onReady} />
        </div>
        <h3 className="text-3xl font-semibold py-8 text-center">
          Yuyu Nihongo / Clases de Japonés - Youtube
        </h3>
        <div className="flex justify-center py-8 items-center animate-fade-down animate-once animate-duration-[3000ms]">
          <YouTube videoId="qcd2zldqYVw" opts={opts} onReady={this._onReady} />
        </div>
		<h3 className="text-3xl font-semibold py-8 text-center">
          Japonés con Junpei / Japonés desde 0 - Youtube
        </h3>
        <div className="flex justify-center py-8 items-center animate-fade-down animate-once animate-duration-[3000ms]">
          <YouTube videoId="Ogz_IkKlvIA" opts={opts} onReady={this._onReady} />
        </div> 
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
