import { FC, Key } from "react";
import { ShowGalleryImage } from "./ShowGalleryImage";
import { ShowGalleryVideo } from "./ShowGalleryVideo";

export const ShowGallery: FC<any> = ({ videos, images }) => {
  return (
    <div className="showGallery">
      {videos.length > 1 && 
        <div>
          <h2>Gallery Videos</h2>
          <div className="showGalleryVideos">
            {videos && videos.slice(0, 9).map((featured: {id: string; key: string; site: string; name: string;}) => (
              featured.site === "YouTube" && <ShowGalleryVideo key={featured.id} id={featured.id} ytkey={featured.key} site={featured.site} name={featured.name}/>
            ))}
          </div>
        </div>
      }
      {images.length > 1 &&
      <div>
        <h2>Gallery Images</h2>
        <div className="showGalleryImages">
          {images && images.slice(0, 30).map((featured: {file_path: string;}, index: Key | null | undefined) => (
           <ShowGalleryImage key={index} file_path={featured.file_path}/>
          ))}
        </div>
      </div>
      }
    </div>
  );
}
