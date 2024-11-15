import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Box, CircularProgress, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() =>
  import("./screens/Home/Home").then((module) => ({ default: module.Home }))
);
const About = lazy(() =>
  import("./screens/About/About").then((module) => ({ default: module.About }))
);
const Faq = lazy(() =>
  import("./screens/Faq/Faq").then((module) => ({ default: module.Faq }))
);
const Contact = lazy(() =>
  import("./screens/Contact/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Donations = lazy(() =>
  import("./screens/Donations/Donations").then((module) => ({
    default: module.Donations,
  }))
);
const NotFound = lazy(() =>
  import("./screens/NotFound/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

const LoadingFallback = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <CircularProgress size={40} />
  </Box>
);

const ErrorFallback = ({ error }) => (
  <Container>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 4,
      }}
    >
      <Typography variant="h6" color="error" gutterBottom>
        Problemas ao carregar a página
      </Typography>
      <Typography
        variant="body2"
        color="error"
        sx={{
          bgcolor: "error.light",
          p: 2,
          borderRadius: 1,
          fontFamily: "monospace",
        }}
      >
        {error.message}
      </Typography>
    </Box>
  </Container>
);

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
};

export default App;
