import { FC } from "react";
import { EpisodeCrewMember } from "./EpisodeCrewMember";

export const EpisodeCrewAndGuests: FC<any> = ({ crew, guests }) => {

  return (
    <div className="episodeCrewAndGuests">
      <div className="episodeCrew">
          {crew && crew.length > 0 && 
            <div>
                <h2>Crew</h2>
                <div className="episodeCrewContainer">
                    {crew.slice(0, 3).map((featured: { id: number; name: string; profile_path: string | null; job: string;}) => (
                        <EpisodeCrewMember key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} job={featured.job}/>
                    ))}
                </div>
            </div>
          }
          {guests && guests.length > 0 &&
            <div>
                <h2>Guest Stars</h2>
                <div className="episodeCrewContainer">
                    {guests.slice(0, 3).map((featured: { id: number; name: string; profile_path: string | null; character_name: string;}) => (
                        <EpisodeCrewMember key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} job={featured.character_name}/>
                    ))}
                </div>
            </div>
          }
      </div>
    </div>
  );
}
