# AI Video Generator

A local-first AI-assisted video planning and rendering project built with **Next.js, TypeScript, Ollama, and Remotion**. It breaks a script into an outline, plans scenes section by section, validates the generated data, and provides a Remotion composition for vertical video output.

> **Status:** Work in progress. The API planning pipeline and Remotion composition are present, but the browser UI currently displays the generated blueprint as JSON. The Remotion composition still uses sample data; end-to-end rendering of a newly generated blueprint is an area for further integration.

## How the project works

1. **Outline generation** — the outline generator asks a locally running Ollama model to divide the input script into sections.
2. **Section planning** — the section planner generates scene data for each section.
3. **Blueprint assembly** — the merger combines section scenes into one timeline.
4. **Validation** — Zod validators check the generated outline, section plans, and final blueprint.
5. **Video composition** — Remotion components render layouts such as hero, timeline, comparison, quote, and statistics.

The main generation pipeline lives in `src/ai/generateBlueprint.ts`. API handlers are under `src/app/api`, and the Remotion entry point is `remotion.root.ts`.

## Tech stack

| Area | Technologies |
| --- | --- |
| Web application | Next.js 16, React 19, TypeScript |
| Local AI runtime | Ollama |
| Video composition and rendering | Remotion 4 |
| Runtime validation | Zod |
| Styling | Tailwind CSS 4 |
| Code quality | ESLint 9 |

## Prerequisites

- Node.js 22 (see `.nvmrc`)
- npm
- [Ollama](https://ollama.com/) installed and running
- A model pulled into Ollama

For example, download a model before starting the application:

```bash
ollama pull qwen3.5:4b
```

Use a model name that is available in your own Ollama installation.

## Setup

Clone the repository and install the exact dependency versions from the lockfile:

```bash
git clone https://github.com/Harsheetsharma/ai-video-generator.git
cd ai-video-generator
npm ci
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Set the model name in `.env.local`:

```dotenv
OLLAMA_URL=http://127.0.0.1:11434
OLLAMA_MODEL=qwen3.5:4b
```

The Ollama URL defaults to `http://127.0.0.1:11434` if omitted. `OLLAMA_MODEL` must be set to a model already available locally.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/api/outline` | Generate and validate an outline from a script and target type |
| POST | `/api/section` | Generate and validate scenes for one outline section |
| POST | `/api/merge` | Merge an outline and its section plans into a video blueprint |
| POST | `/api/generate` | Run the complete outline-to-blueprint generation pipeline |

The `targetType` accepted by the generation and outline endpoints is `short` or `long`. AI-powered endpoints require a reachable Ollama server and a configured model.

## Remotion

Open Remotion Studio:

```bash
npm run remotion:studio
```

Render the configured `AI-Video` composition:

```bash
npm run remotion:render
```

The render script writes to `out/video.mp4`. The current root composition uses a sample blueprint in `src/remotion/Root.tsx`; it is useful for testing the composition independently of the AI pipeline.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run remotion:studio` | Open Remotion Studio |
| `npm run remotion:render` | Render the sample Remotion composition |

## Project structure

```text
src/
├── ai/
│   ├── outline/       # Outline generation and prompt construction
│   ├── planner/       # Per-section scene planning
│   ├── merger/        # Combine section plans into a blueprint
│   └── ollamaClient.ts
├── app/
│   └── api/           # Next.js route handlers
├── assets/            # Local asset provider
├── components/        # Browser UI components
├── parser/            # JSON sanitization and Zod validation
├── renderer/          # Timeline and asset resolution
├── remotion/          # Video composition, layouts, and animations
└── types/             # Shared TypeScript types

public/videos/         # Bundled background video assets
remotion.root.ts       # Remotion entry point
```

## Dependency maintenance and CI

GitHub Actions runs dependency installation, linting, and the production build on pushes and pull requests to `main`.

Dependabot is configured to check npm packages weekly and GitHub Actions monthly. Dependency updates are proposed as pull requests so they can be reviewed and tested before merging.

## Contributing

Keep changes focused and run the checks before opening a pull request:

```bash
npm ci
npm run lint
npm run build
```

## License

No license file is currently included. Unless a license is added, assume all rights are reserved.
