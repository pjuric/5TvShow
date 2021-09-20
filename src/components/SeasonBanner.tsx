import { FC } from "react";

interface Props {
  poster_path: string | null;
  name: string; 
  season_number: number; 
  overview: string;
  still_path: any;
  air_date: string;
}

export const SeasonBanner: FC<Props> = ({ poster_path, name, season_number, overview, still_path, air_date}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="seasonBanner">
        <div className="seasonBannerContainer">
            <img src= {still_path ? `${baseUrl}${still_path}` : "/backdrop.jpg"} alt={name}/>
        </div>
        <div className="seasonBannerContent">
            <img className="seasonBannerPoster" src={poster_path ? `${baseUrl}${poster_path}` : "/examplePoster.png"} alt={name}/>
            <div className="seasonDetailsSection">
                <h1>{name}</h1>
                {name.includes("Season") || name.includes("Specials") ? <h2>{air_date.slice(0,4)}.</h2> : <h2>Season {season_number} ({air_date.slice(0,4)}.)</h2>}
                <p className="seasonOverview">{overview ? overview : "No overview avaliable."}</p>
            </div>
        </div>
    </div>
  );
}
