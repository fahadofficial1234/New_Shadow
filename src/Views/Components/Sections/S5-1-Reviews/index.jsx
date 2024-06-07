import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import {motion} from 'framer-motion';
import Regtxt from '../../Regtxt';
import PurpleButton from '../../PurpleButton';
import Maintxt from '../../Maintxt';
import Paragraph from '../../Paragraph';
import TextRating from '../../Rating';
import ReviewCard from '../../ReviewComponent';
import FormDialog from '../../ReviewPopup';
import WagmiWallet from '../../../../WalletConnectivity/Multi-Chain';
import { FetchGetData, GetData } from '../../FetchData';

    
    const Gridbg = styled(Grid)` 
    background-color:${(props) => props.bg ? props.bg: "transparent"};
    min-height:  ${(props) => props.noht ? "auto" : "700px"} ;
    display: flex; 
    flex-direction: column;
    align-items: center;
        width: 100%;
        background-image: url(${(props) => props.img});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
     ` 
     
     const ContainerBox =  styled(Container)`  
       display: flex; 
       flex-direction: column; 
       justify-content: center; 
        // background: linear-gradient(to bottom,#000000 10%,#6B42F0 110%);
       padding-top: 100px;
       padding-bottom: 100px;
       gap:300px; 
       min-height: auto;
     `
     const MotionCont = motion(Container)
const ReviewSection = () => {

    const [reviews, setReviews] = useState([])
    const [visbleReviews, setVisbleReviews] = useState()
    const [isError, setisError] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [limit, setlimit] = useState(6);
    const [triger, settriger] = useState(false);
    function formatDate(isoString) {
        const date = new Date(isoString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
  const handleFetchData = async () => {
    const endPoint = "getReviews";
    const method = "GET";
    setisLoading(true)
    // console.log("wallet",address);
    const result = await GetData(endPoint,method);
    console.log(result);
    if (result?.message === "succes") {
        setReviews(result?.data)
        setVisbleReviews(result?.data.filter((review,index) => {
            if (index < limit) {
              return review
            }}))
    
        setisLoading(false)
    } else {
        setisError(true)
    }
}
useEffect(()=>{
    handleFetchData()
},[triger])
useEffect(()=>{
    setVisbleReviews(reviews?.filter((review,index) => {
        if (index < limit) {
          return review
        }}))
},[limit])

    return (
        <WagmiWallet>
            <Box sx={{background:"linear-gradient(to bottom,#000000 10%,#6B42F0 110%)"}}> 
            
        <ContainerBox data-aos="fade-up" maxWidth="lg" id="reviews" sx={{position:"relative",zIndex:"500",padding:{xs:"50px 30px "}}}>   
              <Grid container display="flex"  minHeight="auto" gap={5}>
                <Grid item xs={12} display="flex" flexDirection={{xs:"column",md:"row",lg:"row"}} alignItems={{xs:"start",md:"center",lg:"center"}} justifyContent={{xs:"start",md:"space-between",lg:"space-between"}} gap={{xs:"10px",lg:"0px"}} >
                    <Paragraph
                        textAlign={{xs:"left",lg:"left"}}
                        variant="h4"  
                        fontSize="clamp(1.875rem, 1.4464rem + 2.1429vw, 3.375rem)" 
                    >
                        Reviews By Premium Subscribers
                    </Paragraph>
                    <FormDialog triger={triger} settriger={settriger}/>
                    
                </Grid>
                {isLoading ?
                    <Box sx={{width:"100%"}}display="flex" alignItems="center" justifyContent="center">
                        <CircularProgress sx={{color:"#000"}} />
                    </Box>
                    :
                    <>
                    {
                        visbleReviews.map((review,index)=>(
                            <ReviewCard key={index} initialValue={review?.stars} user={review?.wallet_address} review={review?.review} date={review?.createdAt} readOnly={true}/>
                        ))
                    }
                        {
                            reviews.length !== visbleReviews.length && 
                            <Box width="100%">
                                <PurpleButton sx={{minWidth:"150px !important",background:"transparent !important",border:"1px solid #fff"}} onClick={()=>{setlimit(limit + 5)}} >Show more</PurpleButton> 
                            </Box>
                        }
                    </>
                  
                }
                  
              </Grid>
        </ContainerBox>
           
            </Box>
        </WagmiWallet>
    );
}
 
export default ReviewSection;