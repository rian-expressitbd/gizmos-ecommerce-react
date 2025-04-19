import Dashboard from "@/pages/dashboard/DashboardPage";
import React from "react";
import { IconType } from "react-icons";
import { FaQuestionCircle, FaTachometerAlt } from "react-icons/fa";
import { IoIosImages, IoIosVideocam } from "react-icons/io";
import { MdOutlinePermMedia } from "react-icons/md";

export interface NavSubItem {
  title: string;
  path: string;
  icon?: IconType;
  element?: React.ElementType;
}

export interface NavGroup {
  title: string;
  path: string;
  icon?: IconType;
  element?: React.ElementType;
  submenu?: NavSubItem[];
}

export const menuItems: NavGroup[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: FaTachometerAlt,
    element: Dashboard,
  },

  {
    title: "Media",
    path: "/media",
    icon: MdOutlinePermMedia,
    submenu: [
      {
        title: "Images",
        path: "/media/images",
        icon: IoIosImages,
      },
      {
        title: "Videos",
        path: "/media/videos",
        icon: IoIosVideocam,
      },
    ],
  },
  {
    title: "UI-Components",
    path: "/ui-components",
    icon: FaQuestionCircle,
    submenu: [
      {
        path: "/button-kit",
        title: "Button Kit",
      },
      {
        path: "/button-kit-one",
        title: "Button Kit One",
      },
      {
        path: "/button-group",
        title: "Button Group",
      },
      {
        path: "/accordions",
        title: "Accordions",
      },
      {
        path: "/action-btn",
        title: "Actions Button",
      },
      {
        path: "/back-btn",
        title: "Back Button",
      },
      {
        path: "/badges",
        title: "Badges",
      },
      {
        path: "/breadcrumb",
        title: "Breadcrumb",
      },
      {
        path: "/dropdown",
        title: "Dropdown",
      },
      {
        path: "/filters",
        title: "Filters",
      },
      {
        path: "/icons",
        title: "Icons",
      },
      {
        path: "/image",
        title: "Images",
      },
      {
        path: "/loading-spinners",
        title: "Loading Spinners",
      },
      {
        path: "/modals",
        title: "Modals",
      },
      {
        path: "/pagination",
        title: "Pagination",
      },
      {
        path: "/radio",
        title: "Radio Button",
      },
      {
        path: "/search",
        title: "Search",
      },
      {
        path: "/table",
        title: "Table",
      },
      {
        path: "/toggle-switches",
        title: "Toggle Switches",
      },
      {
        path: "/tooltips",
        title: "Tooltips",
      },
      {
        path: "/truncated-text",
        title: "Truncated Text",
      },
      {
        path: "/video-player",
        title: "Video Player",
      },

      {
        path: "/loading-spinner-kit",
        title: "Loading Spinner Kit",
      },
      {
        path: "/select-kit",
        title: "Select Kit",
      },
      {
        path: "/calendar-kit",
        title: "Calendar Kit",
      },
    ],
  },
];
