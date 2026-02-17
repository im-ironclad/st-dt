# Workflow Builder

A single-page workflow builder for defining question sequences that LLM agents use when making phone calls to insurers. Built with Next.js, React Flow, and shadcn/ui.

## Features

- Visual canvas with pan, zoom, and drag support
- Pre-seeded insurance-themed question nodes
- Add new question nodes with a single click
- Nodes automatically connect with directed edges
- Dotted grid background for spatial orientation

## Tech Stack

- **Next.js 16** (React 19, Tailwind v4)
- **React Flow** (`@xyflow/react`) — canvas engine for nodes, edges, pan/zoom
- **shadcn/ui** — Button and Card components built on Radix + Tailwind
- **TypeScript**

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- Yarn

### Install dependencies

```bash
yarn install
```

### Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for production

```bash
yarn build
yarn start
```

## Project Structure

```
app/
  layout.tsx              # Root layout with metadata
  page.tsx                # Renders the WorkflowBuilder
  globals.css             # Tailwind + React Flow + shadcn styles

components/
  ui/                     # shadcn/ui primitives (Button, Card)
  workflow/
    WorkflowBuilder.tsx   # Client component — React Flow setup and state
    WorkflowHeader.tsx    # Header bar with title and "Add Node" button
    QuestionNode.tsx      # Custom React Flow node rendering a question card

lib/
  utils.ts                # cn() utility (Tailwind class merging)
  workflow-data.ts        # Types, predefined questions, node/edge factories
```
