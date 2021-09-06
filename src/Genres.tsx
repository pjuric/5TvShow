import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { GenreResults } from './components/GenreResults';
import { GenresBanner } from './components/GenresBanner';
import { GenresList } from './components/GenresList';
import { Loading } from './components/Loading';
import { NotFound } from './components/NotFound';

export const Genres: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const urlGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
  const {id} = useParams<any>()
  const {name} = useParams<any>()
  const [page, setPage] = useState<any>(1)
  const [urlResults, setUrlResults] = useState<any>(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
  const [genres, setGenres] = useState<any>({})
  const [results, setResults] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    if(id==="0" && name==="Trending"){
      setPage(0)
      setUrlResults(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
    } else if(id==="0" && name==="Top Rated"){
      setUrlResults(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
    } else if(id==="0" && name==="Airing Today"){
      setUrlResults(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${page}`)
    } else if(id==="0" && name==="On the Air"){
      setUrlResults(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${page}`)
    } else if(id==="0" && name==="Popular"){
      setUrlResults(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    } else{
      setUrlResults(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${id}`)
    }
    const getGenres = () => axios.get(urlGenres)
    const getResults = () => axios.get(urlResults)
    async function fetchData() {
      const [gotGenres, gotResults] = await axios.all([getGenres(), getResults()]);
      setGenres(gotGenres.data.genres)
      setResults(gotResults.data.results)
      setLoading(false)
      return gotGenres;
    }
    fetchData();
  }, [urlGenres, urlResults, API_KEY, id, name, page])

  return (
    <div id="scroll" className="genresContainer">
      { loading ?
          <Loading/>
      : results.length === 0 ?
          <NotFound/>
      : 
        <div>
          <GenresBanner backdrop_path={results[0].backdrop_path} id={id} name={name}/>
          <GenresList genres={genres} id={id} name={name} setPage={setPage}/>
          <GenreResults results={results}/>
          {page && page > 0 ?
            <div className="genresResultsPagination">
              <div className="genresResultPaginationContainer">
                <div  onClick={() => {setPage(1);}}><a className={page===1 ? "paginationActive" : ""} href="#scroll">1</a></div>
                <div  onClick={() => {setPage(2);}}><a className={page===2 ? "paginationActive" : ""} href="#scroll">2</a></div>
                <div  onClick={() => {setPage(3);}}><a className={page===3 ? "paginationActive" : ""} href="#scroll">3</a></div>
                <div  onClick={() => {setPage(4);}}><a className={page===4 ? "paginationActive" : ""} href="#scroll">4</a></div>
                <div  onClick={() => {setPage(5);}}><a className={page===5 ? "paginationActive" : ""} href="#scroll">5</a></div>
              </div>
            </div>
            :
            <div>

            </div>
          }
        </div>
      }
    </div>
  );
}
