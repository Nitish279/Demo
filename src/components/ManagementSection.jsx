import React from "react";
import { View, Heading, Content } from "@adobe/react-spectrum";
import Document from "@spectrum-icons/workflow/Document";
import GraphBarVertical from "@spectrum-icons/workflow/GraphBarVertical"; // Adjusting to a valid icon name
import Folder from "@spectrum-icons/workflow/Folder";
// import Database from "@spectrum-icons/workflow/Database";
import User from "@spectrum-icons/workflow/User";
import Key from "@spectrum-icons/workflow/Key";
import "./ManagementSection.css";

const icons = {
  Templates: <Document />,
  Jobs: <GraphBarVertical />, // Adjusting to a valid icon name
  Inventories: <Folder />,
  Repos: <Folder />,
  Users: <User />,
  Keys: <Key />,
};

const ManagementSection = ({ title, description }) => {
  return (
    <View
      className="management-section"
      borderWidth="thin"
      borderColor="default"
      borderRadius="medium"
      padding="size-200"
    >
      <View marginBottom="size-100">{icons[title]}</View>
      <Heading level={3}>{title}</Heading>
      <Content>{description}</Content>
    </View>
  );
};

export default ManagementSection;
