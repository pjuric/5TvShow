import axios from "axios";
import { FC, Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { KnownForShow } from "./KnownForShow";
import { Loading } from "./Loading";

interface Props{ 
    id: number; 
    name: string; 
    profile_path: string;
}


export const PeopleResult: FC<Props> = ({id, name, profile_path}) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [credits, setCredits] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)

    const urlCredits = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`

    useEffect((): void => {
        async function fetchData() {
        const gotCredits = await axios.get(urlCredits);
        setCredits(gotCredits.data.cast)
        setLoading(false)
        return gotCredits;
        }
        fetchData();
    }, [urlCredits])


  return (
      <div>
      {loading ?
        <Loading/>
      :
        <div className="peopleResult">
            <img 
                className="peopleResultAbsolute" 
                src={credits[2] && credits[2].backdrop_path ? `${baseUrl}${credits[2].backdrop_path}` : `/backdrop.jpg`}
                alt=""
            />
            <div className="peopleResultPoster">
                <Link to={`/person/${id}`}>
                    <img 
                        className="nowTrendingImage" 
                        src={profile_path ? `${baseUrl}${profile_path}` : `/examplePoster.png`} 
                        alt={name}
                    />
                </Link>
                <p>{name}</p>
            </div>
            {credits.length > 0 ?
                <div className="peopleResultKnownFor">
                    <h2>Known for:</h2>
                    <div className="knownForContainer">
                        {credits.slice(0, 2).map((featured: { id: number; name: string; backdrop_path: string | null;}, index: Key | null | undefined) => (
                            <KnownForShow key={index} id={featured.id} name={featured.name} backdrop_path={featured.backdrop_path}/>
                        ))}
                    </div>
                </div>
            :
            <div className="noAvaliableShows">
                <h2>No avaliable TV Shows.</h2>
            </div>
            }
            
        </div>
      }
    </div>
  );
}
