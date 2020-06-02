import NextI18Next from "next-i18next"
import { NextPage } from "next"

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

export type PageInitialProps = {
  namespacesRequired: string[]
}

//export type TranslatedPageComponent<P = {}> = NextComponentType<
//  NextPageContext,
//  PageInitialProps,
//  P & PageInitialProps
//>
//
//export type TPC<P = {}> = TranslatedPageComponent<P>
//
export type TranslatedPageComponent<P = {}> = NextPage<P, PageInitialProps>

export type TPC<P = {}> = TranslatedPageComponent<P>

export const setNamespaces = (namespace: string[]): string[] =>
  ["common", "_error"].concat(namespace)

export default nextI18next
