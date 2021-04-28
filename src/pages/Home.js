import React from 'react';
import ButtonsButtom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import Symbole from '../components/Symbole';


const Home = () => {
 return(
   <div>
     <div className="home">
      <Navigation/>
      <SocialNetwork/>
      <Symbole/>
      <div className="home-main">
         <div className="main-content">
             <h1>Team React ODC</h1>
             <h2><DynamicText/></h2>
         </div>
      </div>
      <ButtonsButtom right={"/project-1"}/>
    </div>
   </div>
 );
};

export default Home;