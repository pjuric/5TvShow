export interface Stills{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null | string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface Videos{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    id: string;
}

export interface ShowResults{
    poster_path: string | null;
    popularity: number;
    id: number;
    backdrop_path: string | null;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string[];
    genre_ids: number[];
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}

export interface ShowResultsTrending{
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface Genres{
    id: number;
    name: string;
}

export interface WatchProviders{
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
}

export interface People{
    profile_path: string;
    adult: boolean;
    id: number;
    known_for: any;
    name: string; 
    popularity: number;
}