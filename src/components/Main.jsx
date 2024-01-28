import React, { useEffect, useState } from 'react'

export default function Main() {

    const [animes, setAnimes] = useState([])

    const fetchAnime = async () => {
        // const url = 'https://api.jikan.moe/v4/anime'
        const url = 'https://api.jikan.moe/v4/top/anime'
        const res = await fetch(url);
        const parsedData = await res.json();
        // console.log(parsedData);
        if (parsedData && parsedData.data) {
            setAnimes(parsedData.data)
        }
    }
    
    useEffect(() => {
        fetchAnime();
    }, [])

    return (
        <>
            <div className=' bg-black text-white'>
                <div className=' container flex flex-col p-7 text-xl m-auto'>
                    <h2 className='pt-4'>Genres</h2>
                    <div>
                        <div className=' grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                            {animes.map((anime) => (
                                <a target='_blank' rel='noopener noreferrer' href={anime.url}>
                                    <div className='flex flex-col w-full mb-4 bg-transparent' key={anime.mal_id}>
                                        <img className=' md:h-60 xl:h-80 w-full rounded-lg' src={anime.images.webp.image_url} alt="" />
                                        <p className=' text-base text-white'>{anime.title}</p>
                                        <p className=' text-base text-white'>episodes: {anime.episodes}</p>
                                        <div className='w-full flex-wrap flex flex-row'>
                                            {anime.genres.map((gen, i) => (
                                                <p className=' text-base text-white' key={i}>{gen.name},</p>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
