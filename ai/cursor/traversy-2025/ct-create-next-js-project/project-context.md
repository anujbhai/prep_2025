# Simple Split View Resume Editor

## Project Goal
Build a clean split-screen resume editor with live preview

## Tech Stack
- NextJS 15 + TypeScript
- Tailwind v4 (Not v3)
- react-markdown for preview
- Local storage for persistence

## Quick Rule
- Use TypeScript interface for all data
- Client Components for forms, Server Components for display
- Arrow functions, export default at bottom
- Keep it simple and focused
- Modern look
- Ask to manually text code after each feature

## Core Data Type
```
interface Resume {
    name: string
    email: string
    phone?: string
    summary: string
    experience: {
        title: string
        company: string
        duration: string
        description: string
    }[]
    skill: string[]
}
```

## Layout Structure
- **Left side:** Form inputs(Client Components)
- **Right side:** Live markdown preview
- **Split 50/50 with responsive design:**
- **Clean professional styling:**
- **Use a light theme with modern elements:**

## Key Features
- Real time preview updates
- Clean form with proper spacing
- Professional resume template
- Mobile responsive
- TypeScript throughout

