import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number; 
  name: string | undefined; 
  poster_path: string | null;
}

export const GenreMovie: FC<Props> = ({id, name, poster_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="genreMovie">
        <Link to={`/show/${id}`}>
          <img 
              src={ poster_path && poster_path!==undefined && poster_path!==null ?
                `${baseUrl}${poster_path}`
              :
                `/examplePoster.png`
              } 
              alt=""
          />
        </Link>
        <p>{name}</p>
    </div>
  );
}
