import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
    id: number; 
    name: string; 
    backdrop_path: string | null;
}

export const KnownForShow: FC<Props> = ({id, name, backdrop_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="knownForShow">
        <Link to={`/show/${id}`}>
            <img 
                src={backdrop_path ? `${baseUrl}${backdrop_path}` : `/backdrop.jpg`}
                alt={name}
            />
        </Link>
      <p>{name}</p>
    </div>
  );
}
