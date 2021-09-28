import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props{
  id: number,
  name: string,
  poster_path: string | null,
}

export const AiringPoster: FC<Props> = ({id, name, poster_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="airingTodayPoster">
      <Link to={`show/${id}`}>
          <img 
            src={ poster_path ?
              `${baseUrl}${poster_path}`
            :
              `/examplePoster.png`
            } 
            alt={name}
          />
      </Link>
      <p>{name}</p>
    </div>
  );
}
