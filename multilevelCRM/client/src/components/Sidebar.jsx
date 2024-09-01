import React from "react";
import {
  Box,
  // Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
// import profileImage from "assets/images.jpg";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Agent Facing",
    icon: null,
  },
  {
    text: "New Application",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Old Application",
    icon: <Groups2Outlined />,
  },
  {
    text: "All Courses",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Application Info ",
    icon: <PublicOutlined />,
  },
  {
    text: "Notices",
    icon: <PublicOutlined />,
  },
  {
    text: "Admin",
    icon: null,
  },
  {
    text: "All Applications",
    icon: <PointOfSaleOutlined />,
  },
  
  {
    text: "Application's Info",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Student Information",
    icon: <TodayOutlined />,
  },
  
  {
    text: "Add Courses",
    icon: <SettingsOutlined />,
  },
  {
    text: "Agent Communication",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Track Application",
    icon: <PieChartOutlined />,
  },
  {
    text: "Settings",
    icon: null,
  },
  {
    text: "Personal Info",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Add New Counsellor",
    icon: <TrendingUpOutlined />,
  },
  {
    text: "Add New user",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setisSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setisSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Application Portal
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setisSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText.trim()}`);
                        setActive(lcText.trim());
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;