import * as React from 'react';
import { FC } from 'react';

export const Nav: FC = () => {
  return (
    <div className="">
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
            <div className="searchContainer">
                <input type="text" placeholder="Search Tv Shows"/>
                <img src="/search.svg" alt=""/>
            </div>
        </div>
      <div className="responsiveNavLinks">
        <a href="/">Home</a>
        <a href="/genres/0/Trending">Genres</a>
        <a href="/people">People</a>
      </div>
    </div>
  );
}
