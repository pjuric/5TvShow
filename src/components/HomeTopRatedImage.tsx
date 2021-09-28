import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  backdrop_path: string | null;
}

export const HomeTopRatedImage: FC<Props> = ({id, name, backdrop_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <Link to={`show/${id}`} className="homeTopRatedImage">
        <img 
          src={ backdrop_path ?
            `${baseUrl}${backdrop_path}`
          :
            `/backdrop.jpg`
          } 
          alt={name}
        />
        <h3>{name}</h3>
    </Link>
  );
}
