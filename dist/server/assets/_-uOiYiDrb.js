import { jsx } from "react/jsx-runtime";
import { S as SiteMirrorPage } from "./site-mirror-page-DyEM6sGZ.js";
import { R as Route } from "./router-LqBfvLmR.js";
import "@tanstack/react-router";
import "react";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
import "superjson";
import "zod";
function MirrorCatchAllPage() {
  const {
    canonicalPath,
    page
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsx(SiteMirrorPage, { page, path: canonicalPath });
}
export {
  MirrorCatchAllPage as component
};
