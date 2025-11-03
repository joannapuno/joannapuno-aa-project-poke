# AA Pokedex
A simple and interactive Pokedex with search, sorting, and a lightweight team builder.

## 🌐 Demo Link
[View Live on Vercel](https://joannapuno-aa-project-poke.vercel.app)

## ✨ Features
- 🔍 Search Pokemon by name
- 🗂️ Sort results by ID or alphabetically (A–Z / Z–A)
- 📖 Paginated list of all Pokemon
- 🧬 Detailed page with stats, abilities, and shiny toggle
- 💪 Build and manage your own Pokemon team
- 💾 View and edit your saved team

## ⚙️ Requirements
- Node.js ≥ 18
- Npm ≥ 7 (lockfileVersion 3 compatible)

## 🧱 Tech Stack
- PokeApi (v2)
- Vite (build tool)
- React 19 + TypeScript
- Tailwind CSS (styling)
- FontAwesome (accessibility-friendly icons)
- Vitest + React Testing Library (for simple unit tests)

## 🚀 Dev Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test
npm run test
```

## 🐳 Docker Setup

```bash
# 1. Install Docker (and Docker Compose if needed)

# 2. Pull base images
docker compose pull

# 3. Build and start the container
docker compose up --build

# 4. Stop and remove containers
docker compose down
```

## 🧪 Tests
- Simple unit test for:
  - `getAllPokemon`
  - `getPokemonByName`

## 🧩 Notes
Most logic and handlers live inside their respective hooks (e.g. usePokemonList) to keep components simple.
If other states like loading are needed globally, I would move them to context later.

### 🧠 Design Decisions
Followed the mockup closely, with small intentional UI enhancements that respect the original flow.
If this were an existing product, we wouldn’t want to disrupt established user behavior! (e.g. keeping search on the homepage).

**Changes made:**
- Sort dropdown near the search bar — groups filtering actions together, useful for large lists.
- Team link in the header — quick access to your current team.
- Add/Remove button on the detail page — lets users manage their team from the Pokemon view.
- Shiny toggle on the detail page — fun, non-disruptive addition that highlights an iconic Pokemon feature!
- Pagination ellipses — reduces visual noise by limiting visible page numbers.

**Smaller UI touches:**
- Hover transitions on Pokemon thumbnails.
- Type badges with color-coded backgrounds to better match the games and improve visual recognition

## 🧩 Page 3: Team Builder
Added a page to view your current team — one of the most exciting parts of Pokemon is building your dream lineup.
Currently simple, but it could evolve into a deeper team-builder experience (levels, comparisons, effectiveness, etc.).
It also adds replay value and a sense of ownership to the app!

## 🚀 Future Improvements
- Add fuzzy searching
- Global error handling (e.g. toasts for errors/success).
- More filters (by type, height, weight).
- Add component tests for UI stability.
- Refactor to make components more composable and reusable.

## 🌟 Future Features
- Add shiny Pokemon to teams.
- Support multiple instances of the same Pokemon (all-Gengar team!).
- Dynamic stats by level or nature.
- Team comparison and synergy visualization.
- Add a quick "Add to team" from the list for lesser clicks