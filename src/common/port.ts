export const port = isNaN(parseInt(process.env.PORT || ""))
  ? 3000
  : parseInt(process.env.PORT || "")
