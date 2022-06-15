import { Route, Routes } from "react-router-dom";
import Q1 from "./20-mar-2022/Q1";
import Q2 from "./20-mar-2022/Q2";
import NP3twoQ1 from "./22-mar-2022/NP3twoQ1";
import NP3twoQ2 from "./22-mar-2022/NP3twoQ2";
import NP3twoQ3 from "./22-mar-2022/NP3twoQ3";

export default function Router() {
  return (
    <Routes>
      <Route path="/np3-1/q1" element={<Q1 />} />
      <Route path="/np3-1/q2" element={<Q2 />} />
      <Route path="/np3-2/q1" element={<NP3twoQ1 />} />
      <Route path="/np3-2/q2" element={<NP3twoQ2 />} />
      <Route path="/np3-2/q3" element={<NP3twoQ3 />} />
    </Routes>
  );
}
