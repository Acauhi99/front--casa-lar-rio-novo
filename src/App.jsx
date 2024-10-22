import { Route, Routes } from 'react-router-dom';
import { About, Contact, Donations, Faq, Home, NotFound, Volunteers } from './screens';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
