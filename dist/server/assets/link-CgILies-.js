import { unstable_localLink } from "@trpc/client";
import superjson from "superjson";
import { b as appRouter, c as createTRPCContext } from "./router-CNJPmIja.js";
import { g as getRequestHeaders } from "../server.js";
import "@tanstack/react-router";
import "react/jsx-runtime";
import "@tanstack/react-query";
import "@trpc/server/observable";
import "@trpc/tanstack-react-query";
import "react";
import "@trpc/server/adapters/fetch";
import "@trpc/server";
import "zod";
import "node:async_hooks";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "@tanstack/react-router/ssr/server";
const serverLink = unstable_localLink({
  router: appRouter,
  transformer: superjson,
  async createContext() {
    const headers = await getRequestHeaders();
    return createTRPCContext({ headers });
  }
});
export {
  serverLink
};
