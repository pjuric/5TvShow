import { FC } from 'react';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

interface Props{
  backdrop_path: string | null;
  name: string;
}

export const GenresBanner: FC<Props> = ({backdrop_path, name}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="genresBanner">
      <img 
          src={ backdrop_path && backdrop_path!==undefined && backdrop_path!==null ?
            `${baseUrl}${backdrop_path}`
          :
            `/backdrop.jpg`
          } 
          alt={name}
      />
      <h1>{name}</h1>
      <ExpandMoreRoundedIcon fontSize="large"/>
    </div>
  );
}
