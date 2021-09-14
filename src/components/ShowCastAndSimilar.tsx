import { FC } from "react";
import { ShowCast } from "./ShowCast";
import { ShowSimilar } from "./ShowSimilar";

export const ShowCastAndSimilar: FC<any> = ({created_by, credits, similar}) => {
  return (
    <div className="showCastAndSimilar">
        <div className="showCastAndCreators">
            <div className="showCast">
                <h2>Cast</h2>
                <div className="showCastContainer">
                  {credits && credits.slice(0, 10).map((featured: {id: number; name: string; profile_path: string | null; roles: any; character: string}) => (
                    <ShowCast key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} character={featured.roles[0].character}/>
                  ))}
                </div>
            </div>
        </div>
      <div className="showSimilar">
        <h2>Similar TV Shows</h2>
        <div className="showSimilarContainer">
          {similar && similar.map((featured: {id: number; name: string; poster_path: string | null;}) => (
            <ShowSimilar key={featured.id} id={featured.id} name={featured.name} poster_path={featured.poster_path}/>
          ))}
        </div>
      </div>
    </div>
  );
}
