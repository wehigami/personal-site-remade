import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Nav from "./nav";
import Header from '../components/header';

const name = "Wehi";
export const siteTitle = "Wehipage";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Wehi: personal website :D" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <Nav />
      </nav>
      {home ? (
        <>
          <header>
            <Header/>
          </header>
          <div className={styles.container}>{children}</div>
          <footer>
            <></>
          </footer>
        </>
      ) : (
        <>
          <div className={styles.container}>{children}</div>
          <footer>
            <></>
          </footer>
        </>
      )}
    </div>
  );
}
