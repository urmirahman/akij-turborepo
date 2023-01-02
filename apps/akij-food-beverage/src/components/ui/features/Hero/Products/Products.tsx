import Image from "next/image";
import AkijImage from "../Animations/dummy-assets/mojo.png";

export default function Products() {
  return (
    <div>
      <Image src={AkijImage} alt="me" width={200} height={200} />
    </div>
  );
}
