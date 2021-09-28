import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HomeTopRatedImage } from './HomeTopRatedImage';
import { ShowResults } from '../interfaces';

interface Props{
  topRated: ShowResults[];
}

export const HomeTopRated: FC<Props> = ({topRated}) => {

  const topRatedSliced = topRated.slice(0, 4);

  return (
    <div className="homeTopRated">
      <h2>Top Rated</h2>
      <div className="homeTopRatedImages">
        {topRatedSliced.map((featured: { id: number; name: string; backdrop_path: string | null;}) => (
              <HomeTopRatedImage key={featured.id} id={featured.id} name={featured.name} backdrop_path={featured.backdrop_path}/>
        ))}
      </div>
      <Link to={`/genres/0/Top%20Rated`}>
          <div className="homeTopRatedLink">
              See All
          </div>
      </Link>
    </div>
  );
}
