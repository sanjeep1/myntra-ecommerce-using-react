import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
