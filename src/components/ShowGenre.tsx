import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
  id: number; 
  name: string;
}

export const ShowGenre: FC<Props> = ({id, name}) => {
  return (
    <div className="showGenre">
        <Link to={`/genres/${id}/${name}`}>
            <p>{name}</p>
        </Link>
    </div>
  );
}
