# MindFi Git Mentors Application

## Problem Statement
 Provide a simple web app using Github users API, that will help a newbie software engineer to find a mentorship from top developers in his field.


## **Acceptance Criteria Check**  

- **See how many mentors are available for browsing.**  
  - When the user opens the **Landing Page**, all available mentors from the GitHub API are displayed in a beautifully responsive grid.  

- **See a list of mentors and their stats.**  
  - On the **Landing Page**, users can view mentor statistics by hovering over the respective **Mentor Card**.  
  - To optimize performance and reduce unnecessary API requests, the mentor stats are fetched **on hover** instead of retrieving details for all mentors at once (Lazy Loading).  

- **View full details of a mentor.**  
  - Users can access a mentor's full details on the **Mentor Detail Page** (`/user/<username>`).  
  - Clicking on a **Mentor Card** navigates the user to this page.  
  - Additionally, a redirect link to the mentor's original **GitHub profile** is provided.  

- **View available slots to talk to a mentor.**  
  - The **available slots** for each mentor are displayed on the **Mentor Detail Page**.  

- **Robust Error Handling & Empty States**
  - Graceful handling of API failures with informative error messages
  - Custom error boundaries to prevent app crashes
  - User-friendly empty state displays when no mentors are found
  - Loading states during data fetching


## 🌟 Features

- **Modern UI Design**
  - Responsive layout that works on all devices
  - Smooth transitions between components
  - Intuitive error messages and fallback UI

- **Theme Support**
  - Dark and light mode support
  - System theme detection
  - Consistent theming across all states (error, empty, loading)

- **Performance Optimizations**
  - Lazy loading of components for faster initial load
  - Route-based code splitting
  - Efficient error boundary implementation

- **Error Handling & User Experience**
  - Global error boundary for crash prevention
  - Contextual error messages based on failure type
  - Empty state illustrations and helpful messaging
  - Clear loading indicators during data fetching


## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn

### Installation

1. Open the repository:
```bash
cd mindfi-react
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`


## 🛠️ Tech Stack

- React 18
- Vite
- TailwindCSS
- React Router
- Framer Motion (for animations)
- React Error Boundary
