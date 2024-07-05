import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Header = styled.header`
  a {
    margin: 5px;
  }
`;

const GnbHeader = () => {
  const LINK_MENU = [
    {
      linkName: "Home",
      path: "/",
      auth: false,
    },
    {
      linkName: "About",
      path: "/about",
      auth: false,
    },
    {
      linkName: "ReactHookForm",
      path: "/reacthookform",
      auth: false,
    },
  ];

  return (
    <>
      <Header>
        {LINK_MENU.map((link, idx) => {
          return (
            <Link key={`idx-${idx}`} to={link.path}>
              {link.linkName}
            </Link>
          );
        })}
      </Header>

      {/* 서브도메인 Change */}
      <Outlet />
    </>
  );
};

export default GnbHeader;
