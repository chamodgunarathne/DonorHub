import { twMerge } from "tailwind-merge";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer";

const Main = (props) => {
  return (
    <div>
      <Navbar className="fixed top-0 left-0 right-0 z-10" />
      <div className="h-[50px]"></div>
      <div
        className={twMerge([
          "content transform duration-500 ease-in-out",
          props.className,
        ])}
      >
        {props.children}
        {props.footer && (
          <div className="-mx-5 -mb-5 mt-10">
            <Footer  className=" left-0 right-0"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
