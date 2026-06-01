# G-Scores Frontend

Frontend application for the G-Scores system, providing score lookup and statistical reports for the 2024 Vietnam National High School Exam (THPT 2024).

## Assignment Requirements

Build a web application that:

- Allows users to search exam scores by registration number.
- Displays score distribution reports with four score levels:
  - ≥ 8
  - 6 ≤ score &lt; 8
  - 4 ≤ score &lt; 6
  - &lt; 4
- Shows statistics for all subjects.
- Displays the Top 10 students in Group A (Mathematics, Physics, Chemistry).
- Provides a responsive user interface.

## Live Demo

| Service       | URL |
|---------------|-----|
| Frontend      | https://g-score.vercel.app |
| Backend API   | https://gscores.up.railway.app |

## Overview

This project is the frontend of the G-Scores system. It consumes data from the backend API and provides an interface for searching exam scores, viewing statistical reports, and exploring the top-performing students in Group A.

The application is built with Next.js and React, with a focus on performance, responsiveness, and user experience.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- TanStack Query
- Apache ECharts (tree-shaken bar charts)
- Font Awesome
- Vercel (deployment)

## Features

### Dashboard

A simple landing page that provides quick access to the main features of the application.

### Score Lookup

- Search by registration number (SBD)
- Display detailed subject scores
- Loading skeletons and error handling

### Reports & Statistics

- Score distribution by subject
- Score distribution for all subjects
- Top 10 students in Group A
- Interactive charts powered by ECharts
- Mobile-optimized layouts (horizontal bar chart, card list for rankings)

### Settings

- Light/Dark theme
- Vietnamese/English language support
- User preferences stored in `localStorage`

### Responsive Design

The interface is optimized for:

- Desktop (sidebar navigation)
- Tablet
- Mobile devices (header bar, slide-out menu, adapted charts and tables)

## Project Structure

```
src/
├── app/                    # Next.js routes and global styles
├── components/
│   ├── ui/                 # Shared UI (Card, Button, skeletons, …)
│   ├── layouts/            # App shell, sidebar
│   ├── dashboard/          # Dashboard tiles
│   ├── scores/             # Score lookup form and result table
│   └── reports/            # Charts, report sections, ECharts setup
└── core/
    ├── api.ts              # API types and fetch helpers
    ├── constants/          # Chart colors and layout constants
    ├── i18n/               # Translations and locale provider
    ├── theme/              # Theme provider
    └── providers/          # React Query and app providers
```

The project follows a component-based structure where reusable UI elements, feature modules, and shared application logic are organized separately.

## Environment Variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Base URL of the backend (no trailing slash), e.g. `https://gscores.up.railway.app` |

On Vercel, set the same variable in **Project → Settings → Environment Variables**.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
```

Run the production build:

```bash
npm start
```

Lint:

```bash
npm run lint
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Redirect to dashboard |
| `/dashboard` | Main navigation page |
| `/search` | Score lookup by registration number |
| `/reports` | Statistics and reporting dashboard |
| `/settings` | Theme and language settings |

## API Integration

The frontend calls the backend under `{NEXT_PUBLIC_API_URL}/api`:

| Endpoint | Purpose |
|----------|---------|
| `GET /scores/:sbd` | Look up scores by registration number |
| `GET /reports/distribution?subject=` | Distribution for one subject |
| `GET /reports/distribution/all` | Distribution for all subjects |
| `GET /reports/top-group-a` | Top 10 Group A students |

## Features Implemented

- Score lookup by registration number
- Subject score distribution reports
- Statistics across all subjects
- Top 10 Group A ranking
- Interactive charts
- Light/Dark theme
- Vietnamese/English language support
- Responsive UI
- API integration with backend
- Production deployment on Vercel

## Notes

- The frontend communicates with the backend through REST APIs.
- The first request may take slightly longer if the backend service is waking up from an idle state (e.g. free-tier hosting).
- Chart libraries are loaded on demand; visiting the dashboard prefetches report data and ECharts for faster navigation to `/reports`.
- Environment-specific configuration is handled through `.env` locally and deployment variables on Vercel.
