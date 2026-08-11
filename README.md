# NoteNest 📘

Free guided notes, practice questions, and ACT prep minigames — built as a static site with React, TypeScript, and Vite, deployed to GitHub Pages.

## Subjects

- ACT English
- ACT Math
- AP Chemistry
- AP Calculus AB
- AP Environmental Science
- AP Psychology
- AP Biology

Each subject page has guided notes plus a practice quiz with instant feedback and explanations. Your best quiz scores are saved locally in your browser.

## Minigames

- **Math Speed Drill** — rapid-fire ACT-style arithmetic, percentages, and algebra against the clock.
- **Grammar Blitz** — spot the correct grammar/punctuation fix, ACT English style, against the clock.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Enable Pages in the repo settings with source set to **GitHub Actions**.
