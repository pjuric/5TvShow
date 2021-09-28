import { FC } from 'react';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';

interface Props{
  vote: number,
  vote_count: number,
  original_language: string,
}

export const YellowIcons: FC<Props> = ({vote, vote_count, original_language}) => {
  return (
    <div className="yellowIconsContainer">
        <div className="yellowIcon">
          <StarRoundedIcon/>
          <p>{vote}</p>
        </div>
        <div className="yellowIcon">
          <PeopleAltRoundedIcon/>
          <p>{vote_count}</p>
        </div>
        <div className="yellowIcon">
          <LanguageRoundedIcon/>
          <p>{original_language}</p>
        </div>
    </div>
  );
}
