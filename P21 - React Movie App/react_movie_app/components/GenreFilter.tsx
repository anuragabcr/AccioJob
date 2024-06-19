import React from 'react'

interface Genres {
    genres: string[]
}

const GenreFilter = ({ genres }: Genres) => {
  return (
    <div className='m-5 bg-[#f0f0f0] p-5 rounded-lg'>
        <h2 className="font-bold text-3xl">Filter By Genre</h2>
        {genres.map((genre, index) => (
            <button onClick={() => console.log(`Filtering by ${genre}`)} key={index} className='bg-[#d7d7d7] rounded-lg p-2 m-3'>{genre}</button>
        ))}
    </div>
  )
}

export default GenreFilter