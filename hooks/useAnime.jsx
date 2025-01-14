import { useContext } from 'react'
import animeContext  from '../components/Context/AnimeContext'

export const useAnime = ()=>{
    const { animes,loading,errors  , setAnimeState} = useContext(animeContext)
    return { animes, loading, errors, setAnimeState }
}