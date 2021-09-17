import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
  id: number; 
  tvid: number; 
  name: string; 
  still_path: string | null; 
  season_number: number; 
  episode_number: number
}

export const SeasonEpisode: FC<Props> = ({ id, tvid, name, still_path, season_number, episode_number}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="seasonEpisode">
      <Link to={`/episode/${tvid}/${season_number}/${episode_number}`}>
        <img src={still_path ? `${baseUrl}${still_path}` : "/backdrop.jpg"} alt={name}/>
      </Link>
        {name.includes("Episode" || "episode") ? <p>{name}</p> : <p><span>Episode {episode_number}: </span>{name}</p>}
    </div>
  );
}
