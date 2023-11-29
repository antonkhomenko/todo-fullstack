import Header from "/src/components/header";
import Hero from "/src/components/hero";
import Footer from "/src/components/footer";
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div className="flex-auto">
        <Outlet/> 
      </div>
      <Footer />
    </div>
  );
}

export default Root;
