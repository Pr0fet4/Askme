import Switch from 'react-switch';
import { useThemeContext } from '../contexts/ThemeContext';

import darkImg from '../assets/images/moon2.svg'

import '../styles/switch.scss'

export function ThemeButton() {
  const { theme, changeTheme } = useThemeContext()

  return (
    <div className="switch">
      <img src={darkImg} alt="icone dark" />
      <Switch
        onChange={changeTheme}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={35}
        handleDiameter={20}
        offColor="#0D47A1"
        onColor="#448AFF"
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      />
    </div>
  );
}