import axios from "axios";
import { FC, useEffect, useState } from "react";
import { SecondaryButton } from "./SecondaryButton";
import { ShowGenre } from "./ShowGenre";
import { WhiteButton } from "./WhiteButton";
import { IShowGenres, IStills } from '../interfaces'


interface Props{
    id: number;
    backdrop_path: string | null;
    poster_path: string | null;
    name: string;
    tagline: string;
    genres: IShowGenres[];
    overview: string;
    homepage: string;
    network: {
        id: number;
        name: string;
        logo_path: string | null;
    };
    images: IStills[];
}

export const ShowBanner:FC<Props> = ({id, backdrop_path, poster_path, name, tagline, genres, overview, homepage, network, images}) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const imagesSliced = images.slice(1, 5);
    const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
    const [networkHomepage, setNetworkHomepage] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    let networkHomepageUrl = "";
    if(network){
        networkHomepageUrl = `https://api.themoviedb.org/3/network/${network.id}?api_key=${API_KEY}`
    }

    useEffect((): void => {
        async function fetchData() {
          const gotNetworkHomepage = await axios.get(networkHomepageUrl);
          setNetworkHomepage(gotNetworkHomepage.data.homepage)
          setLoading(false);
          return gotNetworkHomepage;
        }
        if(networkHomepageUrl){
            fetchData();
        }
      }, [networkHomepageUrl, networkHomepage])

  return (
      <div className="showBanner">
        <div className="showBannerContainer">
            <img src={backdrop_path ? `${baseUrl}${backdrop_path}` : `/backdrop.jpg`} alt={name}/>
        </div>
        <div className="showBannerContent">
            <img className="showBannerPoster" src={poster_path ? `${baseUrl}${poster_path}` : `/examplePoster.png`} alt={name}/>
            <div className="showDetailsSection">
                <h1>{name}</h1>
                {tagline && <h2>{tagline}</h2>}
                <div className="showGenres">
                    {genres.map((featured: { id: number; name: string;}) => (
                        <ShowGenre key={featured.id} id={featured.id} name={featured.name}/>
                    ))}
                </div>
                {overview ? <p className="showOverview">{overview}</p> : <p className="showOverview">No overview avaliable at the moment...</p>}
                <div className="showButtonsAndNetwork">
                    <div className="showButtons">
                        {homepage && <WhiteButton link={homepage} buttonName="Watch" external={true}/>}
                        <SecondaryButton link="#showOverall" buttonName="More" external={false}/>
                    </div>
                    {!loading && networkHomepage &&
                        <a href={networkHomepage} target="_blank" rel="noreferrer"><img src={network.logo_path ? `${baseUrl}${network.logo_path}` : "/exampleWatchProvider.png"} alt={network.name}/></a>
                    }
                </div>
                <div className="showBannerImages">
                        {images ? imagesSliced.map((featured: { file_path: string | null;}, index: number) => (
                            <img key={index} src={`${baseUrl}${featured.file_path}`} alt=""/>
                        ))
                        :
                            <img src="/backdrop.jpg" alt=""/>
                        }
                </div>
            </div>
        </div>
      </div>
  );
}
