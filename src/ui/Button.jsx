import { DoubleRightOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Button() {
  const navigate = useNavigate();

  function navigation() {
    navigate("/sign-up");
  }

  return (
    <div>
      <button onClick={navigation}>
        Sign up <DoubleRightOutlined className="icon" />
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
        Login <RightOutlined className="icon" />
      </button>
    </div>
  );
}
