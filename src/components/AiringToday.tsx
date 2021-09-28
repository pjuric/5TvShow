import { FC } from 'react';
import { AiringPoster } from './AiringPoster';
import { ShowResults } from '../interfaces';

interface Props{
  airingToday: ShowResults[];
}

export const AiringToday: FC<Props> = ({airingToday}) => {

  const airingSliced = airingToday.slice(0, 6);

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
