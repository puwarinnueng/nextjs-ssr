import React, { Component } from 'react'
// import App from 'next/app'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
// import Head from 'next/head'
import '../styles/index.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../src/redux/store'

// import configurationStore from '../src/configs/configurationStore';
// const store = configurationStore();

export default function Myapp({ Component, pageProps }) {
  return (
    <div>
      <div>
        <head>
          <title>Next.js</title>
        </head>
        <Header />
        <Provider store={store}>
          <div className="main-index">
            <Component {...pageProps} />
          </div>
        </Provider>
        <Footer />


      </div>
    </div>
  )
}

