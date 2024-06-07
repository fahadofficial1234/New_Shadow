import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PurpleButton from '../PurpleButton';
import Maintxt from '../Maintxt';
import Paragraph from '../Paragraph';
import TextRating from '../Rating';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import CustomWeb3Button from '../WalletConnectButton';
import { useAccount } from 'wagmi';
import { FetchGetData, FetchPostData } from '../FetchData';
import zIndex from '@mui/material/styles/zIndex';
// getDataByWalletAddress
// addReview
const InputArea = styled.textarea`
  border: ${(props) => (props.b ? props.b : "none")};
  border-radius: 10px;
  padding: 10px;
  min-height:100px;
  background-color: #272727;
  color: #fff;
  font-size: 16px;
  font-family: "OpenSans";
  width:calc(100% - 20px);
  :focus {
    outline: 1px solid var(--primary-color);
  }
  @media (max-width: 599px) {
    flex-direction: ${(props) => (props.fd ? props.fd : "row")};
    align-items: flex-start;
    width: ${(props) => props.w599};
  }
`;
const FormDialog=({triger,settriger})=> {
  
  const { isConnected, address } = useAccount();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [input, setinput] = React.useState("");
  const [State, setState] = React.useState(0);
  const [isValid, setisValid] = React.useState(false);
  const [isError, setisError] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true);
  
  const handleFetchData = async () => {
    const endPoint = "getDataByWalletAddress";
    const method = "GET";
    const queryString = `?walletAddress=${address}`
    // console.log("wallet",address);
    const result = await FetchGetData(endPoint,queryString,method);
    // console.log(result);
    if (result?.message === "succes") {
      setisValid(true)
    } else {
      setisValid(false)
}
};
const handlePostReview = async () => {
  const endPoint = "addReview";
  const method = "POST";
  setisLoading(true)
  const requestData = {
    walletAddress:address,
    stars:value,
    review:input
  }
  // console.log("requestData",{...requestData});
  const result = await FetchPostData(endPoint,requestData,method);
  // console.log(result);
  if (result?.message === "succes") {
    setValue(0)
    setinput("")
    setisLoading(true)
    settriger(!triger)
    setOpen(false);
  } else {  
    setisLoading(true)
    setisError(true)
}
};
React.useEffect(()=>{
  if(value > 0 && input.length  > 10){
    setisLoading(false)
  }else{
    setisLoading(true)
  }
},[input,value])
  const handleClickOpen = () => {
    handleFetchData()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (event) => {
    setinput(event.target.value)
  }


  return (
    <React.Fragment>
      <PurpleButton onClick={handleClickOpen} sx={{minWidth:"150px !important",background:"transparent !important",border:"1px solid #fff",position:"relative", zIndex:"999"}}>+ Write A Review</PurpleButton>
      <Dialog
        open={open}
        onClose={handleClose} 
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"}}>
                      <Maintxt
                        textAlign="center"
                        my="0px"
                        sx={{ marginTop: "0" }}
                    >
                        Write A Reviews
                    </Maintxt>
                    <Paragraph variant="body1" fontFamily="OpenSans" mt="10px" >
                        How Would You Rate Us?
                     </Paragraph>
                     <TextRating value={value} setValue={setValue} size="large"/>
                     <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",gap:"10px"}}>
                        <Paragraph color="#8350f6" variant="body1" fontFamily="OpenSans" mt="10px"  width="100%" textAlign="left">
                            Review
                        </Paragraph>
                        <InputArea onChange={event =>handleInput(event)} value={input} placeholder='write review'/>
                        {
                          isError && 
                          <Paragraph fontSize="12px" color="#ff3030" fontFamily="OpenSans" fontWeight="bold" >
                          Error submitting review try again.
                      </Paragraph>
                        }
                        { isConnected ?
                          
                          isValid ? 
                          isLoading ?
                           <PurpleButton disabled sx={{width:"100% !important",minWidth:"100% !important"}}>Submit</PurpleButton> 
                           :
                              <PurpleButton onClick={handlePostReview} sx={{width:"100% !important",minWidth:"100% !important"}}>Submit</PurpleButton> 
                            :
                              <Paragraph variant="body1" color="#ff3030" fontFamily="OpenSans" mt="10px" >
                                Note: Only premium subscribers can write a review.
                              </Paragraph>
                          :
                          <CustomWeb3Button setOpen={setOpen}/>
                            
                        }
                        <Paragraph variant="body1" fontFamily="OpenSans" mt="10px" >
                          Note: Only premium subscribers can write a review. Please connect wallet to verify the subscription.
                        </Paragraph>
                     </Box>
        </DialogContent>
        
      </Dialog>
    </React.Fragment>
  );
}
export default FormDialog