📊 Social Media Dashboard

    A modern social media management dashboard built with React, TypeScript, and Tailwind CSS.
    Easily manage multiple platforms, schedule posts, and track performance with real-time analytics.

🚀 Features

    Multi-Platform Support – Manage Instagram, Twitter, Facebook, and LinkedIn

    Real-Time Analytics – Track followers, engagement, impressions, and reach

    Post Scheduling – Full CRUD support for scheduled posts

    Performance Tracking – Monitor metrics with trend indicators

    Interactive UI – Glassmorphism design with Dark/Light mode

    Toast Notifications – Instant feedback for actions

🛠️ Tech Stack

    Frontend: React 18 + TypeScript

    Styling: Tailwind CSS + Custom Gradients

    UI Components: shadcn/ui, Radix UI primitives

    Icons: Lucide React

    State Management: React Hooks

    Notifications: Custom Toast Hook

📂 Project Structure
    src/
    ├── components/
    │   └── ui/              # Reusable UI components
    ├── hooks/
    │   └── use-toast.ts     # Custom toast hook
    ├── projects/
    │   └── dashboard/
    │       ├── DashboardPage.tsx   # Main dashboard component
    │       └── README.md           # Project-specific docs
    └── main.tsx             # App entry point

⚡ Installation

Clone the repository and install dependencies:

# Clone the repo
git clone <repository-url>

# Navigate to project directory
cd social-media-dashboard

# Install dependencies
npm install

# Start development server
npm run dev


The app will be running on http://localhost:5173/
 (default for Vite).

📖 Usage

    Dashboard Overview – View all platforms at a glance

    Platform Tabs – Switch between Instagram, Twitter, Facebook, LinkedIn

    Schedule Posts – Add, edit, and delete scheduled posts

    Analytics – Track engagement rates and post performance

    Notifications – Get success/error messages instantly

🔌 API Integration

    Currently using mock data. To connect real APIs:

    Replace mock stats with API calls

    Add OAuth authentication

    Implement live data fetching & error states

    Connect with Meta, Twitter, LinkedIn APIs

🤝 Contributing

    Fork the repo

    Create a feature branch (git checkout -b feature/awesome-feature)

    Commit changes (git commit -m 'Add awesome feature')

    Push to branch (git push origin feature/awesome-feature)

    Create a Pull Request
