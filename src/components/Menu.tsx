import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";

const navLinks = [
  {
    name: "Dashboard",
    url: "/dashboard",
    iconURL: "/tile.svg",
  },
  {
    name: "Data Room",
    url: "/dashboard/data-room",
    iconURL: "/file-text.svg",
  },
  {
    name: "Deal Funds",
    url: "/deal-funds",
    iconURL: "/files.svg",
  },
  {
    name: "Transactions",
    url: "/dashboard/transactions",
    iconURL: "/arrow-up-down.svg",
  },
  {
    name: "My Wallet",
    url: "/dashboard/my-wallet",
    iconURL: "/wallet.svg",
  },
  {
    name: "Members",
    url: "/dashboard/members",
    iconURL: "/members.svg",
  },
];

const Logout = () => {
  return (
    <div className="fixed bottom-6 w-70 px-6 py-4 flex flex-col justify-center rounded-3xl bg-dark-500">
      <Image
        className="m-auto mt-4"
        src={"logo.svg"}
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
  iconURL,
  name,
}: {
  active: boolean;
  href: string;
  iconURL: string;
  name: string;
}) => {
  return (
    <li
      className={`mb-2 hover:transition ease-in-out rounded-lg ${
        active && "bg-dark-500 text-white"
      } hover:bg-dark-500 hover:text-white`}
    >
      <Link className="flex px-5 py-3" href={href}>
        <Image
          src={iconURL}
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
            iconURL={link.iconURL}
            active={router.asPath === `${link.url}`}
          />
        ))}
      </ul>
      <Logout />
    </div>
  );
};

export default Menu;
