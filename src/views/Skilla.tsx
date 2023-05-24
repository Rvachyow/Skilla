import { Layout } from "../components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Call } from "../pages/Call/Call";

export const Skilla = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/call" element={<Call />} />
      </Routes>
    </Layout>
  );
};
