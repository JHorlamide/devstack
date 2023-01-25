import Navbar from "../../components/Navbar/Navbar";
import NavBarLink from "../../components/Navbar/NavBarLink/NavBarLink";
import GroupedDevMobile from "../../assets/images/devs_grouped.png";
import GroupDevDeskTop from "../../assets/images/grouped_devs.png";

const Home = () => {
  return (
    <section>
      <Navbar />
      {/* flex justify-center items-center md:mx-20 */}
      <div className="container mx-auto flex justify-center mt-36 md:mt-0 bg-heroBg bg-center object-cover w-full">
        <div
          className="flex flex-col justify-center items-center space-y-5 px-6 pt-10 
          md:grid md:grid-cols-12 md:space-y-0 md:pt-16 md:px-0 md:items-start"
        >
          <div className="col-span-7 -mt-40 md:mt-0">
            <div className="flex flex-col space-y-10 md:space-y-16">
              <div className="">
                <h1 className="text-2xl font-bold text-blue text-center md:text-start md:text-3xl md:tracking-wider  md:max-w-lg">
                  Build remote engineering teams with the world’s top talent.
                </h1>
              </div>

              <div className="flex space-x-3 justify-center md:space-x-5 md:justify-start">
                <NavBarLink
                  activeClassName=""
                  path="/hire-talent"
                  title="hire talent"
                  className="capitalize bg-green rounded-md px-8 py-4 whitespace-nowrap"
                />

                <NavBarLink
                  activeClassName=""
                  path="/hire-talent"
                  title="join devStack"
                  className="capitalize bg-white border border-gray rounded-md px-8 py-4 whitespace-nowrap"
                />
              </div>
            </div>

            <div className="hidden md:flex space-x-10 pt-36 w-auto">
              <div className="">
                <h1 className="text-xl font-normal whitespace-nowrap">
                  Trusted by More than <br />
                  <span className="text-green">150,000</span> Companies
                </h1>
              </div>

              <div className="flex space-x-5">
                <div className="flex flex-col space-y-1">
                  <h1 className="font-bold text-xl">175,000+</h1>
                  <p className="text-[20px] text-gray">Software Engineers</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h1 className="font-bold text-xl">100+</h1>
                  <p className="text-[20px] text-gray">Technical Skills</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <h1 className="font-bold text-xl">90+</h1>
                  <p className="text-[20px] text-gray">Countries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 hidden md:block lg:w-full lg:h-full">
            <img
              src={GroupDevDeskTop}
              alt="grouped-dev-img"
              className="bg-center object-contain w-full h-full"
            />
          </div>

          {/* Mobile View For Professional */}
          <div className="md:hidden pt-16 md:pt-0">
            <img
              src={GroupedDevMobile}
              alt="grouped-dev-img"
              className="bg-center bg-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
