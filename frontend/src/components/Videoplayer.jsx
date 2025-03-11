import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export const Videoplayer = () => {
  const { videoUrl } = useParams();
  const [video, setVideo] = useState(null)
 

  useEffect(() => {
    axios
      .get(`https://video-app-2oeo.onrender.com/api/videos/${videoUrl}`)
      .then((response) => {
        setVideo(response.data)
        console.log(response.data)
      })
    .catch((error)=> console.log("Error fetching video:",error))
  }, [videoUrl])
  
  if(!video) return <div className='text-center text-white mt-10'>Loading.....</div>
  return (
    <div className="flex flex-col items-center mt-6 px-4">
      <h2 className="text-white text-2xl font-semibold">{video.title}</h2>
      <video
        controls
        className="w-full max-w-3xl mt-4 rounded-lg shadow-lg"
      >
      </video>
    </div>
  )
}
