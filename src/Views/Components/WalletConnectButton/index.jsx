import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Web3Button, useWeb3Modal } from "@web3modal/wagmi/react";
import {
  useAccount,
  useBalance,
  useConnect,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import { useDisconnect } from "wagmi";
import PurpleButton from "../PurpleButton";

const Imagedata = styled.img`
  width: 100%;
  height: auto;
  max-width: ${(props) => (props.mw ? props.mw : "30px")};
  /* max-height: ${(props) => (props.mh ? props.mh : "100px")}; */
  margin: ${(props) => (props.m ? props.m : "0")};
  position: relative;
  z-index: 999;
  /* align-items: ${(props) => (props.ai ? props.ai : "center")}; */
  @media (max-width: 599px) {
    max-width: ${(props) => (props.mw599 ? props.mw599 : "")};
    margin: ${(props) => (props.m599 ? props.m599 : "0")};
    display: ${(props) => (props.disp ? props.disp : "")};
    visibility: ${(props) => (props.vis ? props.vis : "")};
  }
`;
const CustomBtn = styled(Button)`
  background: ${(props) => (props.bgc ? props.bgc : "linear-gradient(to right,#835DFF,#6137EA)")};
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  border-radius: 10px;
  width: ${(props) => (props.w ? props.w : "150px")};
  min-height: 35px;
  font-family: ${(props) => (props.fm ? props.fm : "PoppinsSB")};
  margin: ${(props) => (props.m ? props.m : "0")};
  padding: ${(props) => (props.p ? props.p : "0px 16px")};
  color: ${(props) => (props.c ? props.c : "#ffff")};
  border: ${(props) => (props.b ? props.b : "none")};
  transition: 0.5s;
  text-transform: none;
  cursor: ${(props) => (props.cur ? props.cur : "pointer")};
  /* box-shadow: inset 0 3px 6px #ffffff88; */
  z-index: 0;
  & .Mui-disabled {
    color: #707070 !important;
    border-color: #707070 !important;
  }
  :hover {
    color: ${(props) => (props.c ? props.c : "#fff")};
    background: ${(props) => (props.bgc ? props.bgc : "linear-gradient(to right,#835DFF,#6137EA)")};
    box-shadow: none;
  }
  @media (max-width: 599px) {
    font-size: ${(props) => (props.fs599 ? props.fs599 : "12px")};
  }

  & > .MuiButtonBase-root {
    & > .MuiTouchRipple-root {
      display: none;
    }
  }
`;

const CustomMenu = styled(Menu)`
  & > .MuiPaper-root {
    margin-top: 10px;
    border-radius: 10px;
    background: #835DFF;
    /* border: 1px solid #fff; */
    min-width: 150px;
    backdrop-filter: blur(1);
    @media (max-width: 599px) {
      background: #835DFF;
    }
    & > .MuiList-root {
      padding: 0;
      & > .MuiButtonBase-root {
        display: flex;
        flex-direction: column;
        align-items: start;
        border-bottom: 1px solid #fff;
        color: #000;
        padding: 10px 10px;
        font-size: 16px;
        font-family: PoppinsB;
        @media (max-width: 599px) {
          font-size: 14px;
        }
      }
      & :last-child {
        border-bottom: none;
      }
    }
  }
  /* background-color: aqua; */
`;
const CustomMenuItem = styled(MenuItem)`
  /* background-color: aqua; */
`;
const BalanceShow = styled(Typography)`
  color: #fff;
  padding: 0 10px 0 15px;
  min-width: 10px;
  text-align: center;
`;

const CustomWeb3Button = (props) => {
  const { open, close } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const { connect, connectors, pendingConnector } = useConnect();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const network = useSwitchNetwork({
    throwForSwitchChainNotSupported: true,
  });

  const chainIDs = [1];
  // const chainIDs = [1, 5, 11155111,80001,421613,43113];
  const [chainValidity, setChainValidity] = useState(true);
  const [btnText, setBtnText] = useState("Connect Wallet");
  const [connectedChain, setConnectedChain] = useState(
    isConnected ? chain.id : null
  );
  const [walletAddress, setWalletAddress] = useState("");

  const [getBalance, setBalance] = useState(0.0);
  const [getNetwork, setNetwork] = useState("");
  const [getIcon, setIcon] = useState();
  const [getChainId, setChainID] = useState(0);

  const userDetails = useAccount();
  // Arbitrum One  42161
  // Ethereum  1
  // Polygon  137

  // const userBalance = useBalance( {
  //         address: userDetails?.address,
  //         // chainId: isConnected ? chain?.id :null,
  //         watch: true,
  //         onError(error) {
  //           console.log("Error", error);
  //         },
  //         onSuccess(data) {
  //           setBalance(() => {
  //             if (data) {
  //               let bal = data?.formatted;
  //               return Math.round(bal * 100) / 100;
  //             } else {
  //               return 0.0;
  //             }
  //           });
  //         },
  //       }
  // );

  useEffect(() => {
    if(isConnected){
     chainIDs.includes(chain?.id)
        ? setChainValidity(true)
        : setChainValidity(false)
      };
  }, [connectedChain]);
  useEffect(() => {
    isConnected ? setBtnText(chain.name) : setBtnText("Connect Wallet");
  }, [isConnected, chain]);
  useEffect(() => {
    isConnected
      ? setWalletAddress(
          `${address?.slice(0, 4)}....${address?.slice(
            address?.length - 5,
            address?.length - 1
          )}`
        )
      : setWalletAddress("Connect Wallet");
  }, [address]);
  const ChangeNetworkAndConnect = (popupState, id) => {
    // console.log("Chain ID here", id);
    popupState.close();
    // disconnect();
    switchNetwork(id);
  };
  const ConnectWallet = () => {
    props.setOpen(false)
    open();
    if(isConnected){
     if(!chainIDs.includes(chain?.id)){
        switchNetwork(1)
      }
    }
     ;
  };
  const userChainBalance = useBalance({
    address: userDetails?.address,
    // chainId: isConnected ? chain?.id :null,
    watch: true,
    onError(error) {
      console.error("Error", error);
    },
    onSuccess(data) {
      setBalance(() => {
        if (data) {
          let bal = data?.formatted;
          return Math.round(bal * 100) / 100;
        } else {
          return 0.0;
        }
      });
    },
  });
  useEffect(() => {
    setBalance(() => {
      if (userChainBalance) {
        let bal = parseFloat(userChainBalance?.data?.formatted);
        bal = parseFloat(bal.toFixed(3));
        return bal;
      } else {
        return 0.0;
      }
    });
    setIcon(chain?.icon);
    setNetwork(chain?.nativeCurrency?.symbol);
    setChainID(chain?.id);
  }, [getBalance, getNetwork, getChainId, chain, open]);
  useEffect(() => {
    isConnected
      ? setWalletAddress(
          `${address?.slice(0, 4)}....${address?.slice(
            address?.length - 4,
            address?.length
          )}`
        )
      : setWalletAddress("Connect Wallet");
  }, [address]);
  // useEffect(() => {
  //   isConnected ? setConnectState(true) : setConnectState(false);
  // }, [isConnected]);
  useEffect(() => {
    // isConnected ? console.log("Chain ID", chain.id) : null;
    if(isConnected) setConnectedChain(chain?.id) ;
  }, [chain]);

  // useEffect(() => {
  //   isConnected ? chain.id : null;
  // }, [connectedChain]);
  return (
    <>
      {!isConnected ? ( 
           <PurpleButton  p="2px 30px"  suppressHydrationWarning={true} onClick={() => ConnectWallet()} > Connect Wallet</PurpleButton>
        // <CustomBtn 
        //    bgc ="linear-gradient(110deg,#663CED 30%,#FFA5FD) !important"
        //   suppressHydrationWarning={true}
        //   variant="filled"
        //   // w="100%"
        //   onClick={() => ConnectWallet()}
        // >
        //   Connect Wallet
        // </CustomBtn>
      ) : (
        <>
          {chainValidity ? (
            <>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    {/* <Image width={30} height={30} src={getIcon} alt="" /> */}
                    <CustomBtn
                      suppressHydrationWarning={true}
                      variant="filled"
                      w="fit-content"
                      {...bindTrigger(popupState)}
                    >
                      <Box sx={{display:{xs:"none",md:"flex"}}}>

                      {isConnected ? getBalance : ""}
                      {isConnected ? ` ${chain.nativeCurrency.symbol}` : ""}
                      {" | "}
                      </Box>
                      {walletAddress}
                      {/* {isConnected ? ` ${chain.name}` : "Connect Wallet"} */}
                    </CustomBtn>
                    <CustomMenu {...bindMenu(popupState)}>
                      {chains.map((chain1, index) => {
                        return (
                          <CustomMenuItem
                            sx={{
                              background:
                                chain.id === chain1.id
                                  ? "#ffffff5c !important"
                                  : "",
                            }}
                            key={index}
                            onClick={() =>
                              ChangeNetworkAndConnect(popupState, chain1.id)
                            }
                          >
                            {chain1.name}
                          </CustomMenuItem>
                        );
                      })}
                      <CustomMenuItem onClick={disconnect}>
                        Disconnect
                      </CustomMenuItem>
                    </CustomMenu>
                  </React.Fragment>
                )}
              </PopupState>
              {/* <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <CustomBtn
                      suppressHydrationWarning={true}
                      variant="filled"
                      w="150px"
                      {...bindTrigger(popupState)}
                    >
                      {walletAddress}
                    </CustomBtn>
                    <CustomMenu {...bindMenu(popupState)}>
                      <CustomMenuItem>
                        <Paragraph fs="10px" p="0" ta="left">
                          Network
                        </Paragraph>
                        {chain?.name}
                      </CustomMenuItem>
                      
                    </CustomMenu>
                  </React.Fragment>
                )}
              </PopupState> */}
            </>
          ) : (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <CustomBtn
                    variant="filled"
                    w="100%"
                    c="#ff0202"
                    bgc="#ffffff12"
                    hbgc="#ffffff12"
                    hc="#ff0101"
                    b="1px solid #ff0000"
                    {...bindTrigger(popupState)}
                  >
                    {"Switch Network"}
                  </CustomBtn>
                  <CustomMenu {...bindMenu(popupState)}>
                    {chains.map((chain1, index) => {
                      return (
                        <CustomMenuItem
                          key={index}
                          onClick={() =>
                            ChangeNetworkAndConnect(popupState, chain1.id)
                          }
                        >
                          {chain1.name}
                        </CustomMenuItem>
                      );
                    })}
                  </CustomMenu>
                </React.Fragment>
              )}
            </PopupState>
          )}
        </>
      )}
    </>
  );
};

export default CustomWeb3Button;
