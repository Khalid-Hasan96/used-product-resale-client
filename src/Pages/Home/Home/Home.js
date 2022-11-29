import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import ProductCategories from '../ProductCategories/ProductCategories';


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <ProductCategories></ProductCategories>
                  <Features></Features>
            </div>
      );
};

export default Home;