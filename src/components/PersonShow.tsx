import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{
    backdrop_path: string | null; 
    character: string; 
    id: number; 
    name: string; 
}

export const PersonShow: FC<Props> = ({ backdrop_path, character, id, name }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    return (
      <div className="personShow">
          <Link className="personShowImageLink" to={`/show/${id}`}>
              <img src={backdrop_path ? `${baseUrl}${backdrop_path}` : "/backdrop.jpg"} alt={name}/>
          </Link>
          <p className="showCastNormal">{name}</p> 
          {character && <p className="showCastThin">as {character}</p>}
      </div>
    );
}
