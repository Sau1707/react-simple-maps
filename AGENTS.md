#

## Typescript

- Enable strict TypeScript settings (`strict`, `noImplicitAny`, `strictNullChecks`)
- Avoid `any`; prefer `unknown`, generics, or precise types
- Explicitly type all public APIs (functions, classes, exports)
- Use type inference for local variables where clear
- Explicitly define return types for exported functions
- Use `interface` for extendable object shapes and public contracts
- Use `type` for unions, mapped types, and complex compositions
- Handle `null` and `undefined` explicitly; avoid non-null assertions (`!`)
- Prefer immutable patterns (`readonly`, spread operators, pure functions)
- Follow naming conventions:
    - `PascalCase` for types/interfaces
    - `camelCase` for variables/functions
    - `UPPER_SNAKE_CASE` for constants
    - Boolean prefixes (`is`, `has`, `can`)

- Structure files by feature, not type
- Prefer named exports over default exports
- Avoid overly complex or “clever” type constructs
- Prefer readability over advanced generics when possible
- Use typed error classes; never throw raw strings
- Prefer union types over enums unless necessary
- Always handle promises; avoid unhandled async calls
- Explicitly type async return values (`Promise<T>`)
- Enforce linting with ESLint (`@typescript-eslint`) and Prettier
- Disallow unused variables and floating promises
- Use type guards for runtime type narrowing
- Keep types close to their domain; avoid global type dumping
- Do not leak internal types across module boundaries
- Ensure tests respect type safety; avoid bypassing types
- Use `as const` for stable literals in tests
- Document public APIs using TSDoc
- Avoid expensive type computations that slow compilation
- Validate external data at runtime (e.g., schema validation)
- Do not trust external input types without validation
- Require code reviews to enforce type safety and clarity
- Reject unsafe assertions and unnecessary `any` usage
- Maintain a strict `tsconfig` baseline including:
    - `noUncheckedIndexedAccess`
    - `exactOptionalPropertyTypes`
    - `noImplicitOverride`

## Before commit

- `npm run format` to ensure consistent code style
- `npm run build` to ensure code quality and correctness before committing.
