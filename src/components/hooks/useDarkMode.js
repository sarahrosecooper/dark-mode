import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues) => {
  const [value, setValue] = useLocalStorage(key, initialValues);

  return [value, setValue];
};
