import { ComponentType, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const withAuth = <P extends object>(
  Component: ComponentType<P>,
  redirectPath: string
) => {
  return (props: P) => {
    const navigate = useNavigate();

    //권한
    // const auth = localStorage.getItem("auth");
    const auth = true;

    // 권한 변경 감지
    useEffect(() => {
      if (!auth) {
        navigate(redirectPath);
      }
    }, [auth, navigate]);

    // 권한이 있을 경우에 arg의 Component 리턴 false일땐 null 반환
    return auth ? <Component {...props} /> : null;
  };
};
