import * as React from 'react';
import { FC } from 'react';
import { HomeGenre } from './HomeGenre';

export const HomeGenres: FC<any> = ({genres}) => {
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
