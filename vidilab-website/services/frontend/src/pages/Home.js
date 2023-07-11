import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import FeedII from "../components/FeedII";
import Navbar from "../components/Navbar";
import { Box, Container, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ClickyBox from "../components/clickyBox";

function Home() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <Box>
            <Navbar/>
            <Stack direction="row" spacing={2} justifyContent="space-evenly">
                <Sidebar/>
                <ClickyBox/>
                <FeedII isActive={activeIndex === 0}/>
            </Stack>
        </Box>
    );
}

export default Home;