import { FC } from "react";
import { SeasonEpisode } from "./SeasonEpisode";
import { ISeasonEpisodes } from '../interfaces';

interface Props{
  episodes: ISeasonEpisodes[];
  tvid: string | undefined;
}

export const SeasonEpisodes: FC<Props> = ({episodes, tvid}) => {
  return (
    <div className="seasonEpisodes">
        <h2>Episodes</h2>
        <div className="seasonEpisodesContainer">
          {episodes.map((featured: { id: number; name: string; still_path: string | null; season_number: number; episode_number: number}) => (
            <SeasonEpisode key={featured.id} id={featured.id} tvid={tvid} name={featured.name} still_path={featured.still_path} season_number={featured.season_number} episode_number={featured.episode_number}/>
          ))}
        </div>
    </div>
  );
}
