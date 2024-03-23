"use client";

import React, { useCallback, useRef, useState } from "react";
import Logo from "../assets/home/Logo.svg"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, BugAntIcon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { useLocation } from 'react-router-dom';
import { Menu } from './components/menu'

import{
  HeaderStyle,
  HeaderImg,
  NavbarEnd,
  MenuList,
  LogoContainer,
  NavbarStart,
} from './style';

// export const menuLinks: HeaderMenuLink[] = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Perfil",
//     href: "/perfil",
//   },
//   {
//     label: "Histórico",
//     href: "/historico",
//   },
//   {
//     label: "Transferência",
//     href: "/transferencia",
//   },
// ];

// interface HeaderMenuLink {
//   label: string;
//   href: string;
// }

// interface HeaderMenuLinksProps {
//   currentPath: string;
// }

// export const HeaderMenuLinks: React.FC<HeaderMenuLinksProps> = ({ currentPath }) => {
//   return (
//     <>
//       {menuLinks.map(({ label, href }) => {
//         const isActive = currentPath === href;
//         return (
//           <li key={href}>
//             <Link href={href}>
//               <a
//                 className={`${
//                   isActive ? "bg-secondary shadow-md" : ""
//                 } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
//               >
//                 <span>{label}</span>
//               </a>
//             </Link>
//           </li>
//         );
//       })}
//     </>
//   );
// };

// interface HeaderProps {
//   currentPath: string;
// }

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);

  // const router = useRouter();
  // const currentPath = router.pathname;


  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <HeaderStyle>
      <NavbarStart>
        <Link href="/" passHref>
          <LogoContainer>
            <Image alt="Logo Aluge Bem" src="./assets/home/Logo.svg" width={150} height={150} className="p-4"/>
          </LogoContainer>
        </Link>
        <Menu />
        {/* <MenuList>
          <HeaderMenuLinks currentPath={currentPath} />
        </MenuList> */}
      </NavbarStart>
      <NavbarEnd>
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </NavbarEnd>
    </HeaderStyle>
  );
};
