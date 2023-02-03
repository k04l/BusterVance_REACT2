import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import CampsiteDetailPage from './pages/CampsiteDetailPage';
// import AboutPage from './pages/AboutPage';
// import CampsitesDirectoryPage from './pages/CampsiteDirectoryPage';
import {HomePage, ContactPage, BuildItemDetailPage, AboutPage, BuildItemsDirectoryPage} from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
// import { fetchPartners } from './features/partners/partnerSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchBuildItems } from './features/buildItems/buildItemsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPromotions());
    dispatch(fetchBuildItems());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<BuildItemsDirectoryPage />} />
        <Route path='directory/:builditemId' element={<BuildItemDetailPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
