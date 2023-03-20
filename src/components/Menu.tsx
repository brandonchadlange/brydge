import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";

import DashboardWhite from "@/images/layout/menu/dashboard-white.svg";
import DashboardBlack from "@/images/layout/menu/dashboard-black.svg";

import WalletBlack from "@/images/layout/menu/wallet-black.svg";
import WalletWhite from "@/images/layout/menu/wallet-white.svg";

const navLinks = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
  {
    name: "Deals Room",
    url: "/deals-room",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
  {
    name: "Data Room",
    url: "/dashboard/data-room",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
  {
    name: "Transactions",
    url: "/dashboard/transactions",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
  {
    name: "My Wallet",
    url: "/my-wallet",
    icon: DashboardBlack,
    activeIcon: WalletWhite,
  },
  {
    name: "Members",
    url: "/dashboard/members",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
];

const Logout = () => {
  return (
    <div className="fixed bottom-6 w-70 px-6 py-4 flex flex-col justify-center rounded-3xl bg-dark-500">
      <Image
        className="m-auto mt-4"
        src="/logo.svg"
        width={24}
        height={24}
        alt="logo"
      />
      <span className="my-6 text-white text-center text-sm">
        Simplifying Trade Finance in Africa
      </span>
      <button
        className="bg-white px-5 py-3 mb-2 text-dark-500 rounded-full font-primary"
        onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
      >
        Log out
      </button>
    </div>
  );
};

const MenuLink = ({
  active,
  href,
  icon,
  activeIcon,
  name,
}: {
  active: boolean;
  href: string;
  icon: any;
  activeIcon: any;
  name: string;
}) => {
  return (
    <li
      className={`mb-2 hover:transition ease-in-out rounded-lg ${
        active && "bg-dark-500 text-white"
      } hover:bg-dark-500 hover:text-white`}
    >
      <Link className="flex px-5 py-3" href={href}>
        {!active && (
          <Image
            src={icon}
            className="mr-2"
            alt={name}
            width={20}
            height={20}
          />
        )}
        {active && (
          <Image
            src={activeIcon}
            className="mr-2"
            alt={name}
            width={20}
            height={20}
          />
        )}
        {name}
      </Link>
    </li>
  );
};

const Menu = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen py-6 mx-auto md:col-span-1 w-72">
      <Link href="/" className="text-2xl font-bold font-primary">
        Brydge
      </Link>
      <ul className="mx-auto mt-6 mb-auto">
        {navLinks.map((link) => (
          <MenuLink
            key={link.name}
            name={link.name}
            href={link.url}
            icon={link.icon}
            activeIcon={link.activeIcon}
            active={router.asPath.includes(link.url)}
          />
        ))}
      </ul>
      <Logout />
    </div>
  );
};

export default Menu;
