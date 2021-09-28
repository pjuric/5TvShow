import {FC} from 'react';
import { Link } from 'react-router-dom';

interface Props {
  external: boolean;
  link: string,
  buttonName: string,
}

export const WhiteButton: FC<Props> = ({link, buttonName, external}) => {
  return (
    <Link to={{ pathname: `${link}` }} target={external ? "_blank" : "_self"} className="whiteButton">
      {buttonName}
    </Link>
  );
}
