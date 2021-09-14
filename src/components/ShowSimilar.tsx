import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{
  id: number; 
  name: string; 
  poster_path: string | null;
}

export const ShowSimilar: FC<Props> = ({id, name, poster_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const scrollToTop = () =>{
    window.location.href="#nav"
  }

  return (
    <div className="showSimilarTv">
        <Link to={`/show/${id}`} onClick={scrollToTop}>
            <img src={poster_path ? `${baseUrl}${poster_path}` : "/examplePoster.png"} alt={name}/>
        </Link>
    </div>
  );
}
