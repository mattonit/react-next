import React, { Component } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

class Index extends Component {

  render() {
    return(
      <div>
        <Header />
        <h1>About</h1>
        <p>This project is a boilerplate to quick start Server-Side rendered React.js applications using Express.js and Next.js</p>
        <Footer />
      </div>
    );
  }

}

export default Index;