import { FC, Key } from "react";
import { PersonShow } from "./PersonShow";
// import { IPersonCreditsCast, IPersonCreditsCrew } from '../interfaces'

// interface Props{
//   credits: IPersonCreditsCast[] | IPersonCreditsCrew[];
// }

export const PersonShows: FC<any> = ({ credits }) => {
  return (
    <div className="personShows">
        {credits.map((featured: {backdrop_path: string | null; character: string; job: string; id: number; name: string; }, index: Key) => (
            <PersonShow key={index} backdrop_path={featured.backdrop_path} character={featured.character || featured.job} id={featured.id} name={featured.name} />
        ))}
    </div>
  );
}