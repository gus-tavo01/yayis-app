import { useSelector } from "react-redux";

const useConfiguration = () => {
  const { user } = useSelector((store) => store.auth);
  const appConfig = useSelector((store) => store.configuration);

  return user?.configuration || appConfig;
};

export default useConfiguration;
