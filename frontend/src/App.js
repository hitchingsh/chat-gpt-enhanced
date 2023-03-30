import React, { Suspense } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { CircularProgress } from "@mui/material";
const Error404Page = React.lazy(() => import("./Pages/Error404Page"));
const StorePage = React.lazy(() => import("./Pages/StorePage"));

const firebaseConfig = {
  apiKey: "AIzaSyDny4CRo_gO83E9hqyfDiLVOnBFZgol55k",
  authDomain: "hitchingsh.github.io",
  projectId: "chat-gpt-enhanced-6cee0",
  storageBucket: "chat-gpt-enhanced2.appspot.com", 
  messagingSenderId: "658299656465", 
  appId: "1:869064780631:web:81faca4dc336a34935ac12", // TODO
  measurementId: "G-DQ3E8CRWE4",
  databaseURL: "https://chat-gpt-enhanced-default-rtdb.firebaseio.com/", // TODO
};

const app = initializeApp(firebaseConfig);
if (process.env.NODE_ENV !== "test") {
  const analytics = getAnalytics(app);
}
export const db = getDatabase(app);

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <CircularProgress
            style={{
              margin: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              color: "#b3befe",
            }}
          />
        }
      >
        <Routes>
          <Route path="/chat-gpt-enhanced/" element={<MainPage app={app} db={db} />} />

          <Route path="/store" element={<StorePage app={app} />} />

          <Route path="*" element={<Error404Page />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
