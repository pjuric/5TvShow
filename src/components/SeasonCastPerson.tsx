import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
  id: number; 
  name: string; 
  profile_path: string | null; 
  character: string
}

export const SeasonCastPerson: FC<Props> = ({ id, name, profile_path, character }) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="seasonCastPerson">
        <Link to ={`/person/${id}`}>
            <img src={profile_path ? `${baseUrl}${profile_path}` : "/examplePoster.png"} alt={name}/>
        </Link>
        <p className="showCastNormal">{name}</p> 
        {character && <p className="showCastThin">as {character}</p>}  
    </div>
  );
}
