import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import Components
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import DecorThemes from './DecorThemes';
import FloralDesigns from './FloralDesigns';
import MandapDecoration from './MandapDecoration';
import BudgetPlanner from './BudgetPlanner';
import GuestListManager from './GuestListManager';
import Photographers from './Photographers';
import Caterers from './Caterers';
import MusicDJ from './MusicDJ';
import WeddingVenues from './WeddingVenues';
import BridalDresses from './BridalDresses';
import MakeupArtists from './MakeupArtists';
import JewelryAccessories from './JewelryAccessories';
import GroomOutfits from './GroomOutfits';
import WeddingAccessories from './WeddingAccessories';
import LatestTrends from './LatestTrends';
import WeddingStories from './WeddingStories';
import EventPlanner from './EventPlanner';

const App = () => (
  // ⭐ IMPORTANT: Add the basename prop here! ⭐
  <Router basename="/Eventplanner">
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* ⭐ Ensure this path exactly matches the one in Header's menuItems ⭐ */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/decor-themes" element={<DecorThemes />} />
          <Route path="/floral-designs" element={<FloralDesigns />} />
          <Route path="/mandap-decor" element={<MandapDecoration />} />
          <Route path="/planning-tools/budget-planner" element={<BudgetPlanner />} />
          <Route path="/planning-tools/guest-list-manager" element={<GuestListManager />} />
          <Route path="/wedding-vendors/photographers" element={<Photographers />} />
          <Route path="/wedding-vendors/caterers" element={<Caterers />} />
          <Route path="/wedding-vendors/music-dj" element={<MusicDJ />} />
          <Route path="/wedding-vendors/venues" element={<WeddingVenues />} />
          <Route path="/brides/bridal-dresses" element={<BridalDresses />} />
          <Route path="/brides/makeup-artists" element={<MakeupArtists />} />
          <Route path="/brides/jewelry" element={<JewelryAccessories />} />
          <Route path="/grooms/groom-outfits" element={<GroomOutfits />} />
          <Route path="/grooms/wedding-accessories" element={<WeddingAccessories />} />
          <Route path="/blogs/latest-trends" element={<LatestTrends />} />
          <Route path="/blogs/wedding-stories" element={<WeddingStories />} />
          <Route path="/eventplanner" element={<EventPlanner />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;