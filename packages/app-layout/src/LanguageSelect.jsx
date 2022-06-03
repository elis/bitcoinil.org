import { Select } from "antd"
import React from "react"
// import { FormattedMessage, IntlProvider } from "react-intl"
import styled from "styled-components"
import { useIntl } from "./hooks/useIntl"

export default function LanguageSelect({ setLanguage, FormattedMessage }) {
  const intl = useIntl()
  const { language, messages, availableLanguages } = intl

  return (
    // <IntlProvider
    //   messages={messages[language]}
    //   locale={language}
    //   defaultLocale="en"
    // >
    <StyledLanguageSelect>
      <Select
        onChange={(e) => {
          setLanguage(e)
        }}
        defaultValue={availableLanguages[0].icon}
      >
        {availableLanguages.map((avLang) => {
          return (
            <Select.Option
              key={`select-language-${avLang.name}`}
              value={avLang.name}
            >
              {avLang.icon}
            </Select.Option>
          )
        })}
      </Select>
      <FormattedMessage
        id="app.text"
        defaultMessage="This is some text"
        description="Link on react page"
      />
    </StyledLanguageSelect>
    // </IntlProvider>
  )
}

const StyledLanguageSelect = styled.div`
  height: 110px;
`
