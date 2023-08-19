import { Route, Routes } from "react-router-dom";
import CodeGen from "./pages/CodeGen";

/** main app */
export default function App(): JSX.Element {
 
  return (
    <>
      <Routes>
        <Route path="/" index element={<CodeGen />} />
      </Routes>
    </>
  );
}
