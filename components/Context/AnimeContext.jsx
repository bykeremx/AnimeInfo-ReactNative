
import React, { createContext, useState, useEffect } from 'react'

const animeContext = createContext();

const initialState = {
    animes: [], // animeler listesi 
    loading: true,// yüklenme durumu kontrol
    error: null // hata durumu
};
export const AnimeProvider = ({ children }) => {

    const [animeState, setAnimeState] = useState(initialState);

    useEffect(() => {
        const animeleriGetir = async () => {
            try {
                const response = await fetch("https://api.jikan.moe/v4/anime/");
                if (!response.ok) {
                    setAnimeState({
                        loading: false,
                        error: "Animeler yüklenemedi"
                    });
                    throw new Error(`HTTP error! status: ${response.status}`);

                }
                const data = await response.json();
                setAnimeState({
                    animes: data,
                    loading: false,
                    error: false
                });
            } catch (error) {
                setAnimeState({
                    loading: false,
                    error: error.message
                });
                console.error(error);
            }
        }
        animeleriGetir();
    },[]);
    return (
        <animeContext.Provider value={{
            animes: animeState.animes,
            loading: animeState.loading,
            error: animeState.error,
            setAnimeState: setAnimeState

        }}>
            {children}
        </animeContext.Provider>
    )
}
export default animeContext
