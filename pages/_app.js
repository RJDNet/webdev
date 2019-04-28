import React from 'react';
import App, { Container } from 'next/app';

import '../static/style.css';

import Layout from '../components/layout/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;