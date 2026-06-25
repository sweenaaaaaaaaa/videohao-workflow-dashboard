## 1. Tech Stack
- Framework: React 19, TanStack Start (SSR), TanStack Router
- Styling: Tailwind CSS v4, Font Awesome 4.7, Swiper (via CSS), Custom CSS extraction
- Server: tRPC on TanStack Start, Nitro, Deno Edge Runtime
- Data: TanStack Query (React Query), Zod validation, SuperJSON transformer
---
## 2. Directory Structure
```
src/
├── client/                     # Client-side core logic and tRPC setup
│   ├── trpc/
│   │   ├── index.ts            # Configures tRPC client with splitLink to handle both SSR and browser fetches using SuperJSON. Exports the typed trpc proxy for component use.
│   │   └── provider.tsx        # Provides the TanStack QueryClientProvider to the application tree. Wraps the app to enable asynchronous data fetching features.
│   └── views/
│       └── home.tsx            # Main view for the landing page. Renders the page root and global floating elements like the "back to top" button.
├── components/                 # UI components
│   ├── home/                   # Homepage specific components
│   │   ├── container-fluid.tsx # Renders the top navigation container. Includes the company logo, mobile menu toggle, language selector, and right-side sidebar trigger.
│   │   ├── div.tsx             # Main content wrapper for home sections. Composes company introduction, Ind02 carousel, solution features with map, and news list.
│   │   ├── header-box.tsx      # Fixed position container for the header. Ensures the navigation bar stays at the top of the viewport during scrolling.
│   │   ├── header.tsx          # Inner header structure using clearfix. Acts as a layout wrapper for the fluid container and navigation elements.
│   │   ├── ind02.tsx           # Product category showcase section. Integrates the Swiper container with a category selection button box for desktop users.
│   │   ├── menu-box.tsx        # Container for the primary site menu. Handles the layout and positioning of the navigation links within the header area.
│   │   ├── menu.tsx            # Renders complex mega-menu navigation. Includes nested sub-navigation with background images, descriptions, and tiered links for product categories.
│   │   ├── page-content.tsx    # Higher-level content wrapper. Encapsulates the Div component which holds the majority of the landing page's informational sections.
│   │   ├── page-root.tsx       # Root layout for the home route. Composes the header, banner video/slider, right-side hidden navigation window, content, and footer.
│   │   ├── sub-btn.tsx         # Reusable list of product category links. Used primarily in the footer or mobile menus to navigate to specific product lines.
│   │   ├── swiper-container.tsx # Initialization wrapper for the Swiper carousel. Provides the necessary horizontal swiping context for the product showcase slides.
│   │   └── swiper-wrapper.tsx  # Slide content for the product showcase. Renders individual slides for loaders, trucks, drilling rigs, and service vehicles with descriptions.
│   └── not-found.tsx           # Default 404 error display component. Renders a centered text message when a user navigates to a non-existent route.
├── hooks/                      # Custom React hooks
│   └── use-mobile.ts           # Detects mobile viewport status via matchMedia. Provides a reactive boolean indicating if the screen width is below 768px.
├── lib/                        # Utility functions
│   └── utils.ts                # Exports the cn helper. Combines clsx and tailwind-merge to safely apply conditional Tailwind CSS classes without conflicts.
├── routes/                     # TanStack Router route definitions
│   ├── api/
│   │   └── trpc.$.ts           # Catch-all route for tRPC API requests. Forwards incoming fetches to the tRPC fetch request handler on the server.
│   ├── __root.tsx              # Root HTML document structure. Defines the global head tags, injects extracted stylesheets, and provides the TrpcProvider to the app.
│   └── index.tsx               # Main entry route for the project. Map the root path to the HomePage view component for rendering the site.
├── server/                     # Server-side tRPC implementation
│   ├── trpc/
│   │   ├── routes/
│   │   │   └── example.ts      # Defines example procedures for greeting and server time. Uses Zod for input validation and tracks a simple in-memory list.
│   │   ├── caller.ts           # Creates a server-side tRPC caller. Allows server-side logic to invoke procedures directly without making HTTP requests.
│   │   ├── context.ts          # Defines the tRPC context. Extracts and passes headers from the request to the procedures for authentication or logging.
│   │   ├── init.ts             # Initializes the tRPC instance. Sets up the context typing and SuperJSON transformer for the entire router.
│   │   ├── link.ts             # Configures the server-side local link. Enables TanStack Start to resolve tRPC queries during SSR efficiently.
│   │   ├── middlewares.ts      # Implements auth and logging layers. Tracks procedure execution time, logs inputs/errors, and provides a placeholder for authentication logic.
│   │   ├── procedure.ts        # Exports base procedure types. Distinguishes between public procedures and those protected by the auth middleware.
│   │   └── router.ts           # Main tRPC router entry point. Composes individual sub-routers into a single typed tree for the client to consume.
│   └── loader.ts               # Server-side data loading helper. Provides patterns for pre-fetching data during the SSR phase using the server caller.
├── styles/                     # Tailwind and global styles
│   └── global.css              # Main CSS entry point. Includes Tailwind v4 directives, shadcn/ui theme variables, and custom keyframes for background animations.
├── router.tsx                  # TanStack Router instance configuration. Sets up the router with the generated route tree and default not-found components.