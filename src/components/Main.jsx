import React from "react";
import Selector from "../components/Selector";
import ClearButton from "../components/ClearButton";
import ManagementSection from "../components/ManagementSection";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="selectors">
        <Selector label="Select Repository" />
        <Selector label="Select Inventory" />
      </div>
      <ClearButton />
      <div className="management-sections">
        <ManagementSection title="Templates" description="Manage & Launch" />
        <ManagementSection title="Jobs" description="View jobs that have run" />
        <ManagementSection
          title="Inventories"
          description="Manage Inventories"
        />
        <ManagementSection title="Repos" description="Manage Repositories" />
        <ManagementSection title="Users" description="Manage Users" />
        <ManagementSection title="Keys" description="Manage Keys" />
      </div>
    </main>
  );
};

export default Main;
