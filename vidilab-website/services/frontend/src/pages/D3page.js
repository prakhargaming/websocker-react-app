
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"
import Navbar from "../components/Navbar";
import { Box, Container, Stack } from "@mui/material";


function D3Page() {
  return (
    <Box sx={{}}>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>
  );
}

export default D3Page;