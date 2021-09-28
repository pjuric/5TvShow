import { FC, Key } from "react";

export const PersonImages: FC<any> = ({ images, taggedImages }) => {

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="personImages">
            {images && images.length > 0 &&
                <div>
                    <h2>Profile Images</h2>
                    <div className="personImagesProfiles">
                        {images.map((featured: {file_path: string}, index: Key) => (
                            <a key={index} href={`https://image.tmdb.org/t/p/original//${featured.file_path}`} target="_blank" rel="noreferrer"><img src={`${baseUrl}${featured.file_path}`} alt=""/></a>
                        ))}
                    </div>
                </div>
            }
        {taggedImages && taggedImages.length > 0 && 
                <div> 
                    <h2>Tagged Images</h2>
                    <div className="personImagesBackdrops">
                        {taggedImages.map((featured: {file_path: string; media_type: string; image_type: string;}, index: Key) => (
                            featured.image_type!=="poster" && <a key={index} href={`https://image.tmdb.org/t/p/original//${featured.file_path}`} target="_blank" rel="noreferrer"><img src={`${baseUrl}${featured.file_path}`} alt=""/></a>
                        ))}
                    </div>
                    <div className="personImagesPosters">
                        {taggedImages.map((featured: {file_path: string; media_type: string; image_type: string;}, index: Key) => (
                            featured.image_type==="poster" && <a key={index} href={`https://image.tmdb.org/t/p/original//${featured.file_path}`} target="_blank" rel="noreferrer"><img src={`${baseUrl}${featured.file_path}`} alt=""/></a>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}