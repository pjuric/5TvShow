import { FC } from "react";
import { Link } from "react-router-dom";

interface Props{ 
    id: number; 
    name: string; 
    profile_path: string | null; 
    job: string;
}

export const EpisodeCrewMember: FC<Props> = ({ id, name, profile_path, job }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/"

  return (
    <div className="episodeCrewMember">
        <Link to={`/person/${id}`}>
            <img src={profile_path ? `${baseUrl}${profile_path}` : "/noImageAvaliable.png"} alt={name}/>
        </Link>
        <p className="showCastNormal">{name}</p> 
        {job && <p className="showCastThin">{job}</p>}
    </div>
  );
}
