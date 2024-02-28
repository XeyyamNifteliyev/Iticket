import Menu from "./Components/Menu/Index";
import Slider from "./Components/Slider/Index";
import Footer from "./Components/Footer/Index";
import Menular from "./Components/Menular2/index";
import Haqqimizda from "./Components/Haqqimizda/Index";
import Form from "./Components/Form/Index";
import OpenCard from "./Components/OpenCard/OpenCard";
import ResponsiveSlider from "./Components/ResponsiveSlider/Index";
import Banner from "./Components/Banner/Banner";
import ResponsiveSlider2 from "./Components/ResponsiveSlider2/Index";
import ResponsiveSlider3 from "./Components/ResponsiveSlider3/Index";
import ResponsiveSlider4 from "./Components/ResponsiveSlider4/Index";
import ResponsiveSlider5 from "./Components/ResponsiveSlider5/Index";
import ResponsiveSlider6 from "./Components/ResponsiveSlider6/Index";
import ResponsiveSlider7 from "./Components/ResponsiveSlider7/Index";
import Banner2 from "./Components/Banner2/Banner";
import Banner3 from "./Components/Banner3/Banner";
import BottomBanner from "./Components/BottomBanner/Banner";
import { Route, Routes, Outlet } from "react-router-dom";
import Menular2 from "./Components/Menular2";
import AddCart from './Components/AddCart/Index'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<MainLayoutWithAddCart />} />
        <Route path="form" element={<Form />} />
        <Route path="menular2" element={<Menular />} />
        <Route path="haqqimizda" element={<Haqqimizda />} />
        <Route path="opencard/:id" element={<OpenCard />} />
        <Route path=":id" element={<Menular2 />} />
      </Route>
    </Routes>
  );
};

const MainLayoutWithAddCart = () => {
  return (
    <>
      <AddCart />{/* AddCart bileşeni her sayfada gözükecek */}
     <MainLayout/>
    </>
  );
};

const MainLayout = () => {
  return (
    <>
      <Slider />
      <ResponsiveSlider />
      <Banner />
      <ResponsiveSlider2 />
      <Banner2 />
      <ResponsiveSlider7 />
      <Banner3 />
      
      <ResponsiveSlider4 />
      <ResponsiveSlider5 />
      <ResponsiveSlider6 />
      <BottomBanner />
      <Footer />
    </>
  );
};

export default App;