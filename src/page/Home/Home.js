import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Footer from './Footer';
import Parts from './Parts';
import PartsInformation from './PartsInformation';
import Reply from './Reply';
import Review from './Review';

const Home = () => {
    return (
        <div className='  bg-[#BAE8E8]'>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>
            <Review></Review>
            <PartsInformation></PartsInformation>
            <Reply></Reply>
            <Footer></Footer>
        </div>
    );
};

export default Home;