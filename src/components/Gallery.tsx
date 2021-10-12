import { FC, Key, useEffect, useState } from "react";
import { ShowGalleryImage } from "./ShowGalleryImage";
import { ShowGalleryVideo } from "./ShowGalleryVideo";
import { Videos, IStills } from '../interfaces'

interface Props{
    videos: Videos[];
    images: IStills[];
}

export const Gallery: FC<Props> = ({ videos, images }) => {

    const numberOfVideos = videos.length;
    const [numberOfImages, setNumberOfImages] = useState<number>(0)

    useEffect((): void => {
        setNumberOfImages(4*numberOfVideos)
    }, [numberOfVideos])

  return (
    <div className="gallery">
        <h2>Gallery</h2>
        <div className="galleryContainer">
            {videos && 
                <div className="galleryVideos">
                    {videos && videos.map((featured: {id: string; key: string; site: string; name: string;}) => (
                        featured.site === "YouTube" && <ShowGalleryVideo key={featured.id} id={featured.id} ytkey={featured.key} site={featured.site} name={featured.name}/>
                    ))}
                </div>
            }
            <div className="galleryImages">
                {images && images.slice(0, numberOfImages).map((featured: {file_path: string;}, index: Key | null | undefined) => (
                    <ShowGalleryImage key={index} file_path={featured.file_path}/>
                ))}
            </div>
        </div>
    </div>
  );
}
