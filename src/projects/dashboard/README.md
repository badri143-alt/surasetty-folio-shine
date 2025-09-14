# Social Media Dashboard

A comprehensive social media management dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- **Multi-Platform Support**: Manage Instagram, Twitter, Facebook, and LinkedIn accounts
- **Real-time Analytics**: Track followers, engagement rates, posts, and reach
- **Post Scheduling**: Schedule posts with full CRUD operations
- **Performance Tracking**: Monitor post performance with detailed metrics
- **Interactive UI**: Modern glassmorphism design with dark/light mode support

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS gradients
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Notifications**: Toast notifications

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd social-media-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

1. **Dashboard Overview**: View aggregated stats across all platforms
2. **Platform-Specific Views**: Switch between Instagram, Twitter, and Facebook tabs
3. **Schedule Posts**: Click "Schedule New Post" to create new content
4. **Edit/Delete**: Use the edit and delete buttons on scheduled posts
5. **Analytics**: Monitor engagement rates and performance metrics

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
├── projects/
│   └── dashboard/
│       ├── DashboardPage.tsx    # Main dashboard component
│       └── README.md            # This file
└── hooks/                  # Custom React hooks
```

## Key Components

### DashboardPage
Main component handling:
- Tab navigation between platforms
- Statistics display
- Post management (CRUD operations)
- Modal dialogs for scheduling/editing

### StatCard
Reusable component for displaying metrics with:
- Trend indicators
- Icon representations
- Responsive design

## API Integration

Currently uses mock data. To integrate with real APIs:

1. Replace mock data with API calls
2. Add authentication handling
3. Implement real-time data fetching
4. Add error handling and loading states

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## License

MIT License - see LICENSE file for details