import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: any;
  name: any;
  idActual: any;
  nameActual: any;
  setPage?: React.Dispatch<React.SetStateAction<any>>;
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
