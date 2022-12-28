import Image from "next/image";
import AkijImage from "../Animations/dummy-assets/mojo.png";

export default function Products() {
  return (
    <div>
      <img src={AkijImage.src} alt="me" />
    </div>
  );
}
