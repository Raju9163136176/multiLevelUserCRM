import React from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceipetLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalenderOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material"
import { useEffect,useState, } from 'react'
import { useLocation,useNavigate } from 'react'
import FlexBetween from 'components/FlexBetween'
import images from 'assets/images.jpg'

const NavItem=[
  {
    text:"Dashboard",
    icon:<HomeOutlined/>
  },
  {
    text:"New Application",
    icon:<AdminPanelSettingsOutlined/>
  },
  {
    text:"Applicaiton Information",
    icon:<HomeOutlined/>
  },
  {
    text:"Track Applicaiton",
    icon:<TodayOutlined/>
  }
]

const Sidebar=({
    drawerWidth,
    isSidebarOpen,
    setisSidebarOpen,
    isNonMobile
}) =>{
  const {pathname} = useLocation()
  const [active,setActive] = useState("")
  const navigate = useNavigate()
  const theme = useTheme()
  useEffect(
    ()=>{
        setActive(pathname.substring(1))
    },[pathname]
  )
  return <Box component="nav">
    {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen} 
          onClose={()=>setisSidebarOpen(false)}
          variant='persistent'
          anchor='left'
          sx={{
            width:drawerWidth,
            "& .MuiDrawer-paper":{
                color:theme.palette.secondary['200'],
                backgroundColor:theme.palette.alt,
                boxSixing:"border-box",
                borderWidth: isNonMobile ? 0:"2px",
                width: drawerWidth
            }
          }}
        >
        <Box width="100%">
             <Box m="1.5rem 2rem 2rem 2rem">
                <FlexBetween color={theme.palatte.secondary.main}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                        <Typography variant='h4' fontWeight="bold">
                            KAJ
                        </Typography>
                    </Box>
                    {!isNonMobile && (
                        <IconButton onClick={()=>setisSidebarOpen(!setisSidebarOpen)}>
                            <ChevronLeft/>
                        </IconButton>
                    )}
                </FlexBetween>
             </Box>
             <List>
                  {NavItem.map(({
                    text,icon
                  })=>{
                    if (!icon) {
                        return(
                        <Typography key={text} sx={{ m:"2.5rem 0 1rem 3rem"}}>
                            {text}
                        </Typography>
                      )
                    } 
                    const lcText = text.toLowerCase()
                    return (
                      <ListItem key={text} disablePadding >
                        <ListItemButton onClick={()=>{
                          navigate(`/${lcText}`)
                          setActive(lcText)
                          }}
                          
                         sx={{ 
                          backgroundColor:active === lcText?theme.palette.secondary[300] :"transparent",
                          color:active===lcText?theme.palette.primary[600]:theme.pallete.secondary[100]
                        
                        }}
                          >
                            {icon}
                          <ListItemIcon
                            sx={{ m:"2rem", color: active===lcText?theme.palette.primary[600]:theme.pallete.secondary[200],   }}
                          >

                          </ListItemIcon>
                          <ListItemText primary={text}>
                              {active === lcText && (
                                <ChevronRightOutlined sx={{  ml:"auto" }} />
                              )}
                          </ListItemText>
                        </ListItemButton>
                       
                      </ListItem>
                    )
                  })}
             </List>

        </Box>
        </Drawer>
    )}
  </Box>
  
};

export default Sidebar