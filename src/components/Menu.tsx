import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";

import DashboardWhite from "@/images/layout/menu/dashboard-white.svg";
import DashboardBlack from "@/images/layout/menu/dashboard-black.svg";

import BeneficiaryWhite from "@/images/layout/menu/beneficiary-white.svg";
import BeneficiaryBlack from "@/images/layout/menu/beneficiary-black.svg";

import AccountWhite from "@/images/layout/menu/account-white.svg";
import AccountBlack from "@/images/layout/menu/account-black.svg";
import { useState } from "react";

const navLinks = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: DashboardBlack,
    activeIcon: DashboardWhite,
  },
  {
    name: "Beneficiaries",
    url: "/beneficiaries",
    icon: BeneficiaryWhite,
    activeIcon: BeneficiaryBlack,
  },
  {
    name: "My Account",
    url: "/account",
    icon: AccountBlack,
    activeIcon: AccountWhite,
  },
];

const Logout = () => {
  return (
    <div className="bottom-6 px-6 py-4 flex flex-col justify-center rounded-3xl bg-dark-500">
      <Image
        className="m-auto mt-4"
        src="/logo.svg"
        width={24}
        height={24}
        alt="logo"
      />
      <span className="my-6 text-white text-center text-lg">
        Operating system for merchants and funders.
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
  const [hovering, setHovering] = useState(false);

  const shouldShowActive = hovering || active;
  const displayIcon = shouldShowActive ? activeIcon : icon;

  return (
    <li
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseOut={() => setHovering(false)}
      className={`mb-2 hover:transition ease-in-out rounded-xl ${
        active && "bg-dark-500 text-white"
      } hover:bg-dark-500 hover:text-white`}
    >
      <Link className="flex px-5 py-3 gap-4" href={href}>
        <Image
          src={displayIcon}
          className="mr-2"
          alt={name}
          width={20}
          height={20}
        />
        {name}
      </Link>
    </li>
  );
};

const Menu = () => {
  const router = useRouter();

  return (
    <div className="bg-white relative h-screen p-6 md:col-span-1 w-72 shadow-sm flex flex-col justify-between">
      <Link href="/" className="text-2xl font-bold font-primary">
        Brydge
      </Link>
      <ul className="mt-6 mb-auto">
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
