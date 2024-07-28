import { Aboutprops } from "@/Type/type";
import className from "./Homepage.module.scss";

const HomePage: React.FC<Aboutprops> = ({ title }) => {
  return (
    <>
      <h1 className={className.h1}>{title}</h1>
      <div className={className.h2}>asf</div>
    </>
  );
};

export default HomePage;
