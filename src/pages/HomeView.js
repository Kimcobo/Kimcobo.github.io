import React from 'react';
import Ability from '../components/Ability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Main from '../components/Main';
import Project from '../components/Project';
import Site from '../components/Site';

const HomeView=()=>{
    return(
        <div>
            <Header />
            <Main>
                <Intro />
                <Ability />
                <Site />
                <Project />
                <Contact />
            </Main>
            <Footer />
        </div>
    )
}

export default HomeView;