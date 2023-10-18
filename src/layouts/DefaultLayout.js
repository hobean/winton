import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer style={{ height: "300px", backgroundColor: "red" }}>
        footer
      </footer>
    </div>
  );
};

export default DefaultLayout;
