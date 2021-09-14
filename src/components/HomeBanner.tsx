import * as React from 'react';
import { FC } from 'react';
import { HomeBannerFeaturedImages } from './HomeBannerFeaturedImages';
import { WhiteButton } from './WhiteButton';
import { YellowIcons } from './YellowIcons';

interface PopularMovie {
  poster_path: string | null,
  popularity: number,
  id: number,
  backdrop_path: string | null,
  vote_average: number,
  overview: string,
  firs_air_date: string,
  origin_country: string[],
  genre_ids: number[],
  original_language: string,
  voteCount: number,
  name: string,
  original_name: string,
}

export const HomeBanner: FC<PopularMovie[] | any> = ({popular}) => {
  
  const baseUrl = "https://image.tmdb.org/t/p/original/"
  const popularSliced = popular.slice(1, 5);

  return (
    <div className="homeBannerContainer">
      <div className="homeBannerBackground">
        <img 
          className="homeBannerImage" 
          src={ popular[0].backdrop_path ?
                `${baseUrl}${popular[0].backdrop_path}`
              :
                `/exampleImage.png`
          } 
          alt=""
        />
      </div>
      <div className="homeBannerContent">
        <p className="mainHeading">{popular[0].name}</p>
        <YellowIcons vote={popular[0].vote_average} vote_count={popular[0].vote_count} original_language={popular[0].original_language}/>
        <p className="overviewParagraph">
          {popular[0].overview ? popular[0].overview : "No description avaliable"}  
        </p>
        <WhiteButton link={`show/${popular[0].id}`} buttonName="Details" external={false}/>
      </div>
      <p className="secondaryHeading">Also Featured:</p>
      <div className="homeBannerFeatured">
        {popularSliced.map((featured: { id: number; name: string; overview: string; backdrop_path: string | null; }) => (
          <HomeBannerFeaturedImages key={featured.id} id={featured.id} name={featured.name} overview={featured.overview} backdrop_path={featured.backdrop_path}/>
        ))}
      </div>
    </div>
  );
}
