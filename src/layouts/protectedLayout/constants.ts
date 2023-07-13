import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdDashboard, MdGames } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { BiSolidMessageDetail, BiSolidHelpCircle } from "react-icons/bi";
import { AiOutlineTeam, AiOutlineTransaction } from "react-icons/ai";

import { MenuItem } from "types";

const getMenuItems = (
  closeSession: () => void,
  userRole: "ROLE_USER" | "ROLE_ADMIN"
): MenuItem[] => {
  if (userRole === "ROLE_USER")
    return [
      {
        label: "Inicio",
        icon: MdDashboard,
        title: "Panel principal",
        to: "/userPanel",
      },
      {
        label: "Mi equipo",
        icon: AiOutlineTeam,
        title: "Mi equipo de referidos",
        to: "/userPanel/myTeam",
      },
      {
        label: "Transacciones",
        icon: AiOutlineTransaction,
        title: "Mis transacciones",
        to: "/userPanel/transactions",
      },
      {
        label: "Billetera",
        icon: GiWallet,
        title: "Mi billetera",
        to: "/userPanel/myWallet",
      },
      {
        label: "Sorteos",
        icon: MdGames,
        title: "Ver sorteos disponibles",
        to: "/userPanel/lottery",
      },
      {
        label: "Configuración",
        icon: IoMdSettings,
        title: "Configuración de cuenta",
        to: "/userPanel/settings/myProfile",
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
  return [
    {
      label: "Transacciones",
      icon: AiOutlineTransaction,
      title: "Ver transacciones",
      to: "/admin",
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
      label: "Salir",
      icon: IoLogOutSharp,
      title: "Cerrar sesión",
      to: "#",
      onClick: () => closeSession(),
    },
  ];
};

export { getMenuItems };
