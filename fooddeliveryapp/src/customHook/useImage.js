import { useState, useEffect } from "react";
import { getImageByPage, getImageByContainer, getImageByAltText, getImageById} from "../api/imageAPI";

const useImage = (type, value) => {
  const [imageURLs, setImageURLs] = useState([]); // State to store image URLs

  useEffect(() => {
    if (!type || !value) return;

    const fetchImages = async () => {
      try {
        let images = [];
        switch (type) {
          case "page":
            images = await getImageByPage(value);
            break;
          case "container":
            images = await getImageByContainer(value);
            break;
          case "altText":
            images = await getImageByAltText(value);
            break;
          case "id":
            images = await getImageById(value);
            break;
          default:
            images = [];
            break;
        }

        setImageURLs(images);

        // Prefetch images to trigger service worker caching
        images.forEach((image) => {
          if (image?.imageURL) {
            fetch(image.imageURL).catch((error) => {
              console.error("Error prefetching image:", image.imageURL, error);
            });
          }
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [type, value]);

  return imageURLs;
};

export default useImage;
