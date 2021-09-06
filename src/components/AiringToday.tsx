import * as React from 'react';
import { FC } from 'react';
import { AiringPoster } from './AiringPoster';

export const AiringToday: FC<any> = (airingToday) => {

  const airingSliced = airingToday.airingToday.results.slice(0, 6);

  return (
      <div>
          <h2 className="secondaryHeading">Airing Today</h2>
          <div className="airingTodaycontainer">
            {airingSliced.map((featured: { id: number; name: string; poster_path: string | null; }) => (
              <AiringPoster key={featured.id} id={featured.id} name={featured.name} poster_path={featured.poster_path}/>
            ))}
          </div>
      </div>
  );
}
