import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loading } from './components/Loading';
import { ShowBanner } from './components/ShowBanner';
import { ShowCastAndSimilar } from './components/ShowCastAndSimilar';
import { ShowGallery } from './components/ShowGallery';
import { ShowOverall } from './components/ShowOverall';
import { ShowSeasonsAndLastEpisode } from './components/ShowSeasonsAndLastEpisode';

const Show: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const {id} = useParams<any>()
  const [details, setDetails] = useState<any>({})
  const [images, setImages] = useState<any>({})
  const [keywords, setKeywords] = useState<any>({})
  const [externalIds, setExternalIds] = useState<any>({})
  const [credits, setCredits] = useState<any>({})
  const [similar, setSimilar] = useState<any>({})
  const [videos, setVideos] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)

  const urlDetails = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
  const urlImages = `https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`
  const urlKeywords = `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=${API_KEY}`
  const urlExternalIds = `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${API_KEY}&language=en-US`
  const urlCredits = `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${API_KEY}&language=en-US`
  const urlSimilar = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  const urlVideos = `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`

  useEffect((): void => {
    const getDetails = () => axios.get(urlDetails)
    const getImages = () => axios.get(urlImages)
    const getKeywords = () => axios.get(urlKeywords)
    const getExternalIds = () => axios.get(urlExternalIds)
    const getCredits = () => axios.get(urlCredits)
    const getSimilar = () => axios.get(urlSimilar)
    const getVideos = () => axios.get(urlVideos)
    async function fetchData() {
      const [gotDetails, gotImages, gotKeywords, gotExternalIds, gotCredits, gotSimilar, gotVideos] = await axios.all([getDetails(), getImages(), getKeywords(), getExternalIds(), getCredits(), getSimilar(), getVideos()]);
      setDetails(gotDetails.data)
      setImages(gotImages.data)
      setKeywords(gotKeywords.data.results)
      setExternalIds(gotExternalIds.data)
      setCredits(gotCredits.data.cast)
      setSimilar(gotSimilar.data.results)
      setVideos(gotVideos.data.results)
      window.scrollTo(0, 0)
      setLoading(false)
      return gotDetails;
    }
    fetchData();
  }, [urlDetails, urlImages, urlKeywords, urlExternalIds, urlCredits, urlSimilar, urlVideos])

  return (
    <div className="showContainer">
      {loading ? 
        <Loading/>
      :
      <div>
        <div id="showTop"></div>
        <ShowBanner id={details.id} backdrop_path={details.backdrop_path} poster_path={details.poster_path} name={details.name} tagline={details.tagline} genres={details.genres} overview={details.overview} homepage={details.homepage} network={details.networks[0]} images={images.backdrops}/>
        <ShowSeasonsAndLastEpisode seasons={details.seasons} last_episode_to_air={details.last_episode_to_air} tvid={id}/>
        <div id="showOverall"><ShowOverall backdrop_path={details.backdrop_path} first_air_date={details.first_air_date} last_air_date={details.last_air_date} vote_average={details.vote_average} vote_count={details.vote_count} original_language={details.original_language} number_of_seasons={details.number_of_seasons} number_of_episodes={details.number_of_episodes} popularity={details.popularity} type={details.type} spoken_languages={details.spoken_languages} production_countries={details.production_countries} status={details.status} keywords={keywords} externalIds={externalIds}/></div>
        <ShowCastAndSimilar created_by={details.created_by} credits={credits} similar={similar.slice(0, 4)}/>
        <ShowGallery videos={videos} images={images.backdrops}/>
      </div>
      }
    </div>
  );
}

export default Show;
