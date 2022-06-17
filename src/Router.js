import { Route, Routes } from "react-router-dom";
import Q1 from "./20-mar-2022/Q1";
import Q2 from "./20-mar-2022/Q2";
import NP3twoQ1 from "./22-mar-2022/NP3twoQ1";
import NP3twoQ2 from "./22-mar-2022/NP3twoQ2";
import NP3twoQ3 from "./22-mar-2022/NP3twoQ3";
import NP3threeQ1 from "./23-mar-2022/NP3threeQ1";
import NP3threeQ2Q3 from "./23-mar-2022/NP3threeQ2Q3";
import NP3fourQ1 from "./24-mar-2022/NP3fourQ1";
import NP3fourQ2Q3 from "./24-mar-2022/NP3fourQ2";
import NP3fiveQ1 from "./25-mar-2022/NP3fiveQ1";
import NP3fiveQ2 from "./25-mar-2022/NP3fiveQ2";
import NP3sixQ1 from "./26-mar-2022/NP3sixQ1";
import NP3sixQ2 from "./26-mar-2022/NP3sixQ2";

export default function Router() {
  return (
    <Routes>
      <Route path="/np3-1/q1" element={<Q1 />} />
      <Route path="/np3-1/q2" element={<Q2 />} />
      <Route path="/np3-2/q1" element={<NP3twoQ1 />} />
      <Route path="/np3-2/q2" element={<NP3twoQ2 />} />
      <Route path="/np3-2/q3" element={<NP3twoQ3 />} />
      <Route path="/np3-3/q1" element={<NP3threeQ1 />} />
      <Route path="/np3-3/q2" element={<NP3threeQ2Q3 />} />
      <Route path="/np3-4/q1" element={<NP3fourQ1 />} />
      <Route path="/np3-4/q2" element={<NP3fourQ2Q3 />} />
      <Route path="/np3-5/q1" element={<NP3fiveQ1 />} />
      <Route path="/np3-5/q2" element={<NP3fiveQ2 />} />
      <Route path="/np3-6/q1" element={<NP3sixQ1 />} />
      <Route path="/np3-6/q2" element={<NP3sixQ2 />} />
    </Routes>
  );
}
