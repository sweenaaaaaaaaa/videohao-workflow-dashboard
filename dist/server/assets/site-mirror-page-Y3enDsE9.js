import { jsx } from "react/jsx-runtime";
import { a as getSitePage, N as NotFound, p as patchRenyiHtml } from "./router-odDWxw-3.js";
function SiteMirrorPage(props) {
  const page = getSitePage(props.path);
  if (!page) {
    return /* @__PURE__ */ jsx(NotFound, {});
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: { display: "contents" },
      dangerouslySetInnerHTML: { __html: patchRenyiHtml(page.bodyHtml, props.path) }
    }
  );
}
export {
  SiteMirrorPage as S
};
