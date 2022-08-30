import * as React from 'react';
import Layout from '../layout';
import Seo from '../components/Seo';

function IndexPage() {
  return (
    <Layout title="Index Page">
      <p>Index Page</p>
    </Layout>
  );
}

export default IndexPage;

export function Head() {
  return <Seo title="Index Page" />;
}
