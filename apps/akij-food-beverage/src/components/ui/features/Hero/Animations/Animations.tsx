import Image from "next/image";
import AkijImage from "./dummy-assets/mojo3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

type AnimationProps = {
  image: {
    href: string;
    alt: string;
  };
};

export default function Animations({ image }: AnimationProps) {
  return (
    <div>
      <Image src={AkijImage} alt="me" width="400" height="400" />
      <LazyLoadImage alt={"akij"} height={400} src={image.href} width={400} />
    </div>
  );
}
