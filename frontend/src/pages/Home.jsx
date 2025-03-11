import { useEffect, useState } from 'react'
import axios from 'axios'
import Videocard from '../components/Videocard'

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get("https://video-app-2oeo.onrender.com/api/videos")
      .then((response) => {
        setVideos(response.data)
        console.log(response.data)
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);
  return (
    <div className="container mx-auto px-4 mt-6">
      <h1 className="text-white text-3xl font-semibold mb-4">Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Videocard key={video._id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Home