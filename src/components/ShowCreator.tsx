import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{
  id: number; 
  name: string; 
  profile_path: string | null
}

export const ShowCreator: FC<Props> = ({id, name, profile_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="showCreator">
      <Link to={`/person/${id}`}>
        <img src={profile_path ? `${baseUrl}${profile_path}` : "/examplePoster.png"} alt={name}/>
      </Link>
      <p>{name}</p>
    </div>
  );
}
