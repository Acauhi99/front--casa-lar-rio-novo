import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const MainContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        padding: { xs: "10px", sm: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
