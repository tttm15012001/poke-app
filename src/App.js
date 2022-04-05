import './App.css';
import { Route, Routes } from "react-router-dom";
import Search from './bt_30-3-22/search';
import ViewDetail from './bt_30-3-22/detail/detail';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Search />} />
      <Route path="/detail/:name" element={<ViewDetail />} />
    </Routes>
  );
}

export default App;
