import React from 'react';
import Banneer from '../Banneer/Banneer';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banneer></Banneer>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;