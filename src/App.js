import { Route, Routes } from "react-router-dom";
import { Home, Login, Public } from "./containers/public";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/*" element={<Public />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
