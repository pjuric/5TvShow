import { FC } from 'react';
import { GenreMovie } from './GenreMovie';
import { ShowResults, ShowResultsTrending } from '../interfaces'

interface Props{
  results: ShowResults[] | ShowResultsTrending[];
}

export const GenreResults: FC<Props> = ({results}) => {
  return (
    <div className="genreResultsContainer">
      {results.map((featured: {id: number; name?: string; title?: string; poster_path: string | null; }) => (
          <GenreMovie key={featured.id} id={featured.id} name={featured.name ? featured.name : featured.title} poster_path={featured.poster_path}/>
      ))}
    </div>
  );
}
