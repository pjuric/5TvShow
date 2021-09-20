import { FC, useState, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';

export const Nav: FC = () => {

  const [search, setSearch] = useState<string>("")
  const history = useHistory();

  const updateSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearch(e.target.value);
  };
  
  const updateQuery = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setSearch(''); 
      let path = `/genres/${search}`;
      history.push(path);
  }

  return (
    <div id="nav" className="">
        <div className="navContainer">
            <div className="logo">
                <img src="/logo.svg" alt="FiveTv"/>
                <p className="logoText"><span>Five</span>Tv</p>
            </div>
            <div className="navLinks">
                <a href="/">Home</a>
                <a href="/genres/0/Trending">Genres</a>
                <a href="/people">People</a>
            </div>
            <form onSubmit={updateQuery} className="searchContainer">
                <input 
                  type="text" 
                  placeholder="Search Tv Shows" 
                  onChange={updateSearch}
                  value={search}
                  required
                />
                <button type="submit"><img src="/search.svg" alt=""/></button>
            </form>
        </div>
      <div className="responsiveNavLinks">
        <a href="/">Home</a>
        <a href="/genres/0/Trending">Genres</a>
        <a href="/people">People</a>
      </div>
    </div>
  );
}
