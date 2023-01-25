import { Transition } from "@headlessui/react";
import NavLink from "../NavBarLink/NavBarLink";
import {
  FOR_COMPANIES,
  FOR_ENGINEERS,
  ENTERPRISE,
  LEARNING_COMMUNITY,
  LEADERSHIP_PROGRAM,
  RESOURCES,
  EVENTS,
  BLOG,
  PRESS_CENTER,
  ABOUT_DEVSTACK,
  CAREERS
} from "../../../routes/ROUTE_CONSTANT";

const MobileNav = ({ show }: { show: boolean }) => {
  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-2000"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transform transition ease-in-out duration-2000"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-full"
    >
      <div className="w-full h-full px-5 py-8 flex flex-col space-y-10">
        {/* Hire Talent */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-green text-sm font-semibold uppercase">
            hire talent
          </h1>

          <NavLink
            path={FOR_COMPANIES}
            title="for companies"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={ENTERPRISE}
            title="enterprise"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <hr className="rounded-[1px] border border-light-gray" />
        </div>

        {/* Join Devstack */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-green text-sm font-semibold uppercase">
            join devstack
          </h1>

          <NavLink
            path={FOR_ENGINEERS}
            title="for engineers"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={LEARNING_COMMUNITY}
            title="learning community"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={LEADERSHIP_PROGRAM}
            title="technical leadership program (Rwanda)"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <hr className="rounded-[1px] border border-light-gray" />
        </div>

        {/* About Us */}
        <div className="flex flex-col space-y-5">
          <h1 className="text-green text-sm font-semibold uppercase">
            about us
          </h1>

          <NavLink
            path={RESOURCES}
            title="resources"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={EVENTS}
            title="events"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={BLOG}
            title="blog"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={PRESS_CENTER}
            title="press center"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={ABOUT_DEVSTACK}
            title="about devstack"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />

          <NavLink
            path={CAREERS}
            title="careers"
            className="capitalize text-gray"
            activeClassName="rounded-md py-2 px-2 bg-light-gray font-bold"
          />
        </div>
      </div>
    </Transition>
  );
};

export default MobileNav;
