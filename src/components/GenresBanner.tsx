import { FC } from 'react';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

export const GenresBanner: FC<any | null> = ({backdrop_path, id, name}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="genresBanner">
      <img 
          src={ backdrop_path && backdrop_path!==undefined && backdrop_path!==null ?
            `${baseUrl}${backdrop_path}`
          :
            `/backdrop.jpg`
          } 
          alt=""
      />
      <h1>{name}</h1>
      <ExpandMoreRoundedIcon fontSize="large"/>
    </div>
  );
}
