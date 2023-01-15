import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import ProductCategories from '../ProductCategories/ProductCategories';
import Sponsors from '../Sponsors/Sponsors';


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <ProductCategories></ProductCategories>
                  <Features></Features>
                  <Advertisement></Advertisement>
                  <Faq></Faq>
                  <Sponsors></Sponsors>
            </div>
      );
};

export default Home;