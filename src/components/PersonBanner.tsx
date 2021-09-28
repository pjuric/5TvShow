import { FC } from "react";
import { Link } from "react-router-dom";
import { WhiteButton } from "./WhiteButton";
import MovieIcon from '@material-ui/icons/Movie';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { ITaggedImages, IPersonExternalIds } from '../interfaces'

interface Props{
    biography: string;
    birthday: string | null; 
    deathday: null | string; 
    homepage: null | string;
    imdb_id: string;
    known_for_department: string; 
    name: string;
    place_of_birth: string | null;
    popularity: number; 
    profile_path: string | null; 
    taggedImages: ITaggedImages[];
    externalId?: IPersonExternalIds;
}

export const PersonBanner: FC<Props> = ({ biography, birthday, deathday, homepage, imdb_id, known_for_department, name, place_of_birth, popularity, profile_path, taggedImages, externalId }) => {
  
    const baseUrl = "https://image.tmdb.org/t/p/original/";
    const filteredBackdrop: ITaggedImages[] = Object.values(taggedImages).filter((image: ITaggedImages) => image.image_type !== "poster")
    
    return (
        <div className="personBanner">
            <div className="personBannerGradient">
                <img className="backgroundImage" src={filteredBackdrop.length > 0 ? `${baseUrl}${filteredBackdrop[0].file_path}` : "/backdrop.jpg"} alt={name}/>
            </div>
            <div className="personBannerContainer">
                <div className="personBannerPosters">
                    <img className="personBannerPostersMainImage" src={profile_path ? `${baseUrl}${profile_path}` : "/examplePoster.png"} alt={name}/>
                    {externalId &&
                        <div className="personBannerExternalId">
                            {externalId.imdb_id && <Link to={{ pathname: `https://www.imdb.com/name/${externalId.imdb_id}/?ref_=vp_vi_tt` }} target="_blank"><MovieIcon fontSize="large"/></Link>}
                            {externalId.facebook_id && <Link to={{ pathname: `https://www.facebook.com/${externalId.facebook_id}` }} target="_blank"><FacebookIcon fontSize="large"/></Link>}
                            {externalId.instagram_id && <Link to={{ pathname: `https://www.instagram.com/${externalId.instagram_id}` }} target="_blank"><InstagramIcon fontSize="large"/></Link>}
                            {externalId.twitter_id && <Link to={{ pathname: `https://www.twitter.com/${externalId.twitter_id}` }} target="_blank"><TwitterIcon fontSize="large"/></Link>}
                        </div>
                    }
                </div>
                <div className="personBannerContent">
                    <h1>{name}</h1>
                    <h2>{known_for_department}</h2>
                    <div className="personBannerDetails">
                        {birthday && <p><span>Birthday:</span> {birthday}</p>}
                        {place_of_birth && <p><span>Place of Birth:</span> {place_of_birth}</p>} 
                        {deathday && <p><span>Died:</span> {deathday}</p>}
                        <p><span>Popularity index:</span> {popularity}</p>
                    </div>
                    <p>{biography ? biography : "No biography avaliable at the moment..."}</p>
                    <div className="personBannerButtons">
                        {homepage && <WhiteButton external={true} link={homepage} buttonName="Homepage"/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
