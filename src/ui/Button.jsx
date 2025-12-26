import { DoubleRightOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  function navigation() {
    navigate("/sign-in");
  }

  return (
    <div>
      <button onClick={navigation}>
        Sign in <RightOutlined className="icon" />
      </button>
    </div>
  );
}

export function LoginButton() {
  const navigate = useNavigate();

  function naviLoginPage() {
    navigate("/login");
  }

  return (
    <div>
      <button onClick={naviLoginPage}>
        Login <DoubleRightOutlined />
      </button>
    </div>
  );
}
