import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ListGame from '../components/ListGame';

function LandingPages() {
  useEffect(() => {
    
    // Set background image for the body
    document.body.style.backgroundColor = 'black'
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    // Cleanup function to remove the background image when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <ListGame/>
    </div>
  )
}

export default LandingPages
