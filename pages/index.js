import Head from "next/head";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const handleOnBtnClick = () => {
    console.log("Banner button");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText={"View stores nearby"}
          handleOnBtnClick={handleOnBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="Hero Image"
          />
        </div>
      </main>
    </div>
  );
}
