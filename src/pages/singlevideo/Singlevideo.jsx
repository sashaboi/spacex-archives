import React from 'react'
import { useParams } from 'react-router-dom'

const Singlevideo = () => {
    
    const {id} = useParams();
    console.log(id);
    const videourl = "https://www.youtube.com/embed/"+id
  return (
    <div className='single-video-parent'>
        <iframe width="560" height="315" src={videourl} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Singlevideo