import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

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
