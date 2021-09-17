import { FC } from "react";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import TodayIcon from '@material-ui/icons/TodayRounded';

interface Props{
    air_date: string;
    episode_number: number;
    name: string;
    overview: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
}

export const EpisodeBanner: FC<Props> = ({ air_date, episode_number, name, overview, season_number, still_path, vote_average, vote_count }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="episodeBanner">
      <h1>{name}</h1>
      <div className="episodeBannerContainer">
            <img className="episodeImageResponsive" src={still_path ? `${baseUrl}${still_path}` : "/backdrop.jpg"} alt={name}/>
            <div className="episodeBannerContent">
                <h2>Episode {episode_number}, Season {season_number}</h2>
                <div className="episodeIcons">
                        <div className="episodeIcon">
                            <StarRoundedIcon/>
                            <p>{vote_average ? vote_average : "N/A"}</p>
                        </div>
                        <div className="episodeIcon">
                            <PeopleAltRoundedIcon/>
                            <p>{vote_count}</p>
                        </div>
                    {air_date &&
                        <div className="episodeIcon">
                            <TodayIcon/>
                            <p>{air_date.slice(0, 4)}</p>
                        </div>
                    }
                </div>
                {overview ? <p className="episodeBannerDescriptionParagraph">{overview}</p> : <p className="episodeBannerDescriptionParagraph">No overview avaliable.</p>}
            </div>
            <img src={still_path ? `${baseUrl}${still_path}` : "/backdrop.jpg"} alt={name}/>
      </div>
    </div>
  );
}
