import { FC } from 'react';
import { HomeGenre } from './HomeGenre';
import { Genres } from '../interfaces'

interface Props{
  genres: Genres[];
}

export const HomeGenres: FC<Props> = ({genres}) => {
  return (
    <div className="homeGenres">
      <h2>Genres</h2>
      <div className="homeGenresContainer">
        {genres.map((featured: { id: number; name: string;}) => (
          <HomeGenre key={featured.id} id={featured.id} name={featured.name}/>
        ))}
      </div>
    </div>
  );
}
