import { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
  setBackground: Dispatch<SetStateAction<any>>;
  overview: string | null;
  vote_average: number; 
  vote_count: number; 
  original_language: string;
}

export const NowTrendingMovie: FC<Props> = ({id, name, poster_path, backdrop_path, setBackground, overview, vote_average, vote_count, original_language}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="nowTrendingMovie">
        <Link to={`/show/${id}`}>
        <img
            onMouseOver={() => {
              setBackground(backdrop_path); 
            }}
            src={ poster_path ?
              `${baseUrl}${poster_path}`
            :
              `/examplePoster.png`
            } 
            alt={name}
        />
        {/* <p className="nowTrendingAbsolute">{overview ? overview : "No overview avaliable"}</p> */}
        </Link>
        <p>{name}</p>
    </div>
  );
}
