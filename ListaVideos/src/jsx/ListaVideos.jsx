import React, { useState } from 'react';

const ListaVideos = () => {
  const [videos, setVideos] = useState([
    { 
      titulo: 'Video 1', 
      descripcion: 'Descripción Video 1', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 2', 
      descripcion: 'Descripción Video 2', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 3', 
      descripcion: 'Descripción Video 3', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 4', 
      descripcion: 'Descripción Video 4', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 5', 
      descripcion: 'Descripción Video 5', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 6', 
      descripcion: 'Descripción Video 6', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    },
    { 
      titulo: 'Video 7', 
      descripcion: 'Descripción Video 7', 
      url: '../videos/MyLiveWallpapers-com-Conch-Street.mp4'
    }
  ]);

  const mostrarListaVideos = (videosBuscados) => {
    const listaVideos = document.getElementById('idListaVideosArreglos');
    listaVideos.innerHTML = '';
    
    videosBuscados.forEach(indiceVideo => {
      const fila = document.createElement('div');
      const col1UrlVideo = document.createElement('div');
      const iframeVideo = document.createElement('iframe');

      fila.setAttribute('class', 'row');
      col1UrlVideo.setAttribute('class', 'col-sm-12 col-md-6 col-gd-6');
      iframeVideo.setAttribute('src', indiceVideo.url);
      iframeVideo.setAttribute('width', '100%');
      iframeVideo.setAttribute('height', 'auto');
      iframeVideo.setAttribute('frameborder', '0');

      col1UrlVideo.appendChild(iframeVideo);
      fila.appendChild(col1UrlVideo);

      const colTitulo = document.createElement('div');
      const tituloV = document.createElement('h4');
      const desV = document.createElement('h6');

      colTitulo.setAttribute('class', 'col-sm-9 col-md-5 col-gd-5');
      tituloV.textContent = indiceVideo.titulo;
      desV.textContent = indiceVideo.descripcion;

      colTitulo.appendChild(tituloV);
      colTitulo.appendChild(desV);
      fila.appendChild(colTitulo);

      const colIcono = document.createElement('div');
      const iconoV = document.createElement('i');

      colIcono.setAttribute('class', 'col-sm-3 col-md-1 col-gd-1');
      iconoV.setAttribute('class', 'bi bi-heart');

      colIcono.appendChild(iconoV);
      fila.appendChild(colIcono);

      listaVideos.appendChild(fila);
    });
  };

  const buscarVideos = () => {
    const textoVideo = document.getElementById('txtBuscar').value;
    const videosBuscados = videos.filter(indiceVideo => indiceVideo.titulo.includes(textoVideo));
    mostrarListaVideos(videosBuscados);
  };

  return (
    <div>
      <input type="text" id="txtBuscar" onChange={buscarVideos} />
      <div id="idListaVideosArreglos">
        {/* Aquí se mostrará la lista de videos */}
      </div>
    </div>
  );
};

export default ListaVideos;
