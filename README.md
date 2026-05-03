# 🎬 The Movie Watch List - TMDB Discovery App

A high-performance Movie and TV Show discovery application built with **React**, **TypeScript**, and **Tailwind CSS**. This app provides a seamless experience for browsing trending media, searching for specific titles, and viewing detailed information about the latest cinematic releases.

## 🚀 Live Demo
[not yet live but link here, e.g., https://vercel.app]

## ✨ Key Features

*   **Dual-Media Support**: Seamlessly switch between Movies and TV Shows with conditional rendering logic.
*   **Intelligent Search**: Real-time multi-search with **Debouncing** to reduce API calls and improve performance.
*   **Dynamic Hero Slider**: Animated trending content using **Framer Motion** with touch-drag support for mobile.
*   **Smart Routing**: Dynamic URL segments (`/:type/:id`) to handle both movie and series detail views.
*   **Optimized Fetching**: Built with **TanStack Query** for automatic caching, loading states, and background data synchronization.
*   **Modern UI**: Responsive grid layouts, skeleton loaders, and a custom "Glowing Underline" navigation system.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Type Safety**: [TypeScript](https://typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com) & [Axios](https://axios-http.com)
- **Routing**: [React Router Dom v6](https://reactrouter.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Animations**: [Framer Motion](https://framer.com)

## ⚙️ Environment Setup

To run this project locally, you'll need to obtain an API key from [The Movie Database (TMDB)](https://themoviedb.org).

1. Clone the repo:
   ```bash
   git clone https://github.com
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory see `.env.example`:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## 📂 Architecture Highlights

*   **Custom Debounce Logic**: Implemented a generic `useDebounce` hook to optimize search performance and minimize unnecessary API rate-limiting.
*   **Discriminated Unions**: Used to handle the variation between `Movie` and `TVShow` data types safely.
*   **Custom Hooks**: Centralized API logic in `useMovies` and `useMovieDetails` for clean component code.
*   **Utility Helpers**: Logic for formatting runtimes and pluralizing seasons/episodes is abstracted into pure TypeScript helpers.


## 🗺️ Future Roadmap

Planned features to enhance the user experience:

*   **User Authentication**: Allow users to create accounts using Firebase or Supabase.
*   **Watchlist / Favorites**: Enable users to save movies and TV shows to a personal collection using LocalStorage or a backend database.
*   **Cast & Crew Profiles**: Add dedicated pages for actors and directors, showing their filmography and biographies.
*   **Trailer Integration**: Implement a Video Player to watch official trailers directly from the TMDB YouTube links.
*   **Genre Filtering**: Advanced discovery options to filter content by genres (Action, Comedy, Horror, etc.).
*   **Infinite Scroll**: Replace standard pagination with a seamless infinite scrolling experience on the Home page.

---
