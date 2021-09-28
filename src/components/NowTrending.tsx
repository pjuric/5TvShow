import { useState } from 'react';
import { FC } from 'react';
import { NowTrendingMovie } from './NowTrendingMovie';
import { ShowResultsTrending } from '../interfaces';

interface Props{
  trending: ShowResultsTrending[];
}

export const NowTrending: FC<Props> = ( {trending} ) => {

  const trendingSliced = trending.slice(0, 4);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [background, setBackground] = useState<string | null>(trendingSliced[0].backdrop_path);

  return (
    <div className="nowTrendingContainer">
        <img 
          className="nowTrendingImage" 
          src={ background ?
            `${baseUrl}${background}`
          :
            `/exampleImage.png`
          } 
          alt={trendingSliced[0].title}
        />
        <h2>Now Trending</h2>
        <div className="nowTrendingMovies">
            {trendingSliced.map((featured: { id: number; title: string; poster_path: string | null; backdrop_path: string | null; overview: string | null; vote_average: number; vote_count: number; original_language: string;}) => (
              <NowTrendingMovie key={featured.id} id={featured.id} name={featured.title} poster_path={featured.poster_path} backdrop_path={featured.backdrop_path} setBackground={setBackground} overview={featured.overview} vote_average={featured.vote_average} vote_count={featured.vote_count} original_language={featured.original_language}/>
            ))}
        </div>
    </div>
  );
}
