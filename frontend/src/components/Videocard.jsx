import React from 'react'
import { Link } from 'react-router-dom'

const Videocard = ({video}) => {
  return (
    <Link
      to={`/video/${video.id}`}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className='w-full h-48 object-cover'
      />
      <div className="p-3">
        <h3 className="text-white font-semibold text-lg truncate">{video.title}</h3>
      </div>
    </Link>
  )
}

export default Videocard