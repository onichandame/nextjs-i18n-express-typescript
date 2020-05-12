import { ComponentType } from "react"
import NextI18Next from "next-i18next"
import { NextComponentType, NextPageContext } from "next"

export const nextI18next = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["cn"]
})

export const {
  appWithTranslation,
  withTranslation,
  useTranslation,
  Link,
  i18n,
  Trans
} = nextI18next

export type TranslatedFunctionComponent<P = {}> = ComponentType<P>

export type TFC<P = {}> = TranslatedFunctionComponent<P>

export type PageInitialProps = {
  namespacesRequired: string[]
}

export type TranslatedPageComponent<P = {}> = NextComponentType<
  NextPageContext,
  PageInitialProps,
  P & PageInitialProps
>

export type TPC<P = {}> = TranslatedPageComponent<P>

export const setNamespaces = (namespace: string[]): string[] =>
  ["common", "_error"].concat(namespace)

export default nextI18next
