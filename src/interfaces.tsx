export interface IStills{
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

export interface IGenres{
    id: number;
    name: string;
}

export interface WatchProviders{
    display_priority: number;
    logo_path: string;
    provider_name: string;
    provider_id: number;
}

export interface IPeople{
    profile_path: string;
    adult: boolean;
    id: number;
    known_for: object;
    name: string; 
    popularity: number;
}
  
export interface EpisodeDetails{
    air_date: string;
    crew: [
        id: number,
        credit_id: string,
        name: string,
        department: string,
        job: string,
        profile_path: string | null,
    ];
    episode_number: number;
    guest_stars: [
        id: number,
        name: string,
        credit_id: string,
        character: string,
        order: number,
        profile_path: string | null,
    ];
    name: string;
    overview: string;
    id: number;
    production_code: string | null;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
}

export interface Cast{
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    character: string;
    credit_id: string;
    order: number;
}

export interface Crew{
    department: string;
    job: string;
    credit_id: string;
    adult: boolean | null;
    gender: number | null;
    id: number;
    known_for_department: string; 
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

export interface GuestStars{
    character_name?: string;
    character?: string;
    credit_id: string;
    order: number;
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

export interface Credits{
    cast: Cast[];
    crew: Crew[];
    guest_stars: GuestStars[];
    id: number;
}

export interface IPersonCreditsCast{
    credit_id: string;
    original_name: string;
    id: number;
    genre_ids: number[];
    character: string;
    name: string;  
    poster_path: string | null;
    vote_count: number;
    vote_average: number;
    popularity: number;
    episode_count: number;
    original_language: string;
    first_air_date: string;
    backdrop_path: string | null;
    overview: string;
    origin_country: string[];
}

export interface IPersonCreditsCrew{
    id: number;
    department: string;
    original_language: string;
    episode_count: number;
    job: string;
    overview: string;
    origin_country: string[];
    original_name: string;
    genre_ids: number[];  
    name: string;
    first_air_date: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number; 
    vote_average: number;
    poster_path: string | null;
    credit_id: string;
}

export interface IPersonCredits{
    cast: IPersonCreditsCast[];
    crew: IPersonCreditsCrew[];
    id: number;
}

export interface IPersonDetails{
    birthday: string | null;
    known_for_department: string;
    deathday: null | string;
    id: number;
    name: string;
    also_known_as: string[];
    gender: number;
    biography: string;
    popularity: number;
    place_of_birth: string | null;
    profile_path: string | null;
    adult: boolean;
    imdb_id: string;
    homepage: null | string;
}

export interface IProfiles{
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface ITaggedImages{
    aspect_ratio: string;
    file_path: string;
    height: number;
    id: string;
    iso_639_1: null | string;
    vote_average: number;
    vote_count: number;
    width: number;
    image_type: string;
    media: object;
    media_type: string;
}

export interface IPersonExternalIds{
    imdb_id: string | null;
    facebook_id: null | string; 
    freebase_mid: string | null;
    freebase_id: null | string;
    tvrage_id: number | null;
    twitter_id: null | string;
    id: number;
    instagram_id: string | null;
}

export interface ICreatedBy{
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
}

interface IShowNetworks{
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
}

export interface IShowSeasons{
    air_date: string;
    episode_count: number;
    id: number;
    name: string; 
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface IShowGenres{
    id: number,
    name: string,
}

export interface IShowLastEpisode{
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
}

export interface IShowSpokenLanguages{
    english_name: string,
    iso_639_1: string,
    name: string,
}

export interface IShowProductionCountries{
    iso_3166_1: string,
    name: string,
}

export interface IKeywordProps{
    id: number;
    name: string;
}

export interface IShowDetails{
    backdrop_path: string | null;
    created_by: ICreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: IShowGenres[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: IShowLastEpisode;
    name: string;
    next_episode_to_air: null;
    networks: IShowNetworks[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: [
        id: number,
        logo_path: null | string,
        name: string,
        origin_country: string,
    ];
    production_countries: IShowProductionCountries[];
    seasons: IShowSeasons[];
    spoken_languages: IShowSpokenLanguages[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export interface IShowExternalId{
    imdb_id: string | null;
    freebase_mid: string | null;
    freebase_id: string | null;
    tvdb_id: number | null;
    tvrage_id: number | null;
    facebook_id: string | null;
    instagram_id: string | null;
    twitter_id: string | null;
    id: number;
}

export interface IShowCreditsCastRoles{
    credit_id: string,
    character: string,
    episode_count: number,
}

export interface IShowCreditsCast{
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    roles: IShowCreditsCastRoles[];
    total_episode_count: number;
    order: number;
}

export interface IShowOverall{
    backdrop_path: string | null;
    first_air_date: string;
    last_air_date: string;
    vote_average: number;
    vote_count: number;
    original_language: string;
    number_of_seasons: number;
    number_of_episodes: number;
    popularity: number;
    type: string;
    spoken_languages: IShowSpokenLanguages[];
    production_countries: IShowProductionCountries[];
    status: string;
    keywords: IKeywordProps[];
    externalIds?: IShowExternalId;
}

export interface ISeasonEpisodes{
    air_date: string;
    episode_number: number;
    crew: Crew[];
    guest_stars: GuestStars[];
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface ISeasonDetails{
    _id: string;
    air_date: string;
    episodes: ISeasonEpisodes[];
    name: string;
    overview: string;
    id: number;
    poster_path: string | null;
    season_number: number;
}