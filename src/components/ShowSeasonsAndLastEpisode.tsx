import { FC } from "react";
import { Link } from "react-router-dom";
import { ShowSeason } from "./ShowSeason";
import { IShowSeasons, IShowLastEpisode } from '../interfaces'

interface Props{
  seasons: IShowSeasons[];
  last_episode_to_air: IShowLastEpisode;
  tvid: string;
}

export const ShowSeasonsAndLastEpisode: FC<Props> = ({seasons, last_episode_to_air, tvid}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="showSeasonsAndLastEpisode">
      <div className="showSeasons">
        <h2>Seasons</h2>
        <div className="showSeasonsContainer">
          {seasons.map((featured: { id: number; name: string; poster_path: string; season_number: number;}) => (
            // featured.poster_path &&
            <ShowSeason key={featured.id} id={featured.id} name={featured.name} poster_path={featured.poster_path} tvid={tvid} season_number={featured.season_number}/>
          ))}
        </div>
      </div>
      {last_episode_to_air &&
        <div className="showLastEpisode">
          <h2>Last Aired Episode</h2>
          <Link to={`/episode/${tvid}/${last_episode_to_air.season_number}/${last_episode_to_air.episode_number}`}>
              <img src={last_episode_to_air.still_path ? `${baseUrl}${last_episode_to_air.still_path}` : "/backdrop.jpg"} alt={last_episode_to_air.name}/>
          </Link>
          <h2 className="showLastEpisodeName">{last_episode_to_air.name} <span>({last_episode_to_air.air_date.slice(0, 4)}.)</span></h2>
          <p>{last_episode_to_air.overview}</p>
        </div>
      }
    </div>
  );
}
