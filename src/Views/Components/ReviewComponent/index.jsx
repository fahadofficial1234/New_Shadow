import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Paragraph from '../Paragraph'
import TextRating from '../Rating'

const ReviewCard = (props) => {
    const {initialValue,user,review,date,readOnly}  = props
    
    const [newDate, setnewDate] = useState("")
    function formatDate(isoDate) {
        const date = new Date(isoDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    useEffect(()=>{
        const formattedDate = date ? formatDate(date) :""
        setnewDate(formattedDate)
    },[date])
    
  return (
    <Grid className='colordBox' item xs={12} sm={5} md={4} sx={{minHeight:"280px"}} padding="30px" gap="10px">
        <Box height="90%">
        <Box display="flex" alignItems="center" justifyContent="start" gap="10px">
            <Box sx={{background:"linear-gradient(to right,#835DFF,#6137EA)", borderRadius:"5px",color:"#fff",width:"40px",height:"40px"}} display="flex" alignItems="center" justifyContent="center">
                <Paragraph textAlign="left" fontFamily="PoppinsM">
                    {user.slice(-2)}
                </Paragraph>
            </Box>
            <Box>
                <Paragraph fontFamily="PoppinsM" >
                    {user?.slice(0, 4)}....{user?.slice(user?.length - 5,user?.length - 1)}
                </Paragraph>
            <TextRating value={initialValue} readOnly={readOnly ===  true ? true : false}/>
            </Box>
        </Box>
        <Paragraph textAlign="left"  mt="10px" >
            {review}
        </Paragraph>
        </Box>
        <Paragraph textAlign="left" color="#ffffff82">
            {newDate}
        </Paragraph>
    </Grid>   
  )
}

export default ReviewCard