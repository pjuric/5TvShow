import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  link: string,
  buttonName: string,
}

export const WhiteButton: React.FC<Props> = ({link, buttonName}) => {
  return (
    <Link to={link} className="whiteButton">
      {buttonName}
    </Link>
  );
}
