import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-4">{children}</main>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
