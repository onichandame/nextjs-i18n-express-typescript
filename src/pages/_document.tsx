import React from "react"
import Document, { DocumentContext } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"
import {
  DocumentInitialProps,
  RenderPageResult
} from "next/dist/next-server/lib/utils"

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
      originalRenderPage({
        enhanceApp: App => (props): ReturnType<ServerStyleSheets["collect"]> =>
          sheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </>
      )
    }
  }
}
