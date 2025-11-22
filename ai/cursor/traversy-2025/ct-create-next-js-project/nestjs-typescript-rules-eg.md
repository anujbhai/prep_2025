# NextJS + TypeScript Coding Standards

## TypeScript Best Practices
- Always use strict Typescript typing, never use "any" unless absolutely necessary
- Use proper interface/type definitions for all props, API responses, and function parameters
- Prefer interfaces over types for over object shapes
- Use proper generic types for reusable components
- Import types with "import type" when only importing for typing
- Never use eslint-disable comments unless especially requested and justified

## NextJS App Router Patterns
- Defaule to Server Components unless client interactivity is specifically needed
- Only use "use client" when you need:
    - Browser API (localStorage, window, document)
    - Event handlers (onClick, onChange etc.)
    - React hooks (useState, useEffect etc.)
    - Third-party libraries that require client-side execution
- Use anync/await in Server Components for data fetching
- Prefer "fetch()" with proper caching strategies over external data libraries in Server Components
- Use proper NextJS meradata API instead of manual head tags
- Implement proper "loading.tsx" and "error.tsx" files for each route segment

## React 19 Optimizations
- Do not use useMemo or useCallback - React 19 compiler handles optimizations automatically
- Do not use React.memo unless you have specific performance mesaurements showing it helps
- Use React 19 use() hook for data fetching in client components when needed
- Leverage automatic batching and concurrent features

## Component Architecture
- Use Server Components by default
- Keep Client Components small and focused on specific interactive functionality
- Pass server-fetched data down to client components as props
- Use proper TypeScript props interfaces for all components
- Always use arrow function systax for components are specifically needed
- Export default at the bottom of the files
- Page components must end with "Page" suffix (Eg. : "ProductDetailsPage", "UserProfilePage")
- Regular components use descriptive PascalCase names without "Page" suffix
- Use proper file naming: PascalCase for components, kebab-case for utility files

## Data Fetching Patterns
```
// Server Component (preffered) - Page component example
const ProductDetailsPage = async ({ params } : {params}) => {
    const product = await fetch("http://exampleapi.com", {
        cache: "force-cache" // or "no-store" for dynamic
    })

    return <div>{/* render product data */}</div>
}

export default ProductDetailsPage

// Regular Server Components
const ProductCard = async ({ productId } : { productId }) => {
    const product = await fetch("http://exampleapi.com")

    return <div>{/* render product card */}</div>
}

export default ProductCard

// Client Components (only when need)
`use client`
const InteractiveProductCard = ({ serverData } : { serverData }) => {
    const [ state, setState ] = useState(serverData)
    // client-specific logic only
    return <div>{/* interactive UI */}</div>
}

export default InteractiveProductCard

```

