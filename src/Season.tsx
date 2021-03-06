import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Gallery } from "./components/Gallery";
import { Loading } from "./components/Loading";
import { SeasonBanner } from "./components/SeasonBanner";
import { SeasonCast } from "./components/SeasonCast";
import { SeasonEpisodes } from "./components/SeasonEpisodes";
import { ISeasonDetails, Cast, Videos, IStills } from './interfaces'

interface ParamProps{
  id: string | undefined;
  number: string | undefined;
}

const Season: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const {id, number} = useParams<ParamProps>()
  const [details, setDetails] = useState<ISeasonDetails>()
  const [credits, setCredits] = useState<Cast[]>([])
  const [videos, setVideos] = useState<Videos[]>([])
  const [images, setImages] = useState<IStills[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const urlDetails = `https://api.themoviedb.org/3/tv/${id}/season/${number}?api_key=${API_KEY}&language=en-US`
  const urlCredits = `https://api.themoviedb.org/3/tv/${id}/season/${number}/credits?api_key=${API_KEY}&language=en-US`
  const urlVideos = `https://api.themoviedb.org/3/tv/${id}/season/${number}/videos?api_key=${API_KEY}`
  const urlImages = `https://api.themoviedb.org/3/tv/${id}/season/${number}/images?api_key=${API_KEY}`

  useEffect((): void => {
    const getDetails = () => axios.get(urlDetails)
    const getCredits = () => axios.get(urlCredits)
    const getVideos = () => axios.get(urlVideos)
    const getImages = () => axios.get(urlImages)
    async function fetchData() {
      const [gotDetails, gotCredits, gotVideos, gotImages] = await axios.all([getDetails(), getCredits(), getVideos(), getImages()]);
      setDetails(gotDetails.data)
      setCredits(gotCredits.data.cast)
      setVideos(gotVideos.data.results)
      setImages(gotImages.data.posters)
      setLoading(false)
      return gotDetails;
    }
    fetchData();
  }, [urlDetails, urlCredits, urlVideos, urlImages])

  return (
    <div className="seasonContainer">
      {loading ? 
        <Loading/>
      :
        details && 
          <div>
            <SeasonBanner poster_path={details.poster_path} name={details.name} season_number={details.season_number} overview={details.overview} still_path={details.episodes[0].still_path} air_date={details.air_date}/>
            <SeasonEpisodes episodes={details.episodes} tvid={id}/>
            {credits && credits.length > 0 && <SeasonCast credits={credits}/>}
            {videos.length > 0 && <Gallery videos={videos} images={images}/>}
          </div>
      }
    </div>
  );
}

export default Season;