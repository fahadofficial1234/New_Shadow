import React, { useRef } from 'react';
import Home from '../../Components/Sections/S1-Home';
import Why from '../../Components/Sections/S2-Why';
import Purple from '../../Components/Sections/S3-Purple';
import Tokenomics from '../../Components/Sections/S4-Tokenomics';
import Faq from '../../Components/Sections/S6-Faq';
import Summary from '../../Components/Sections/S7-Summary';
import styled from '@emotion/styled';
import { useState,useEffect} from 'react';
import ElevateExperience from '../../Components/Sections/S3-Elevate';
import starGalaxyBg from "../../../assets/Images/newDesign/starGalaxyBg.png"
import fixedCircle from "../../../assets/Images/newDesign/fixedCircle.png"
import UperBar from '../../Components/UperBar';
import Partnership from '../../Components/Sections/S9-Partnership'; 
import axios from 'axios';
import Locations from '../../Components/Sections/S4-Maps';
import ReviewSection from '../../Components/Sections/S5-1-Reviews';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Box } from '@mui/material';
import End from '../../Components/Sections/S8-End';
import PoweredBy from '../../Components/Sections/S3-PoweredBy';
import WhySection from '../../Components/Sections/S3-NewWhy';
import RoadmapSection from '../../Components/Sections/S-RoadMap';
import ComingSoon from '../../Components/Sections/S-ComingSoon';
import MultipleIncome from '../../Components/Sections/S-MultipleIncome';
import TokenomicsV2 from '../../Components/Sections/S4-Tokennomics_Section';
import Availability from '../../Components/Sections/S3-Availability';
import Number_Sec from '../../Components/Sections/S10-Numbers';
import Footer from '../../Components/Sections/Footer';
import LoaderPage from '../../Components/Sections/S0_LoaderPage'; 
import TopRighttImg from '../../../assets/Images/newDesign/right.png'
import BottomleftImg from '../../../assets/Images/newDesign/left.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Styleddiv = styled.div`
    width:100%;
    overflow: hidden;
    scroll-snap-align:start;
    min-height:100vh;
    padding:50px 0;
    
  background-image: url(${starGalaxyBg});
  background-position: top;
  background-size: 100%;
  background-repeat: repeat;
  @media(max-width: 899px){
    background-position: top;   
  background-size: auto 110vh;
  }
`
const FixedImage= styled.img`
  width:100%;
  height:auto;
  position:fixed;
  top:10%;
  left:-50%;
  z-index:1;
`
const Maindiv  = styled.div`
   overflow: hidden; 
   /* position : relative;   */
   /* min-height: 100vh; */
`  
const  TopRightimg = styled.img` 
     position: fixed;
    width: 40%;
    top: 0%;
    right: 0%;
    /* transform: translate(52%, -38%);  */
    z-index: 1; 
    @media(max-width:599px){
       width: 80% !important; 
       /* transform: translate(51%, -38%); */
    }
` 
const  BottomLeftimg = styled.img`
    position: fixed;
    width: 40%;
    bottom: 0%;
    left: 0%;
    /* transform: translate(-55%, 45%);  */
    z-index: 1;   
    opacity: (0.7%);
    @media(max-width:599px){
       width: 80% !important; 
       /* transform: translate(-55%, 37%); */
    }
`

 
const Main = () => {
    // const [location, setLocation] = useState({});  
    const [pageState, setPageState] =  useState(true);
    const [location, setLocation] = useState(null);
    useEffect(()=>{
      AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      })
    })
    useEffect(() => {
      const fetchLocation = async () => {
        try {
          const ipResponse = await axios.get('https://api.ipify.org?format=json') 
          // console.log(ipResponse.data.ip)
          const response = await axios.get(`https://ipapi.co/${ipResponse?.data.ip}/json/`)
          .then(function (response) {
              // console.log("response",response);
              const data = response.data;  
                // console.log(data)
                setLocation({
                    ip: data?.ip, 
                    city: data?.city,
                    region: data?.region,
                    country: data?.country_name,
                    asn: data?.asn,
            isp: data?.org
          });
          })
          .catch(function (error) {
              console.error(error);
          });
          
        } catch (error) {
          console.error('Error fetching location:', error);
        }
      };
  
      fetchLocation();
    },[]);
     
 
    const tawkMessengerRef = useRef();

    // const handleMinimize= () => {
    //     tawkMessengerRef.current.minimize();
    // };
    
    useEffect(() => {
      if (pageState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
  
      // Clean up on component unmount
      return () => {
        document.body.style.overflow = '';
      };
    }, [pageState])
    const [isClient, setIsClient] = useState(false)
    useEffect(()=>{
      setTimeout(()=>{

        setIsClient(true)
      },1000)
    },[])
    return ( 
      <>    
         {pageState && <LoaderPage setPageState = {setPageState} /> } 
         {
            isClient &&
           <Maindiv>  
           <TopRightimg src={TopRighttImg} alt="topRightborderImg"  /> 
           <BottomLeftimg src={BottomleftImg} alt="BottomRightborderImg"  />
            <Home /> 
            <PoweredBy /> 
            <WhySection/> 
            <Availability />
            <Why/> 
            <Number_Sec />
            <MultipleIncome/> 
            <ComingSoon/> 
            <TokenomicsV2 />
            <RoadmapSection/>
            <Partnership /> 
            <ReviewSection/> 
            <Styleddiv>
                <Faq/>
                <End/>
            </Styleddiv>
            <Summary/>
            {/* <Footer /> */}
        </Maindiv>   
        }
         
      </>
    );
}
export default Main;