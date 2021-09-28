import { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number;
  name: string;
  idActual: number;
  nameActual: string;
  setPage?: Dispatch<SetStateAction<number>>;
}

export const Genre: FC<Props> = ({id, name, idActual, nameActual, setPage}) => {
  return (
    <Link to={`/genres/${id}/${name}`} onClick={() => {setPage && setPage(1); }} >
      <div className={name===nameActual ? "genreActual" : "genre"}>
        <p>{name}</p>
      </div>
    </Link>
  );
}
