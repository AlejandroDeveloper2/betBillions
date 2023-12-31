import { IoMdNotifications, IoMdSettings } from "react-icons/io";
import { MdDashboard, MdGames } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import {
  BiSolidMessageDetail,
  BiSolidHelpCircle,
  BiMoneyWithdraw,
} from "react-icons/bi";
import { AiOutlineTeam, AiOutlineTransaction } from "react-icons/ai";
import { PiUsersFourFill } from "react-icons/pi";

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
        to: "/userPanel/notifications",
      },
      {
        label: "Soporte",
        icon: BiSolidMessageDetail,
        title: "Soporte para el usuario",
        to: "/userPanel/support",
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
      label: "Usuarios",
      icon: PiUsersFourFill,
      title: "Ver listado de usuarios",
      to: "/admin/users",
    },
    {
      label: "Transacciones",
      icon: AiOutlineTransaction,
      title: "Ver transacciones",
      to: "/admin",
    },
    {
      label: "Soporte",
      icon: BiSolidMessageDetail,
      title: "Ver solicitudes de soporte",
      to: "/admin/support/list",
    },
    {
      label: "Configuración",
      icon: IoMdSettings,
      title: "Configuración de cuenta",
      to: "/admin/settings/myProfile",
    },
    {
      label: "Sorteos",
      icon: MdGames,
      title: "Ver sorteos programados",
      to: "/admin/lottery",
    },
    {
      label: "Solicitudes de retiro",
      icon: BiMoneyWithdraw,
      title: "Ver solicitudes de retiro",
      to: "/admin/withdraws/requests",
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
