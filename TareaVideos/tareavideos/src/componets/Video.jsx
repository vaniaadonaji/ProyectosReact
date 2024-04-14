import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Video = ({titulo, descripcion, url})=>{
    return(
        <div className='row' width='100%'>
            <div className='col-md-12 col-lg-6 mb-3'>
                <iframe src={url} width="100%" height="auto" frameBorder="0"></iframe>
            </div>
            <div className='col-md-12 col-lg-6 mb-3'>
                <h4>{titulo}</h4>
                <h6>{descripcion}</h6>
            </div>
        </div>
    );
};

export default Video;