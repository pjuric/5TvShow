import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props{
  id: number;
  name: string;
}

export const HomeGenre: FC<Props> = ({id, name}) => {
  return (
    <Link to={`genres/${id}/${name}`} className="homeGenre">
        {name}
    </Link>
  );
}
