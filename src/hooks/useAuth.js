import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((store) => store.auth);
  return auth;
};

export default useAuth;
