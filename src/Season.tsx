import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loading } from "./components/Loading";
import { SeasonBanner } from "./components/SeasonBanner";
import { SeasonCast } from "./components/SeasonCast";
import { SeasonEpisodes } from "./components/SeasonEpisodes";

export const Season: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const {id} = useParams<any>()
  const {number} = useParams<any>()
  const [details, setDetails] = useState<any>({})
  const [credits, setCredits] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)

  const urlDetails = `https://api.themoviedb.org/3/tv/${id}/season/${number}?api_key=${API_KEY}&language=en-US`
  const urlCredits = `https://api.themoviedb.org/3/tv/${id}/season/${number}/credits?api_key=${API_KEY}&language=en-US`

  useEffect((): void => {
    const getDetails = () => axios.get(urlDetails)
    const getCredits = () => axios.get(urlCredits)
    async function fetchData() {
      const [gotDetails, gotCredits] = await axios.all([getDetails(), getCredits()]);
      setDetails(gotDetails.data)
      setCredits(gotCredits.data.cast)
      setLoading(false)
      return gotDetails;
    }
    fetchData();
  }, [urlDetails, urlCredits])

  return (
    <div className="seasonContainer">
      {loading ? 
        <Loading/>
      :
        <div>
          <SeasonBanner poster_path={details.poster_path} name={details.name} season_number={details.season_number} overview={details.overview} still_path={details.episodes[0].still_path }/>
          <SeasonEpisodes episodes={details.episodes} tvid={id}/>
          <SeasonCast credits={credits}/>
        </div>
      }
    </div>
  );
}
