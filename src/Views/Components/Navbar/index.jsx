import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Link, Typography } from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  StyledList,
  StyledButtonLink,
} from "../../Styles/Navbar.styles";
import MainIcon from "../../../assets/Images/MainIcon.png";
import TwitterIcon from "../../../assets/Images/Twitter.png";
import SendIcon from "../../../assets/Images/Send.png";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
const MainIconImg = styled.img`
  width: 20%;
  height: auto;
`;
const MainIconImg2 = styled.img`
  width: 39px;
  height: 39px;
  @media (max-width: 400px) {
  }
`;

const MainIconImgtxt = styled.img`
  width: 80%;
  height: auto;
  @media (max-width: 400px) {
    width: 70%;
  }
`;

const ListItemtxtstyle = styled(ListItemText)`
  text-align: left;
`;

const drawerWidth = 240;
const navLinks = [
  { title: "Home", link: "#home" },
  { title: "Features", link: "#features" },
  { title: "Tokenomics", link: "#tokenomics" },
  { title: "Pricing", link: "#pricing" },
  {
    title: <img src={SendIcon} alt="send icon" width={18} height={18}></img>,
    link: "", target:"blank"
  },
  {
    title: <img src={TwitterIcon} alt="x icon" width={18} height={18}></img>,
    link: "",
    target:"blank"
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        alignItems: "flex-start",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <Link href="/" underline="none" color="inherit">
        <MainIconImg src={MainIcon} alt="anonsol" />
      </Link>
      <Divider />
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.link} target={item?.target} underline="none" color="white">
                <ListItemtxtstyle primary={item.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const MotionBox = motion(Box);

  return (
    <MotionBox
      sx={{ display: "flex" }}
      initial={{ y: "500px" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <StyledAppBar component="nav">
        <Container maxWidth="xl" sx={{ py: "10px" }}>
          <StyledToolbar>
            <Box sx={{ display: "flex" }}>
              <Link
                href="/"
                underline="none"
                color="inherit"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <MainIconImg2 src={MainIcon} alt="mobeth" />
                <Typography variant="h6" color="white" fontFamily="OpenSans">
                  Mob
                  <Typography variant="h6" component="span" fontFamily="OpenSans">
                    ETH
                  </Typography>
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Box
                sx={{ display: { xs: "none", md: "flex" } }}
                alignItems="center"
              >
                <StyledList sx={{ display: "flex" }}>
                  {navLinks.map((item) => (
                    <Link
                      href={item.link}
                      underline="none"
                      color="inherit"
                      key={item.title}
                    >
                      <StyledButtonLink>{item.title}</StyledButtonLink>
                    </Link>
                  ))}
                </StyledList>
              </Box>
            </Box>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </StyledToolbar>
        </Container>
      </StyledAppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "black",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </MotionBox>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
