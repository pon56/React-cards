import { Header } from "../atoms/layout/Header";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Header />
      {children}
      <Footer />
    </BrowserRouter>
  );
};
