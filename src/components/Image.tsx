import { IKImage } from "imagekitio-next";

interface ImageProps {
  src?: string;
  className?: string;
  w: number;
  h: number;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, className, w, h, alt }) => {
  // Jika src kosong atau undefined, gunakan defaultSrc
  const defaultSrc = "No_Image_Available.jpg";
  const endpoint = "https://ik.imagekit.io/fajarblog/porto/";

  return (
    <IKImage
      urlEndpoint={endpoint}
      path={src || defaultSrc}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 50 }}
      alt={alt}
      width={w}
      height={h}
      // Reduce image size with transform
      transformation={[
        {
          width: w.toString(),
          height: h.toString(),
        },
      ]}
    />
  );
};

export default Image;
