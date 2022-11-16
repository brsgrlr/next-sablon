import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Menu />
      <main style={{ flex: 1 }}>{children}</main>
      <footer>coded by bsg</footer>
    </div>
  );
};
export default Layout;
