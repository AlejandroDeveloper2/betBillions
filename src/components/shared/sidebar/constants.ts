import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { BiSolidMessageDetail, BiSolidHelpCircle } from "react-icons/bi";

import { MenuItem } from "../../../types";
import { Notification3DICon } from "../../../assets";

const getSidebarMenuItems = (closeSession: () => void): MenuItem[] => [
  {
    label: "Configuración",
    icon: IoMdSettings,
    title: "Configuración de cuenta",
    to: "#",
  },
  {
    label: "Soporte",
    icon: BiSolidMessageDetail,
    title: "Soporte para el usuario",
    to: "#",
  },
  {
    label: "Ayuda",
    icon: BiSolidHelpCircle,
    title: "Ayuda",
    to: "#",
  },
  {
    label: "Salir",
    icon: IoLogOutSharp,
    title: "Cerrar sesión",
    to: "#",
    onClick: () => closeSession(),
  },
  {
    label: "Notificaciones",
    icon: Notification3DICon,
    title: "Notificaciones del sistema",
    to: "#",
  },
];

export { getSidebarMenuItems };
