import React from 'react';
import Video from './Video';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const ListaVideos = ({ videos })=>{
    return (
        <section className='mt-3' width='100%'>
                {videos.map((video,index)=>(
                    <Video
                        key ={index}
                        titulo= {video.titulo}
                        descripcion= {video.descripcion}
                        url = {video.url}
                    />
                ))}
        </section>
    );
};
export default ListaVideos;