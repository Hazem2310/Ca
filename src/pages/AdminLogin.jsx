import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (password === "123456") {
      localStorage.setItem("casablanca_is_admin", "true");
      navigate("/admin");
    } else {
      alert("كلمة السر غلط");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <h1>دخول الإدارة</h1>
        <p>CASABLANCA ADMIN</p>
        <input type="password" placeholder="كلمة السر" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && login()} />
        <button onClick={login}>دخول</button>
      </div>
    </div>
  );
}

export default AdminLogin;
