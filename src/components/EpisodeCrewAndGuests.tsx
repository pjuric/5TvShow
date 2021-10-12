import { FC } from "react";
import { EpisodeCrewMember } from "./EpisodeCrewMember";
import { Crew, GuestStars } from '../interfaces';

interface Props{
  crew: Crew[];
  guest_stars: GuestStars[];
}

export const EpisodeCrewAndGuests: FC<Props> = ({ crew, guest_stars }) => {
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
                    {guest_stars.slice(0, 3).map((featured: { id: number; name: string; profile_path: string | null; character_name?: string | undefined;}) => (
                        <EpisodeCrewMember key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path} job={featured.character_name}/>
                    ))}
                </div>
            </div>
          }
      </div>
    </div>
  );
}
