import React from "react";
import PropTypes from "prop-types";
import "./PageShell.css";
import { PageContextProvider } from "./usePageContext";
import { Link } from "./Link";
import { childrenPropType, themePropType } from "./PropTypeValues";
import { ThemeProvider } from "@commercetools-uikit/design-system";
import PrimaryButton from "@commercetools-uikit/primary-button";
import "@commercetools-uikit/design-system/materials/custom-properties_recolouring.css";
// import "@commercetools-uikit/design-system/materials/custom-properties_default.css";

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
  theme: themePropType,
};
function PageShell({ pageContext, theme }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ThemeProvider theme={theme} />
        <Layout>
          <Sidebar>
            <PrimaryButton
              label="A label text"
              onClick={() => alert("Button clicked")}
              isDisabled={false}
            />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </Sidebar>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

Layout.propTypes = {
  children: childrenPropType,
};
function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  children: childrenPropType,
};
function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}
