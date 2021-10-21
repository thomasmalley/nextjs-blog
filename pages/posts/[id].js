import Layout from "/components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

import { getAllPostIds } from "/lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
