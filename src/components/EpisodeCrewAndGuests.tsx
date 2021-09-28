import { FC } from "react";
import { EpisodeCrewMember } from "./EpisodeCrewMember";

// type Crew = {
//   department: string;
//   job: string;
//   credit_id: string;
//   adult: boolean;
//   gender: number | null;
//   id: number;
//   known_for_department: string;
//   name: string;
//   original_name: string;
//   popularity: number;
//   profile_path: string | null;
// }


// type Guest_stars = {
//   character_name: string;
//   credit_id: string;
//   order: number;
//   adult: boolean;
//   gender: number | null;
//   id: number;
//   known_for_department: string;
//   name: string;
//   original_name: string;
//   popularity: number;
//   profile_path: string | null;
// }


// interface Props{
//   crew: Crew[];
//   guest_stars: Guest_stars[];
// }

export const EpisodeCrewAndGuests: FC<any> = ({ crew, guest_stars }) => {
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
          {guest_stars && guest_stars.length > 0 &&
            <div>
                <h2>Guest Stars</h2>
                <div className="episodeCrewContainer">
                    {guest_stars.slice(0, 3).map((featured: { id: number; name: string; profile_path: string | null; character_name: string;}) => (
                        <EpisodeCrewMember key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} job={featured.character_name}/>
                    ))}
                </div>
            </div>
          }
      </div>
    </div>
  );
}
