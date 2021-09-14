import { FC } from "react";

interface Props{
  id: string; 
  ytkey: string; 
  site: string;
  name: string;
}

export const ShowGalleryVideo: FC<Props> = ({ id, ytkey, site, name}) => {
  return (
    <div className="showGalleryVideo">
      <iframe  
        src={`https://www.youtube.com/embed/${ytkey}`}
        title={name}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>
  );
}
