import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
  id: number; 
  name: string; 
  poster_path: string;
  tvid: number; 
  season_number: number;
}

export const ShowSeason: FC<Props> = ({id, name, poster_path, tvid, season_number}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="showSeason">
        <Link to={`/season/${tvid}/${season_number}`}>
            <img src={poster_path ? `${baseUrl}${poster_path}` : "/examplePoster.png"} alt={name}/>
        </Link>
        {!poster_path && <p>{name}</p>}
    </div>
  );
}
