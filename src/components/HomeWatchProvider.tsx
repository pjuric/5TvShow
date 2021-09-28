import { FC } from 'react';

interface Props{
  provider_id: number; 
  provider_name: string; 
  logo_path: string | null;
}

export const HomeWatchProvider: FC<Props> = ({provider_id, provider_name, logo_path}) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="homeWatchProvider">
          <img 
              src={ logo_path ?
                `${baseUrl}${logo_path}`
              :
                `/exampleWatchProvider.png`
              } 
              alt={provider_name}
          />
    </div>
  );
}
