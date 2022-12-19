import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "ui";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Akij Food & Beverage Ltd</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Image
            src="http://link.fobshanghai.com/bbsimage/fair/gulfood2020/3546.png"
            alt="Akij logo"
            width={400}
            height={400}
          />
          <Button />
        </div>
      </main>
    </>
  );
};

export default Home;
