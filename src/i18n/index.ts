import NextI18Next from "next-i18next"
import NextConfig from "next/config"
import path from "path"

const { localeSubpaths } = NextConfig()

export const i18n = new NextI18Next({
  defaultLanguage: `en`,
  otherLanguages: [`cn`],
  localeSubpaths,
  localePath: path.resolve("../../public/static/locales"),
})
