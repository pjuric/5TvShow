import { FC, Dispatch } from 'react';
import { Genre } from './Genre';

interface Props {
  genres: any;
  id: any;
  name: string;
  setPage: Dispatch<React.SetStateAction<any>>;
}

export const GenresList: FC<Props> = ({genres, id, name, setPage}) => {
  return (
    <div className="genresListContainer">
      {genres.map((featured: {id: number; name: string;}) => (
          <Genre key={featured.id} id={featured.id} name={featured.name} idActual={id} nameActual={name} setPage={setPage}/>
      ))}
      <Genre id="0" name="Trending" idActual={id} nameActual={name} />
      <Genre id="0" name="Top Rated" idActual={id} nameActual={name} setPage={setPage}/>
      <Genre id="0" name="Airing Today" idActual={id} nameActual={name} setPage={setPage}/>
      <Genre id="0" name="On the Air" idActual={id} nameActual={name} setPage={setPage}/>
      <Genre id="0" name="Popular" idActual={id} nameActual={name} setPage={setPage}/>
    </div>
  );
}
