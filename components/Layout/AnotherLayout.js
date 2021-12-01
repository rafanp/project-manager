import Header from "@/components/Modules/Header";
import Navigation from "@/components/Modules/Navigation";

const AnotherLayout = (props) => {
  const { children } = props;
  return (
    <>
      {/* <Header /> */}
      <div>
        <Navigation />
        <main>{children}</main>
      </div>
      <h2>Another Layout</h2>
    </>
  );
};

export default AnotherLayout;
