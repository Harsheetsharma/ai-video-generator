# AI Video Generator

A local-first AI video creation workspace built with **Next.js, TypeScript, Ollama, and Remotion**. The project explores a script-to-video workflow: use a locally running language model to help structure a video, turn that structure into validated scene data, preview the composition, and render the result.

> **Project status:** In active development. Features and workflows may change as the engine evolves.

## What it is

The codebase is organized around a few distinct stages:

1. **AI planning** — prompt-building and blueprint generation modules prepare structured video plans through a local Ollama client.
2. **Structured-data handling** — parsers, validators, sanitizers, and repair utilities help turn model output into data the application can work with.
3. **Scene and asset resolution** — renderer modules resolve scene and asset information for composition.
4. **Video composition** — Remotion components provide the composition and rendering layer.
5. **Web interface** — a Next.js App Router application acts as the project workspace.

The goal is to keep the generation pipeline understandable and extensible, rather than treating video creation as one opaque API call.

## Tech stack

| Area | Technologies |
| --- | --- |
| Web application | Next.js 16, React 19, TypeScript |
| AI runtime | Ollama (local model runtime) |
| Video composition and rendering | Remotion 4 |
| Validation | Zod |
| Styling | Tailwind CSS 4 |

## Prerequisites

- Node.js (use a current LTS release)
- npm
- Ollama installed and running locally
- A model downloaded in Ollama that is compatible with your prompts

The AI client is configured to communicate with a local Ollama service. Check `src/ai/ollamaClient.ts` and your environment/configuration before starting the app; the required model and endpoint may depend on your local setup.

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Harsheetsharma/ai-video-generator.git
cd ai-video-generator
npm install
```

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Make sure Ollama is running and that the model expected by your local configuration is available before trying AI-powered generation.

## Remotion

Launch the Remotion Studio:

```bash
npm run remotion:studio
```

Render the configured `AI-Video` composition to `out/video.mp4`:

```bash
npm run remotion:render
```

The render command uses the composition and output path defined in the project scripts. Ensure the required input assets are available before rendering.

## Useful scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run remotion:studio` | Open Remotion Studio |
| `npm run remotion:render` | Render the configured video composition |

## Project structure

```text
src/
├── ai/          # Ollama client, prompt building, and AI planning
├── app/         # Next.js App Router application and API routes
├── audio/       # Audio-related modules and assets
├── components/  # Shared interface components
├── parser/      # Blueprint parsing, validation, and repair
├── renderer/    # Scene, asset, and timeline resolution
├── remotion/    # Remotion compositions, components, and rendering logic
├── assets/      # Project assets
└── types/       # Shared TypeScript types

remotion.root.ts # Remotion entry point
```

## Development notes

- Keep model output structured and validate it before passing it into rendering.
- Treat local model availability and asset paths as runtime dependencies.
- The README describes the repository's current architecture and scripts; it does not imply that every planned generation feature is production-ready.

## Contributing

Contributions, bug reports, and practical suggestions are welcome. For substantial changes, open an issue first so the approach can be discussed before implementation.

## License

No license file is currently included. Unless a license is added to this repository, assume that all rights are reserved and do not redistribute or reuse the code.
