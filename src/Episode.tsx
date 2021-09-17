import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { EpisodeBanner } from "./components/EpisodeBanner";
import { EpisodeCrewAndGuests } from "./components/EpisodeCrewAndGuests";
import { Gallery } from "./components/Gallery";
import { Loading } from "./components/Loading";
import { SeasonCast } from "./components/SeasonCast";

export const Episode: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const {id} = useParams<any>()
  const {snumber} = useParams<any>()
  const {enumber} = useParams<any>()
  const [details, setDetails] = useState<any>({})
  const [credits, setCredits] = useState<any>({})
  const [videos, setVideos] = useState<any>({})
  const [images, setImages] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)

  const urlDetails = `https://api.themoviedb.org/3/tv/${id}/season/${snumber}/episode/${enumber}?api_key=${API_KEY}&language=en-US`
  const urlCredits = `https://api.themoviedb.org/3/tv/${id}/season/${snumber}/episode/${enumber}/credits?api_key=${API_KEY}&language=en-US`
  const urlVideos = `https://api.themoviedb.org/3/tv/${id}/season/${snumber}/episode/${enumber}/videos?api_key=${API_KEY}`
  const urlImages = `https://api.themoviedb.org/3/tv/${id}/season/${snumber}/episode/${enumber}/images?api_key=${API_KEY}`

  useEffect((): void => {
    const getDetails = () => axios.get(urlDetails)
    const getCredits = () => axios.get(urlCredits)
    const getVideos = () => axios.get(urlVideos)
    const getImages = () => axios.get(urlImages)
    async function fetchData() {
      const [gotDetails, gotCredits, gotVideos, gotImages] = await axios.all([getDetails(), getCredits(), getVideos(), getImages()]);
      setDetails(gotDetails.data)
      setCredits(gotCredits.data)
      setVideos(gotVideos.data.results)
      setImages(gotImages.data)
      setLoading(false)
      return gotDetails;
    }
    fetchData();
  }, [urlDetails, urlCredits, urlVideos, urlImages])

  return (
    <div>
      {loading ? 
        <Loading/>
      :
        <div>
          {/* {console.log(credits.crew)} */}
          <EpisodeBanner air_date={details.air_date} episode_number={details.episode_number} name={details.name} overview={details.overview} season_number={details.season_number} still_path={details.still_path} vote_average={details.vote_average} vote_count={details.vote_count}/>
          <SeasonCast credits={credits.cast}/>
          {credits.crew.length > 0 && credits.crew.length > 0 ? <EpisodeCrewAndGuests crew={credits.crew} guests={credits.guest_stars}/> : <div></div>}
          {videos.length > 0 && <Gallery videos={videos} images={images}/>}
        </div>
      }
    </div>
  );
}