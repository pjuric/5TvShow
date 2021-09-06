import * as React from 'react';
import { FC } from 'react';
import { HomeWatchProvider } from './HomeWatchProvider';

export const HomeWatchProviders: FC<any> = ({watchProviders}) => {

  const watchProvidersSliced = watchProviders.slice(0, 12);

  return (
    <div className="homeWatchProviders">
      <h2>Popular Watch Providers</h2>
      <div className="homeWatchProvidersContainer">
        {watchProvidersSliced.map((featured: { provider_id: number; provider_name: string; logo_path: string | null; }) => (
            <HomeWatchProvider key={featured.provider_id} provider_id={featured.provider_id} provider_name={featured.provider_name} logo_path={featured.logo_path} />
        ))}
      </div>
    </div>
  );
}
