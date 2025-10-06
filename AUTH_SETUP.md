# Authentication Setup Guide

This guide explains how to set up Gmail/Google authentication for the Organic Classes application.

## Features Implemented

### 🔐 Authentication Pages
- **Sign In Page** (`/auth/signin`) - Login with Google or email/password
- **Sign Up Page** (`/auth/signup`) - Register new account with comprehensive form
- **Profile Page** (`/profile`) - User dashboard with profile management

### 🎨 UI Components
- Modern, responsive design with Tailwind CSS
- Framer Motion animations for smooth interactions
- Mobile-optimized layouts
- Consistent branding with orange theme

### 🚀 Navbar Integration
- Dynamic authentication states (loading, signed in, signed out)
- User dropdown menu with profile and logout options
- Mobile-responsive authentication menu
- User avatar display from Google profile

## Setup Instructions

### 1. Install Dependencies
Already installed:
- `next-auth` - Authentication framework
- `@next-auth/prisma-adapter` - Database adapter (optional)
- `google-auth-library` - Google OAuth support
- `react-icons` - Icon library

### 2. Google OAuth Setup

#### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API (or Google Identity API)

#### Step 2: Create OAuth Credentials
1. Go to "Credentials" section
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Select "Web application" as application type
4. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

#### Step 3: Configure Environment Variables
Update `frontend/.env.local` with your credentials:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Generate NextAuth Secret:**
```bash
openssl rand -base64 32
```

### 3. File Structure Created

```
frontend/
├── app/
│   ├── api/auth/[...nextauth]/route.ts  # NextAuth API routes
│   ├── auth/
│   │   ├── signin/page.tsx              # Sign in page
│   │   └── signup/page.tsx              # Sign up page
│   ├── profile/page.tsx                 # User profile page
│   └── layout.tsx                       # Updated with SessionProvider
├── components/
│   ├── Navbar.tsx                       # Updated with auth
│   └── Providers.tsx                    # Session provider wrapper
├── lib/
│   └── auth.ts                          # NextAuth configuration
├── .env.local                           # Environment variables
└── .env.example                         # Example env file
```

## Usage Examples

### Protecting Pages
```tsx
'use client'
import { useSession } from "next-auth/react"

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  if (!session) return <div>Access Denied</div>
  
  return <div>Welcome {session.user?.name}!</div>
}
```

### Authentication Buttons
```tsx
import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  
  if (session) {
    return (
      <button onClick={() => signOut()}>
        Sign out {session.user?.name}
      </button>
    )
  }
  return <button onClick={() => signIn()}>Sign in</button>
}
```

## Security Features

### 🔒 Session Management
- JWT-based sessions for scalability
- Secure token handling
- Automatic session refresh

### 🛡️ CSRF Protection
- Built-in CSRF protection with NextAuth
- Secure cookies configuration
- State parameter validation

### 🚫 Route Protection
- Client-side route protection using `useSession`
- Server-side protection with `getServerSession`
- Redirect handling for unauthorized access

## Customization Options

### Theme Colors
The authentication pages use the existing orange theme:
- Primary: `orange-500` (#f97316)
- Hover: `orange-600`
- Light: `orange-50`
- Text: `orange-700`

### Form Fields
The signup form includes:
- First Name & Last Name
- Email Address
- Phone Number
- Class/Grade selection
- Password & Confirm Password
- Terms & Privacy Policy agreement

### Profile Features
- Editable user information
- Activity tracking
- Course progress display
- Achievement badges

## Production Deployment

### Environment Variables
Update for production:
```env
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=secure-production-secret
```

### Google OAuth Settings
Add production URLs to Google Cloud Console:
- `https://yourdomain.com/api/auth/callback/google`

### Security Checklist
- [ ] Use HTTPS in production
- [ ] Secure environment variables
- [ ] Update CORS settings
- [ ] Configure proper redirect URIs
- [ ] Enable rate limiting
- [ ] Set up monitoring

## Testing

### Local Testing
1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000/auth/signin`
3. Test Google OAuth flow
4. Verify profile page functionality

### Test Accounts
Create test Google accounts for different user roles:
- Student account
- Teacher account (if applicable)
- Admin account (if applicable)

## Troubleshooting

### Common Issues

**"Configuration problem" error:**
- Check environment variables are properly set
- Verify Google OAuth credentials
- Ensure redirect URIs match exactly

**Session not persisting:**
- Check NEXTAUTH_SECRET is set
- Verify cookies are not being blocked
- Check browser developer tools for errors

**Google OAuth not working:**
- Verify client ID and secret
- Check OAuth consent screen configuration
- Ensure APIs are enabled in Google Cloud

**Profile images not loading:**
- Add Google's CDN to Next.js image domains
- Check if user granted profile picture permission

### Debug Mode
Enable debug logging by adding to `.env.local`:
```env
NEXTAUTH_DEBUG=true
```

## Next Steps

### Additional Features to Consider
1. **Email Verification** - Verify email addresses on signup
2. **Password Reset** - Implement forgot password functionality
3. **Social Logins** - Add Facebook, Twitter, GitHub providers
4. **Two-Factor Authentication** - Enhanced security
5. **Role-Based Access** - Student/Teacher/Admin roles
6. **Database Integration** - Store user data in database
7. **Profile Picture Upload** - Allow custom profile pictures

### Backend Integration
Consider connecting to your existing backend:
- User data synchronization
- Course enrollment tracking
- Progress analytics
- Payment integration

This authentication system provides a solid foundation for user management while maintaining the modern, educational theme of Organic Classes.