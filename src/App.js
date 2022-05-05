import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Books from './components/Books';
import Categories from './components/Categories';
import NoPage from './components/NoPage';

import './index.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
