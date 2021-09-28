import { FC } from 'react';
import { GenreMovie } from './GenreMovie';

export const GenreResults: FC<any> = ({results}) => {
  return (
    <div className="genreResultsContainer">
      {results.map((featured: {id: number; name: string; poster_path: string | null; }) => (
          <GenreMovie key={featured.id} id={featured.id} name={featured.name} poster_path={featured.poster_path}/>
      ))}
    </div>
  );
}
