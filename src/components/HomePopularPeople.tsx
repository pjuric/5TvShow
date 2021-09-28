import { FC } from 'react';
import { HomePopularPerson } from './HomePopularPerson';
import { People } from '../interfaces';

interface Props{
  popularPeople: People[];
}

export const HomePopularPeople: FC<Props> = ({popularPeople}) => {

  const popularPeopleSliced = popularPeople.slice(0, 4);

  return (
    <div className="homePopularPeople">
      <h2>Popular People</h2>
      <div className="homePopularPeopleContaier">
        {popularPeopleSliced.map((featured: { id: number; name: string; profile_path: string | null; }) => (
            <HomePopularPerson key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} />
        ))}
      </div>
    </div>
  );
}
