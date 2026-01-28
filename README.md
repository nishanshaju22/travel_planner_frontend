# Wanderplan - AI-Powered Trip Planning App

A modern, collaborative trip planning application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Distinctive Design**: Custom-designed landing page with unique aesthetics (avoiding generic AI patterns)
- 🤖 **AI-Powered Planning**: Integrated AI assistance for trip planning and recommendations
- 👥 **Real-Time Collaboration**: Plan trips together with friends and family
- 🔔 **Smart Notifications**: Reminders for bookings and trip milestones
- 💬 **AI Travel Advisor**: Chatbot for personalized recommendations
- ❤️ **Interest-Based Discovery**: Tailored suggestions based on user preferences
- 🔗 **Easy Sharing**: Share plans with collaborators or send view-only links

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Fraunces (display), DM Sans (body)
- **Authentication**: JWT (stub implementation)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd wanderplan
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
wanderplan/
├── app/
│   ├── login/
│   │   └── page.tsx          # Login page (stub)
│   ├── signup/
│   │   └── page.tsx          # Signup page (stub)
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/               # Reusable components (to be added)
├── lib/
│   └── auth.ts              # Authentication utilities (stub)
├── public/                   # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Current Implementation Status

### ✅ Completed
- Landing page with distinctive design
- Custom color scheme and typography
- Responsive layout
- Login/Signup page stubs
- JWT authentication structure (stub)
- Routing setup

### 🚧 To Be Implemented
- Backend API integration
- Real authentication with JWT
- Dashboard/trip planning interface
- AI integration (Claude API)
- Real-time collaboration (Socket.io)
- Database setup (PostgreSQL + Prisma)
- User profile management
- Trip creation and management
- Notification system

## Design Philosophy

The landing page avoids common "AI-generated" aesthetics by:

- Using distinctive fonts (Fraunces + DM Sans instead of Inter/Roboto)
- Custom warm color palette (terracotta/sand tones)
- Unique animations and micro-interactions
- Asymmetric layouts and generous spacing
- Custom iconography and visual elements

## Authentication (Current Stub)

The authentication system currently uses stubs. The `lib/auth.ts` file contains:

- `isAuthenticated()`: Checks for JWT token in localStorage
- `getUserFromToken()`: Returns stub user data

**Next Steps for Auth:**
1. Implement JWT verification
2. Create login/signup API endpoints
3. Add session management
4. Integrate with backend

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables (To Be Added)

Create a `.env.local` file with:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Authentication
JWT_SECRET=your-secret-key

# Anthropic Claude API
ANTHROPIC_API_KEY=your-api-key

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/wanderplan
```

## Roadmap

### Phase 1: Core Infrastructure
- [ ] Set up backend API
- [ ] Implement authentication
- [ ] Database schema and migrations
- [ ] User registration and login

### Phase 2: Trip Planning
- [ ] Trip creation interface
- [ ] AI-powered itinerary generation
- [ ] Manual trip editing
- [ ] Activity and destination search

### Phase 3: Collaboration
- [ ] Real-time collaborative editing
- [ ] User invitations
- [ ] Permission management
- [ ] Commenting system

### Phase 4: AI Features
- [ ] AI chatbot integration
- [ ] Interest-based recommendations
- [ ] Smart suggestions
- [ ] Natural language trip planning

### Phase 5: Advanced Features
- [ ] Notification system
- [ ] Mobile app (React Native)
- [ ] Integrations (Google Maps, booking sites)
- [ ] Trip templates and sharing

## Contributing

This is currently a personal project. Contribution guidelines will be added as the project matures.

## License

MIT License - see LICENSE file for details

## Contact

For questions or feedback, please open an issue on the repository.
# travel_planner_frontend
