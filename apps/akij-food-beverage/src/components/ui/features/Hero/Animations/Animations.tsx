import Image from "next/image";
import AkijImage from "./dummy-assets/mojo3.png";

export default function Animations() {
  return (
    <div>
      <Image src={AkijImage} alt="me" width="400" height="400" />
    </div>
  );
}
