# Artist Works Demo

A Nuxt 3 demo project showcasing an application with Vue 3, Pinia state management, and Tailwind CSS. The project is containerized using Docker and includes a Makefile for development and testing automation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Docker Development](#docker-development)

- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Assets](#assets)
- [License](#license)

---

## Project Overview

This is a demo project built with Nuxt 3 to manage and showcase artist works. It includes:

- Vue 3 components
- Pinia state management
- Tailwind CSS styling
- Docker containerization
- Makefile for automated commands
- Unit testing with Vitest

---

## Tech Stack

- **Framework:** Nuxt 3
- **Frontend:** Vue 3, Tailwind CSS
- **State Management:** Pinia
- **Testing:** Vitest, @vue/test-utils
- **Containerization:** Docker, Docker Compose
- **Package Management:** npm
- **Build Tools:** Vite

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- Docker & Docker Compose (for containerized development)
- Make (optional, for running Makefile commands)

---

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```
http://localhost:3000
```

---

### Docker Development

1. Build and start the container:

```bash
docker compose up --build
```

2. Access the application at:

```
http://localhost:3000
```

**Note:** Volumes in `docker-compose.yml` enable live reload during development.

---

## Available Scripts

| Command            | Description                               |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the Nuxt development server         |
| `npm run build`    | Build the Nuxt application for production |
| `npm run preview`  | Preview the production build              |
| `npm run generate` | Generate static site                      |
| `npm run test`     | Run unit tests with Vitest                |
| `npm run test:ui`  | Launch Vitest UI for interactive testing  |
| `npm run test:run` | Run Vitest tests once in the CLI          |

---

## Makefile Commands

- `make dev` – Starts the development environment using Docker Compose.
- `make test` – Runs all unit tests with Vitest.

---

## Testing

Unit tests are located in the `tests/` directory:

- `tests/components` – Component-specific tests
- `tests/pages` – Page-specific tests
- `tests/setup.ts` – Test setup file

Testing uses **Vitest** and **@vue/test-utils** for Vue component testing.

---

## Project Structure

```
.
├── app/                 # Nuxt root component
├── assets/              # CSS and font assets
├── components/          # Vue components
├── pages/               # Nuxt pages
├── stores/              # Pinia stores
├── middleware/          # Global middleware
├── tests/               # Unit tests
├── public/              # Static files
├── Dockerfile           # Docker build instructions
├── docker-compose.yml   # Docker Compose configuration
├── Makefile             # Development and test automation
├── nuxt.config.ts       # Nuxt configuration
├── package.json         # Project dependencies and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

---

## Assets

- Fonts: `assets/fonts/manrope/` (Manrope font variants)
- CSS: `assets/css/` (Tailwind and custom styles)

---

## License

This project is for demo purposes. Modify as needed for your own projects.
