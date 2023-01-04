import { Outlet } from "react-router-dom";
import * as S from "./Layout.style";

const Layout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default Layout;
