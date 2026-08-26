import { jsx } from "react/jsx-runtime";
import { S as SiteMirrorPage } from "./site-mirror-page-DyEM6sGZ.js";
import { a as Route } from "./router-LqBfvLmR.js";
import "@tanstack/react-router";
import "react";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
import "superjson";
import "zod";
function Home() {
  const {
    page
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsx(SiteMirrorPage, { page, path: "/" });
}
export {
  Home as component
};
