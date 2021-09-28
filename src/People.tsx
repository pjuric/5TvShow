import axios from "axios";
import { FC, SetStateAction, useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { PeopleResult } from "./components/PeopleResult";
import { IPeople } from "./interfaces";

const People: FC = () => {

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const [popular, setPopular] = useState<IPeople[]>([])
  const [query, setQuery] = useState<string>("")
  const [search, setSearch] = useState<string>("")
  const [url, setUrl] = useState<string>(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if(query){
      setUrl(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
    } else{
      setUrl(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
    }
    async function fetchData() {
      const gotPopular = await axios.get(url);
      setPopular(gotPopular.data.results)
      setLoading(false)
      return gotPopular;
    }
    fetchData();
  }, [url, API_KEY, query])

const updateSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
};

const updateQuery = (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div>
      {loading ? 
        <Loading/>
      :
        <div className="peopleContainer">
          <h1>{query ? `${query}` : `Popular People`}</h1>
          <form onSubmit={updateQuery}>
            <input 
              type="text" 
              placeholder="Search actors, actresses or producers by name..."
              onChange={updateSearch}
              value={search}
              required
            />
            <button type="submit">Search</button>
          </form>
          {popular.length < 1 ?
            <h2>No results</h2>
          :
            <div className="peopleContainerResults">
              {popular.map((featured: { id: number; name: string; profile_path: string;}) => (
                <PeopleResult key={featured.id} id={featured.id} name={featured.name} profile_path={featured.profile_path}/>
              ))}
            </div>
          }
        </div>
      }
    </div>
  );
}

export default People;
