import { useDispatch } from "react-redux";
import { openAlert } from "../redux/slices/alerts";

const useToast = () => {
  const dispatch = useDispatch();

  const success = (message) => {
    dispatch(openAlert({ severity: "success", message }));
  };

  const info = (message) => {
    dispatch(openAlert({ severity: "info", message }));
  };

  const warning = (message) => {
    dispatch(openAlert({ severity: "warning", message }));
  };

  const error = (message) => {
    dispatch(openAlert({ severity: "error", message }));
  };

  return { success, info, warning, error };
};

export default useToast;
