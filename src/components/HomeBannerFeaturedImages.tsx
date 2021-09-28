import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: number,
  name: string,
  overview: string,
  backdrop_path: string | null,
}

export const HomeBannerFeaturedImages:FC<Props> = ({id, name, overview, backdrop_path}) => {
  
  const baseUrl = "https://image.tmdb.org/t/p/original/"
  
  return (
    <div>
        <Link className="homeBannerFeaturedImageContainer" to={`show/${id}`}>
            <div className="homeBannerFeaturedImages">
              <img 
                className="homeBannerImage" 
                src={ backdrop_path ?
                      `${baseUrl}${backdrop_path}`
                    :
                      `/backdrop.jpg`
                } 
                alt={name}
              />
              <p className="homeBannerFeaturedImagesParagraph">{overview ? overview : "No description avaliable"}</p>
            </div>
        </Link>
        <h2 className="homeBannerthirdHeading">{name}</h2>
    </div>
  );
}
