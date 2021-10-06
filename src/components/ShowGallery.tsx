import { FC, Key } from "react";
import { IStills, Videos } from "../interfaces";
import { ShowGalleryImage } from "./ShowGalleryImage";
import { ShowGalleryVideo } from "./ShowGalleryVideo";

interface Props{
  images: IStills[];
  videos: Videos[];
}

export const ShowGallery: FC<Props> = ({ videos, images }) => {
  return (
    <div className="showGallery">
      {videos.length > 1 && 
        <div>
          <h2>Videos</h2>
          <div className="showGalleryVideos">
            {videos && videos.slice(0, 5).map((featured: {id: string; key: string; site: string; name: string;}) => (
              featured.site === "YouTube" && <ShowGalleryVideo key={featured.id} id={featured.id} ytkey={featured.key} site={featured.site} name={featured.name}/>
            ))}
          </div>
        </div>
      }
      {images.length > 1 &&
      <div>
        <h2>Images</h2>
        <div className="showGalleryImages">
          {images && images.slice(0, 20).map((featured: {file_path: string;}, index: Key) => (
           <ShowGalleryImage key={index} file_path={featured.file_path}/>
          ))}
        </div>
      </div>
      }
    </div>
  );
}
