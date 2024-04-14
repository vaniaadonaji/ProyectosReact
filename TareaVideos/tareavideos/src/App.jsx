import React, { useState } from 'react';
import ListaVideos from './componets/ListaVideos'; // Asegúrate de tener la ruta correcta

const App = () => {
  const videosOriginales = [
    { 
      titulo: 'Video 1', 
      descripcion: 'Descripción Video 1', 
      url: 'https://www.youtube.com/embed/NXiM9vwEAfk?si=O0EMNKDRqSSwuv6J'
    },
    { 
      titulo: 'Video 2', 
      descripcion: 'Descripción Video 2', 
      url: 'https://www.youtube.com/embed/v6wDu-6t6Gk?si=_8DCFQuGFLyUY2uC'
    },
    { 
      titulo: 'Video 3', 
      descripcion: 'Descripción Video 3', 
      url: 'https://www.youtube.com/embed/CnuFA6PkOT8?si=vOXmBP_x2dRQvp-E'
    },
    { 
      titulo: 'Video 4', 
      descripcion: 'Descripción Video 4', 
      url: 'https://www.youtube.com/embed/XQ0D_QD_DhM?si=DgaV2U2l6Hj6tSmn'
    },
    { 
      titulo: 'Video 5', 
      descripcion: 'Descripción Video 5', 
      url: 'https://www.youtube.com/embed/5bdIRS9-Dh8?si=3CpQj2zrf_JFhqmT'
    },
    { 
      titulo: 'Video 6', 
      descripcion: 'Descripción Video 6', 
      url: 'https://www.youtube.com/embed/vsPAx0DugfY?si=4GavS5kCn-gxVEOb'
    },
    { 
      titulo: 'Video 7', 
      descripcion: 'Descripción Video 7', 
      url: 'https://www.youtube.com/embed/wfUEnsgE8F0?si=Z4q4-HsGBnbTVXcY'
    }
  ];
  const [videos, setVideos] = useState(videosOriginales);
  const [videosBuscados, setVideosBuscados] = useState(videosOriginales);
  
  function buscarVideos(event) {
    const textoVideo = event.target.value.toLowerCase();
    const videosFiltrados = videosOriginales.filter(
      video => video.titulo.toLowerCase().includes(textoVideo)
    );
    setVideosBuscados(videosFiltrados);
  }

  return (
    <>
      <header className="container-fluid bg-dark text-white text-center" width='100%'>
        <div className="">
          <img src="img/FondoArcoirisBob.jpg" alt="" width="27%" height="100%"/>
          <h1>Lista Videos</h1>
        </div>
      </header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="input-group m-2" role="search">
            <input className="form-control " type="search" placeholder="Search" name="txtBuscar" id="txtBuscar" aria-label="Search" onInput={buscarVideos} />
          </form>
        </div>
      </nav>

      <section className="mt-3 container-fluid">
        <div id="idListaVideosArreglos">
          <ListaVideos videos={videosBuscados} />
        </div>
      </section>
    </>
  );
};

export default App;
