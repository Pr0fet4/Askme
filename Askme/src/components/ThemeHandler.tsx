import { useThemeContext } from "../contexts/ThemeContext";

import '../styles/themable.scss';

interface Props{
  children?: React.ReactNode
}

export function ThemeHandler(props: Props) {
  const { theme }  = useThemeContext()

  return(
    <div {...props} className={theme === "light" ? "light" : "dark"}/>
  );
}