# Mini-Blog React App

A modern, responsive blog application built with React and Vite. This project demonstrates core React concepts, including component-based architecture, routing, authentication, context API, custom hooks, API integration, and responsive design.

## Features

-   User authentication (login/logout) with React Context and localStorage
-   Protected routes (dashboard only accessible when logged in)
-   Responsive navigation bar with active link highlighting
-   Comments section with persistent storage
-   Unsplash API integration to display random images
-   Custom hooks for form management and localStorage
-   Modular, maintainable code structure
-   Mobile-friendly and accessible UI

## Project Structure

```
src/
  api/                # API integrations (e.g., Unsplash)
  assets/             # Static assets (images, etc.)
  components/         # Reusable UI components
  contexts/           # React Contexts for global state
  hooks/              # Custom React hooks
  layouts/            # Layout components and styles
  pages/              # Route-level components
  routes/             # Routing configuration
  index.css           # Global styles
  main.jsx            # App entry point
```

## Getting Started

1. **Install dependencies:**
    ```
    npm install
    ```
2. **Set up environment variables:**
    - Create a `.env` file in the project root:
        ```
        VITE_UNSPLASH_KEY=your_unsplash_access_key
        ```
3. **Run the development server:**
    ```
    npm run dev
    ```

## Main Technologies

-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [React Router](https://reactrouter.com/)

## Screenshots

![Mini-Blog Screenshot](src/assets/space.jpg)

## License

This project is for educational purposes and personal portfolio use.
