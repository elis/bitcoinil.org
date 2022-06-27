import { Switch } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import { useTheme } from './themes'

export interface ThemeSwitchProps {}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({}) => {
  const [isDark, setIsDark] = React.useState(true)

  const theme = useTheme()

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  React.useEffect(() => {
    console.log('Swithcing Theme')
    // if (isDark) {
    //   // actions.setTheme('bitil-theme', 'bitil-dark')
    //   // actions.setTheme('bitil-theme', 'bitil-light')
    //   theme[1].setTheme('bitil-theme', ' bitil-light')
    // } else theme[1].setTheme('bitil-theme', ' bitil-dark')
  }, [isDark])

  return (
    <StyledThemeSwitch id="ThemeSwitch">
      <Switch
        onChange={toggleDarkMode}
        checked={isDark}
        checkedChildren="🌙"
        unCheckedChildren="☀️"
      />
    </StyledThemeSwitch>
  )
}

export default ThemeSwitch

const StyledThemeSwitch = styled.div``
