import React from "react";
import { Toaster } from "react-hot-toast";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import styles from "./styles/modules/app.module.scss";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <div className="container">
        <PageTitle>TASK Management App</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <Dashboard />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
};

export default App;
