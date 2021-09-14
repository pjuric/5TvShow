import { FC } from "react";

interface Props{
  file_path: string;
}

export const ShowGalleryImage: FC<Props> = ({ file_path }) => {

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="showGalleryImage">
      <a href={`https://image.tmdb.org/t/p/original//${file_path}`} target="_blank" rel="noreferrer"><img src={`${baseUrl}${file_path}`} alt=""/></a>
    </div>
  );
}
