import { Route, Routes } from "react-router-dom";
import Q1 from "./20-mar-2022/Q1";
import Q2 from "./20-mar-2022/Q2";

export default function Router() {
  return (
    <Routes>
      <Route path="/np3-1/q1" element={<Q1 />} />
      <Route path="/np3-1/q2" element={<Q2 />} />
    </Routes>
  );
}
