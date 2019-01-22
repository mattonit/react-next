import React, { Component } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';

class Index extends Component {

  render() {
    return(
      <div>
        <Header />
        <h1>Home page</h1>
        <Footer />
      </div>
    );
  }

}

export default Index;