import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdDashboard, MdGames } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { BiSolidMessageDetail, BiSolidHelpCircle } from "react-icons/bi";

import { MenuItem } from "../../types";

const getMenuItems = (closeSession: () => void): MenuItem[] => [
  {
    label: "Inicio",
    icon: MdDashboard,
    title: "Panel principal",
    to: "/userPanel",
  },
  {
    label: "Billetera",
    icon: GiWallet,
    title: "Mi billetera",
    to: "#",
  },
  {
    label: "Sorteos",
    icon: MdGames,
    title: "Ver sorteos disponibles",
    to: "#",
  },
  {
    label: "Configuración",
    icon: IoMdSettings,
    title: "Configuración de cuenta",
    to: "#",
  },
  {
    label: "Notificaciones",
    icon: IoMdNotifications,
    title: "Notificaciones del sistema",
    to: "#",
  },
  {
    label: "Soporte",
    icon: BiSolidMessageDetail,
    title: "Soporte para el usuario",
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
    label: "Ayuda",
    icon: BiSolidHelpCircle,
    title: "Ayuda",
    to: "#",
  },
];

export { getMenuItems };
