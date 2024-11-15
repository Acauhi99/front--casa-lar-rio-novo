import PropTypes from "prop-types";
import { Header } from "../Header/Header";
import { MainContainer } from "../MainContainer/MainContainer";
import { Footer } from "../Footer/Footer";
import { WhatsAppButton } from "../WhatsAppButton/WhatsAppButton";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
