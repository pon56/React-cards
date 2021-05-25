import { Header } from "../atoms/layout/Header";
import { BrowserRouter } from "react-router-dom";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <BrowserRouter>
      <Header />
      {children}
    </BrowserRouter>
  );
};
