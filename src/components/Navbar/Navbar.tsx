import { Fragment, useState } from "react";
import Logo from "/src/assets/images/logo.png";
import MenuIcon from "/src/assets/icons/menu.svg";
import CloseMenuIcon from "/src/assets/icons/close_menu.svg";
import NavBarLink from "./NavBarLink/NavBarLink";
import CustomBtn from "../CustomBtn/CustomBtn";
import MobileNav from "./MobileNav/MobileNav";
import {
  FOR_COMPANIES,
  FOR_ENGINEERS,
  ENTERPRISE,
  LOGIN,
  SIGN_UP
} from "../../routes/ROUTE_CONSTANT";

interface IMenuProps {
  handleToggle: () => void;
}

const routes = [
  {
    id: 1,
    path: FOR_COMPANIES,
    title: "for companies"
  },
  {
    id: 2,
    path: FOR_ENGINEERS,
    title: "for engineers"
  },
  {
    id: 3,
    path: ENTERPRISE,
    title: "enterprise"
  },
  {
    id: 4,
    path: LOGIN,
    title: "log in"
  }
];

const Menu = ({ handleToggle }: IMenuProps) => {
  return (
    <div className="lg:hidden flex w-[48px] h-[48px]" onClick={handleToggle}>
      <img src={MenuIcon} alt="menu-icon" className="w-full h-full" />
    </div>
  );
};

const CloseMenu = ({ handleToggle }: IMenuProps) => {
  return (
    <div
      className="lg:hidden flex w-[20.22px] h-[17.91px]"
      onClick={handleToggle}
    >
      <img src={CloseMenuIcon} alt="close-icon" />
    </div>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
    setToggleMenu(!toggleMenu);
  };

  return (
    <Fragment>
      <nav
        className={`${
          toggleMenu ? "bg-light-gray" : "bg-white"
        } relative md:bg-white overflow-hidden px-5 md:px-16 md:py-4 w-full h-[96px] flex space-x-3 justify-between items-center md:items-start`}
      >
        <div className="w-[136.16px] md:w-[252px]">
          <img src={Logo} alt="devstack-logo" className="w-full h-full" />
        </div>

        <div className="hidden lg:flex space-x-12">
          {routes.map(({ id, path, title }) => (
            <NavBarLink
              key={id}
              path={path}
              title={title}
              className="capitalize whitespace-nowrap"
              activeClassName="font-bold"
            />
          ))}

          <NavBarLink
            path={SIGN_UP}
            title="sign up"
            className="capitalize border border-blue text-blue font-semibold rounded-lg py-1 px-6 whitespace-nowrap"
            activeClassName="font-bold"
          />
        </div>

        <div className={`lg:hidden ${toggleMenu ? "hidden" : ""}`}>
          <CustomBtn className="bg-green py-2 px-5 text-blue text-lg rounded-md whitespace-nowrap">
            Sign In
          </CustomBtn>
        </div>

        {toggleMenu ? (
          <Menu handleToggle={handleToggle} />
        ) : (
          <CloseMenu handleToggle={handleToggle} />
        )}
      </nav>

      {/* Mobile Nav */}
      <nav className="lg:hidden absolute w-full bg-white">
        <div
          className={`${toggleMenu ? "hidden" : ""} z-10 shadow-lg`}
        >
          <MobileNav show={show} />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
