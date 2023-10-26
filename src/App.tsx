import React, { lazy, Suspense } from "react";
import "./App.css";
import data from "./data/tabs.json";
import { Tab } from "./types/tab";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const DummyTable = lazy(() => import("./components/DummyTable"));
const DummyChart = lazy(() => import("./components/DummyChart"));
const DummyList = lazy(() => import("./components/DummyList"));

function App() {
  const [tabs, setTabs] = React.useState<Tab[]>([]);

  React.useEffect(() => {
    setTabs(data);
  }, []);

  return (
    <article>
      <h2 className="my-5 flex justify-center text-2xl">CMS App</h2>
      <nav className="mb-3 flex justify-center">
        <ul className="mb-20 w-96 flex justify-between">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link to={`/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Suspense fallback={<h1 className="text-center text-2xl text-orange-300">Loading...</h1>}>
        <Routes>
          {/* After deploying the app, the base path changed to cms-app-routing/, so I changed the normal / to cms-app-routing/*/}
          <Route path="/" element={<Navigate to="/dummyTable" />} />
          <Route path="/dummyTable" Component={DummyTable} />
          <Route path="/dummyChart" Component={DummyChart} />
          <Route path="/dummyList" Component={DummyList} />
          <Route path="*" element={<h1 className="text-center text-2xl text-cyan-300">Not found</h1>} />
        </Routes>
      </Suspense>
    </article>
  );
}

export default App;
