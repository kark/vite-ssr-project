export { render };
// eslint-disable-next-line react/no-deprecated
import { hydrate } from "react-dom";
import { PageShell } from "./PageShell";

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined"
    );
  const root = document.getElementById("react-root");
  if (!root) throw new Error("DOM element #react-root not found");
  hydrate(
    root,
    <PageShell pageContext={pageContext} theme="recolouring">
      <Page {...pageProps} />
    </PageShell>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
