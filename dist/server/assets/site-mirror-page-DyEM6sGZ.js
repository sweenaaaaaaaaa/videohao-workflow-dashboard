import { jsx } from "react/jsx-runtime";
function SiteMirrorPage(props) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: props.page.bodyHtml }
    }
  );
}
export {
  SiteMirrorPage as S
};
