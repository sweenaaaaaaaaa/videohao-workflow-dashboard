import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { R as Route, g as getRenyiCanonicalNewsPath } from "./router-B6dvPRdX.js";
import { S as SiteMirrorPage } from "./site-mirror-page-WeGIPSba.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "@trpc/client";
import "@trpc/server/observable";
import "superjson";
import "@trpc/tanstack-react-query";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
import "zod";
function MirrorCatchAllPage() {
  const params = Route.useParams();
  const path = params._splat ? `/${params._splat}` : "/";
  const canonicalPath = getRenyiCanonicalNewsPath(path) ?? path;
  useEffect(() => {
    if (canonicalPath === path) {
      return;
    }
    window.history.replaceState(null, "", canonicalPath);
  }, [canonicalPath, path]);
  return /* @__PURE__ */ jsx(SiteMirrorPage, { path: canonicalPath });
}
export {
  MirrorCatchAllPage as component
};
