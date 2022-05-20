import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getSortedPagesData } from "../lib/page-data";

export async function getStaticProps() {
  const allPagesData = getSortedPagesData();
  return {
    props: {
      allPagesData,
    }
  }
}

export default function Home({ allPagesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>



        <ul className={utilStyles.list}>
          {allPagesData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
