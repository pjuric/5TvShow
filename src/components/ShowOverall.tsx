import { FC } from "react";
import { Tag } from "./Tag";
import { YellowIcons } from "./YellowIcons";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from "react-router-dom";
import MovieIcon from '@material-ui/icons/Movie';

interface Props{
  backdrop_path: string | null;
  first_air_date: string;
  last_air_date: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  number_of_seasons: number;
  number_of_episodes: number;
  popularity: number;
  type: string;
  spoken_languages: any;
  production_countries: any;
  status: string;
  keywords: any;
  externalIds: any;
}

export const ShowOverall: FC<Props> = ({backdrop_path, first_air_date, last_air_date, vote_average, vote_count, original_language, number_of_seasons, number_of_episodes, popularity, type, spoken_languages, production_countries, status, keywords, externalIds}) => {
  
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  
  return (
    <div className="showOverall">
      <img src={backdrop_path ? `${baseUrl}${backdrop_path}` : "/showBackground.png"} alt=""/>
      <div className="showOverallGradient"></div>
      <div className="showOverallShowDetails">
        <h2>Overall Show Details and Statistics</h2>
        {first_air_date && last_air_date && <h3>Filming period: {first_air_date.slice(0, 4)}.-{last_air_date.slice(0, 4)}.</h3>}
        <YellowIcons vote={vote_average} vote_count={vote_count} original_language={original_language}/>
        <p className="showOverallParagraph">Number of Seasons: <span>{number_of_seasons}</span></p>
        <p className="showOverallParagraph">Number of Episodes: <span>{number_of_episodes}</span></p>
        <p className="showOverallParagraph showOverallMarginParagraph">Popularity: <span>{popularity}</span></p>
        <p className="showOverallParagraph">Type of TV Show: <span>{type}</span></p>
        <p className="showOverallParagraph">Spoken languages: {spoken_languages.map((featured: { english_name: string;}, index: number) => (<span key={index}>~{featured.english_name} </span>))}</p>
        {production_countries.length > 0 ?
          <p className="showOverallParagraph">Production countries: {production_countries.map((featured: { name: string;}, index: number) => (<span key={index}>~{featured.name} </span>))}</p>
        :
          <p className="showOverallParagraph">Status: <span>{status}</span></p>
        }
        <div className="showOverviewTags">
          {keywords && keywords.slice(0, 7).map((featured: { name: string;}, index: number) => (
            <Tag key={index} name={featured.name}/>
          ))}
        </div>
      </div>
      <div className="showOverviewSocial">
        {externalIds.imdb_id && <Link to={{ pathname: `https://www.imdb.com/title/${externalIds.imdb_id}/?ref_=vp_vi_tt` }} target="_blank"><MovieIcon fontSize="large"/></Link>}
        {externalIds.facebook_id && <Link to={{ pathname: `https://www.facebook.com/${externalIds.facebook_id}` }} target="_blank"><FacebookIcon fontSize="large"/></Link>}
        {externalIds.instagram_id && <Link to={{ pathname: `https://www.instagram.com/${externalIds.instagram_id}` }} target="_blank"><InstagramIcon fontSize="large"/></Link>}
        {externalIds.twitter_id && <Link to={{ pathname: `https://www.twitter.com/${externalIds.twitter_id}` }} target="_blank"><TwitterIcon fontSize="large"/></Link>}
      </div>
    </div>
  );
}
