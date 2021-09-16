import { FC } from "react";
import { SeasonEpisode } from "./SeasonEpisode";

export const SeasonEpisodes: FC<any> = ({episodes, tvid}) => {
  return (
    <div className="seasonEpisodes">
        <h2>Episodes</h2>
        <div className="seasonEpisodesContainer">
          {episodes.map((featured: { id: number; tvid: number; name: string; still_path: string | null; season_number: number; episode_number: number}) => (
            <SeasonEpisode key={featured.id} id={featured.id} tvid={tvid} name={featured.name} still_path={featured.still_path} season_number={featured.season_number} episode_number={featured.episode_number}/>
          ))}
        </div>
    </div>
  );
}
