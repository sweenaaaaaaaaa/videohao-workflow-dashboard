import { jsx } from "react/jsx-runtime";
import { S as SiteMirrorPage } from "./site-mirror-page-DyEM6sGZ.js";
import { R as Route } from "./router-CNJPmIja.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "@trpc/client";
import "@trpc/server/observable";
import "superjson";
import "@trpc/tanstack-react-query";
import "react";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
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
