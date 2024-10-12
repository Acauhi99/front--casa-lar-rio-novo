import { Route, Routes } from 'react-router-dom';
import { About, Contact, Donations, Faq, Home, NotFound, Volunteers } from './screens';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/volunteers" element={<Volunteers />} /> #???
        <Route path="*" element={<NotFound />} />
        {/* batata frita */}
      </Routes>
    </div>
  );
};

export default App;