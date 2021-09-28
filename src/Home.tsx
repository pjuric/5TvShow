import { ShowResults, ShowResultsTrending, IGenres, WatchProviders, IPeople } from './interfaces';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { AiringToday } from './components/AiringToday';
import { HomeBanner } from './components/HomeBanner';
import { HomeGenres } from './components/HomeGenres';
import { HomePopularPeople } from './components/HomePopularPeople';
import { HomeTopRated } from './components/HomeTopRated';
import { HomeWatchProviders } from './components/HomeWatchProviders';
import { Loading } from './components/Loading';
import { NowTrending } from './components/NowTrending';

const Home: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [popular, setPopular] = useState<ShowResults[]>([])
  const [airingToday, setAiringToday] = useState<ShowResults[]>([])
  const [trending, setTrending] = useState<ShowResultsTrending[]>([])
  const [topRated, setTopRated] = useState<ShowResults[]>([])
  const [genres, setGenres] = useState<IGenres[]>([])
  const [watchProviders, setWatchProviders] = useState<WatchProviders[]>([])
  const [popularPeople, setPopularPeople] = useState<IPeople[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const urlPopular = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  const urlAiringToday = `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
  const urlTrending = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
  const urlTopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const urlGenres = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
  const urlWatchProviders = `https://api.themoviedb.org/3/watch/providers/tv?api_key=${API_KEY}&language=en-US`
  const urlPopularPeople = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`

  useEffect(() => {
    const getPopular = () => axios.get(urlPopular)
    const getAiringToday = () => axios.get(urlAiringToday)
    const getTrending = () => axios.get(urlTrending)
    const getTopRated = () => axios.get(urlTopRated)
    const getGenres = () => axios.get(urlGenres)
    const getWatchProviders = () => axios.get(urlWatchProviders)
    const getPopularPeople = () => axios.get(urlPopularPeople)
    async function fetchData() {
      const [gotPopular, gotAiringToday, gotTrending, gotTopRated, gotGenres, gotWatchProviders, gotPopularPeople] = await axios.all([getPopular(), getAiringToday(), getTrending(), getTopRated(), getGenres(), getWatchProviders(), getPopularPeople()]);
      setPopular(gotPopular.data.results)
      setAiringToday(gotAiringToday.data.results)
      setTrending(gotTrending.data.results)
      setTopRated(gotTopRated.data.results)
      setGenres(gotGenres.data.genres)
      setWatchProviders(gotWatchProviders.data.results)
      setPopularPeople(gotPopularPeople.data.results)
      setLoading(false)
      return gotPopular;
    }
    fetchData();
  }, [urlPopular, urlAiringToday, urlTrending, urlTopRated, urlGenres, urlWatchProviders, urlPopularPeople])

  return (
    <div className="homeContainer">
      {loading ? 
        <Loading/>
      :
        <div>
        
          <HomeBanner popular={popular}/>
          <AiringToday airingToday={airingToday}/>
          <div className="topRatedAndGenres">
            <HomeTopRated topRated={topRated}/>
            <HomeGenres genres={genres}/>
          </div>
          <NowTrending trending={trending}/>
          <div className="topRatedAndGenres">
            <HomeWatchProviders watchProviders={watchProviders}/>
            <HomePopularPeople popularPeople={popularPeople}/>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
