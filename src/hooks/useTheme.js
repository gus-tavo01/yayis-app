import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.configuration.theme);

  // TODO
  // pending functionality

  useEffect(() => {
    dispatch();
  }, [dispatch, theme]);
};

export default useTheme;
