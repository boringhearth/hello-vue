# helloWorld

A one-page Vue 3 experiment. Click anywhere and the heading re-rolls its font
family, weight, slant, letter spacing, rotation and colour.

Built while learning Vue's reactivity model — the point of it is that nothing
tells the heading to redraw. `randomize()` assigns a new object to a `ref`, the
template reads that ref, and Vue works out the rest.

**[Live demo](https://boringhearth.github.io/hello-vue/)**

## Stack

Vue 3 (`<script setup>`), Vite, Tailwind CSS 4.

## Running it

```bash
npm install
npm run dev
```

## Deploying

Pushing to `main` builds and publishes to GitHub Pages via
`.github/workflows/deploy.yml`.
