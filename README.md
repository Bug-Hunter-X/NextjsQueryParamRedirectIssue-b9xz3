# Next.js Query Parameter Handling Issue

This repository demonstrates an unexpected behavior in Next.js when redirecting to a page with query parameters. The redirect itself works correctly, but the query parameters might not be handled as expected on the destination page.

## Bug Description

The bug occurs when using the `useRouter` hook to redirect to a page with query parameters. The redirect happens, but the target page might not receive or process the parameters properly, possibly leading to unexpected behavior or errors. This may be due to issues with the `router.push()` method or how Next.js handles query parameters in redirects.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to the `/about` page.
5. Click the button to redirect to the home page with query parameters.
6. Observe the home page – the query parameter might not be rendered or processed correctly.

## Solution

The solution involves making sure that the home page correctly handles and utilizes the query parameters passed to it during the redirect.