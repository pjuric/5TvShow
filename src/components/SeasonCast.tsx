import { FC } from "react";
import { SeasonCastPerson } from "./SeasonCastPerson";

export const SeasonCast: FC<any> = ({ credits }) => {
  return (
    <div className="seasonCast">
      <h2>Cast</h2>
      <div className="seasonCastContainer">
        {credits.slice(0, 6).map((featured: { id: number; name: string; profile_path: string | null; character: string}) => (
          <SeasonCastPerson key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} character={featured.character}/>
        ))}
      </div>
    </div>
  );
}
