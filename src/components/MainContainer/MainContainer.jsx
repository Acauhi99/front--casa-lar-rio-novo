import { Box, Toolbar } from "@mui/material";
import PropTypes from "prop-types";

export const MainContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 64px)",
        padding: { xs: "10px", sm: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "64px",
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
