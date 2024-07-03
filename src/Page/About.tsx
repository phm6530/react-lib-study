type Aboutprops = {
  title: string;
};

const About: React.FC<Aboutprops> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default About;
