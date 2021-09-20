import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Loading } from './components/Loading';
import { PersonBanner } from './components/PersonBanner';
import { PersonImages } from './components/PersonImages';
import { PersonShows } from './components/PersonShows';

const Person = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const {id} = useParams<any>()
  const [details, setDetails] = useState<any>({})
  const [images, setImages] = useState<any>({})
  const [taggedImages, setTaggedImages] = useState<any>({})
  const [externalId, setExternalId] = useState<any>({})
  const [credits, setCredits] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(true)

  const urlDetails = `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
  const urlImages = `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`
  const urlTaggedImages = `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${API_KEY}&page=1`
  const urlExternalId = `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${API_KEY}`
  const urlCredits = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`

  useEffect((): void => {
    const getDetails = () => axios.get(urlDetails)
    const getImages = () => axios.get(urlImages)
    const getTaggedImages = () => axios.get(urlTaggedImages)
    const getExternalId = () => axios.get(urlExternalId)
    const getCredits = () => axios.get(urlCredits)
    async function fetchData() {
      const [gotDetails, gotImages, gotTaggedImages, gotExternalId, gotCredits] = await axios.all([getDetails(), getImages(), getTaggedImages(), getExternalId(), getCredits()]);
      setDetails(gotDetails.data)
      setImages(gotImages.data.profiles)
      setTaggedImages(gotTaggedImages.data.results)
      setExternalId(gotExternalId.data)
      setCredits(gotCredits.data)
      setLoading(false)
      return gotDetails;
    }
    fetchData();
  }, [urlDetails, urlImages, urlTaggedImages, urlExternalId, urlCredits])

  return (
    <div>
      {loading ?
        <Loading/>
      :
        <div>
          <PersonBanner biography={details.biography} birthday={details.birthday} deathday={details.deathday} homepage={details.homepage} imdb_id={details.imdb_id} known_for_department={details.known_for_department} name={details.name} place_of_birth={details.place_of_birth} popularity={details.popularity} profile_path={details.profile_path} taggedImages={taggedImages} externalId={externalId}/>
          {credits.cast && credits.cast.length > 0 ?
            <div>
              <h2>Cast Credits</h2>
              <PersonShows credits={credits.cast}/>
            </div>
          :
            <div></div>
          }
          {credits.crew && credits.crew.length > 0 ?
            <div>
              <h2>Crew Credits</h2>
              <PersonShows credits={credits.crew}/>
            </div>
          :
            <div></div>
          }
          {images || taggedImages ? <PersonImages images={images} taggedImages={taggedImages}/> : <div></div>}
        </div>
      }
    </div>
  );
}

export default Person;