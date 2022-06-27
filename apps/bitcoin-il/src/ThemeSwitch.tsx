import { Switch } from 'antd'
import * as React from 'react'
import styled from 'styled-components'
import { useTheme } from './themes'

export interface ThemeSwitchProps {}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({}) => {
  const [isDark, setIsDark] = React.useState(true)

  const [, actions] = useTheme()
  // console.log('🍄🍄🍄', actions)

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // console.log('User prefers dark')
      actions.setTheme('bitil-theme', 'bitil-dark')
    } else {
      // console.log('User prefers light')
      actions.setTheme('bitil-theme', 'bitil-light')
    }
  }, [])

  React.useEffect(() => {
    if (isDark) {
      actions.setTheme('bitil-theme', 'bitil-dark')
    } else {
      actions.setTheme('bitil-theme', 'bitil-light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    // console.log(isDark)
    setIsDark(!isDark)
    isDark
      ? actions.setTheme('bitil-theme', 'bitil-dark')
      : actions.setTheme('bitil-theme', 'bitil-light')
  }

  return (
    <StyledThemeSwitch
      id="ThemeSwitch"
      onChange={toggleDarkMode}
      checked={isDark}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  )
}

export default ThemeSwitch

const StyledThemeSwitch = styled(Switch)``
