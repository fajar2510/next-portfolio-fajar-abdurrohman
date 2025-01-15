import { IKImage } from "imagekitio-next";

interface ImageProps {
  urlEndpoint?: string;
  src?: string;
  className?: string;
  w?: number;
  h?: number;
  alt: string;
}

const Image: React.FC<ImageProps> = ({
  urlEndpoint,
  src,
  className,
  w = 300,
  h = 300,
  alt,
}) => {
  // Jika src kosong atau undefined, gunakan defaultSrc
  const IKIT = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;
  const defaultSrc = "No_Image_Available.jpg";

  return (
    <IKImage
      urlEndpoint={IKIT}
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
          height: `${h}`,
          width: `${w}`,
        },
      ]}
    />
  );
};

export default Image;
