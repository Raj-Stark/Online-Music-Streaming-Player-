import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
  { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-4">
      <div className="text-3xl font-semibold text-white mb-16">Rj Music</div>
      {links.map((item, i) => {
        return (
          <NavLink
            key={item.name}
            to={item.to}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
            onClick={() => handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <NavLinks></NavLinks>
      </div>

      {/* ! Mobile Menu */}

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2
          "
            onClick={() => setMobileMenuOpen(false)}
          ></RiCloseLine>
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2
          "
            onClick={() => setMobileMenuOpen(true)}
          ></HiOutlineMenu>
        )}
      </div>
      <div
        className={`absolute px-5  top-0 h-screen w-2/3 bg-gradient-to-tl from-gray-900 to-[#000000] backdrop-blur-lg  z-10 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <NavLinks handleClick={() => setMobileMenuOpen(true)}></NavLinks>
      </div>
    </>
  );
};

export default Sidebar;
