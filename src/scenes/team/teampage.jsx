import { Box, } from "@mui/material";
import Header from "../../components/Header";

const Team = () => {

    return (
        <Box m="20px">
          {/* HEADER */}
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="TEAM" subtitle="whos in the team" />
        </Box>
    </Box>
    );
};

export default Team;