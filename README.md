# Anjali Kadyan - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my skills, projects, and professional journey as a Full Stack Developer and UI/UX Designer.

## 🌟 Live Demo

[**View Live Portfolio**](https://your-portfolio-url.com) | [**GitHub Repository**](https://github.com/anjalikadyan/react-portfolio-master)

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Component Architecture](#-component-architecture)
- [Navigation & Routing](#-navigation--routing)
- [Installation & Setup](#-installation--setup)
- [Configuration](#-configuration)
- [Available Scripts](#-available-scripts)
- [Portfolio Sections](#-portfolio-sections)
- [Projects Showcase](#-projects-showcase)
- [Contact & Email Setup](#-contact--email-setup)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About the Project

This portfolio website serves as my professional digital presence, designed to showcase my technical skills, academic background, and project portfolio. Built with modern web technologies, it features smooth animations, responsive design, and an intuitive user experience.

**Target Audience:** Recruiters, hiring managers, potential clients, and collaborators interested in my web development and software engineering capabilities.

---

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Dark Theme**: Eye-friendly dark color scheme
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### 🚀 Functionality
- **Multi-Page Navigation**: React Router for seamless page transitions
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Filtering**: Organized project showcase with live demos
- **Typewriter Effect**: Dynamic text animation for role descriptions
- **Scroll Animations**: Elements animate on scroll for better engagement
- **Mobile Menu**: Responsive navigation for mobile devices

### 📱 Performance
- **Optimized Loading**: Lazy loading and code splitting
- **SEO Friendly**: Meta tags and semantic HTML structure
- **Fast Performance**: Optimized assets and efficient rendering

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Core JavaScript framework
- **React Router DOM 7.13.1** - Client-side routing
- **Framer Motion 7.6.1** - Animation library
- **React Icons 4.6.0** - Icon components
- **React Responsive Carousel 3.2.23** - Image carousel
- **Typewriter Effect 2.19.0** - Text animation
- **React Hot Toast 2.4.0** - Notification system

### Styling
- **Sass 1.55.0** - CSS preprocessor
- **CSS3** - Modern styling with animations
- **Responsive Design** - Mobile-first approach

### Backend & Services
- **EmailJS Browser 4.4.1** - Email service integration
- **Firebase 9.12.1** - Backend services (optional)

### Development Tools
- **Create React App 5.0.1** - Development environment
- **Testing Library** - Jest and React Testing Library
- **Web Vitals 2.1.4** - Performance monitoring

---

## 📁 Project Structure

```
react-portfolio-master/
├── public/                     # Static assets
│   ├── index.html             # HTML template
│   ├── favicon.ico            # Website favicon
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO configuration
├── src/                       # Source code
│   ├── components/            # React components
│   │   ├── About.jsx          # About section
│   │   ├── Achievements.jsx   # Achievements showcase
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Education.jsx      # Education details
│   │   ├── Footer.jsx         # Footer component
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Home.jsx           # Hero section
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Skills.jsx         # Skills section
│   │   └── ...
│   ├── assets/                # Static assets
│   │   ├── data.json          # Projects data
│   │   └── images/            # Profile and project images
│   ├── config/                # Configuration files
│   ├── styles/                # Global styles and Sass files
│   ├── App.js                 # Main application component
│   ├── index.js               # Application entry point
│   └── firebase.js            # Firebase configuration
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lock file
├── README.md                  # Project documentation
└── EMAIL_SETUP.md             # Email configuration guide
```

---

## � How It Works

### Application Flow
The portfolio website follows a **single-page application (SPA)** architecture built on React.js. Here's how everything connects:

```
🌐 User Request
    ↓
📱 Vite Dev Server (Development) / Static Files (Production)
    ↓
⚛️ React App (main.jsx → App.jsx)
    ↓
🎨 Component Rendering Pipeline
    ↓
📄 DOM Updates & Animations
```

### Component Hierarchy
```
App.jsx (Root Component)
├── Navbar.jsx (Navigation Header)
├── Hero.jsx (Landing Section)
├── About.jsx (About & Skills Section)
├── Projects.jsx (Projects Showcase)
├── Certificates.jsx (Certificates & Achievements)
├── Education.jsx (Academic Background)
├── Training.jsx (Professional Development)
├── Contact.jsx (Contact Form)
└── Footer.jsx (Footer)
```

---

## 🏗️ Component Architecture

### 1. **App.jsx** - Main Application Container
- **Purpose**: Root component that orchestrates all sections
- **Imports**: All section components and layout components
- **Structure**: Renders components in sequential order
- **Styling**: Applies global layout and overflow handling

```jsx
// Component Import Flow
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
// ... other sections
import { Footer } from "./layout/Footer";
```

### 2. **Layout Components** (`/src/layout/`)
- **Navbar.jsx**: Navigation header with smooth scroll links
- **Footer.jsx**: Footer with social links and copyright

### 3. **Section Components** (`/src/sections/`)
Each section is a **self-contained component** with:
- **Props**: Minimal (mostly data-driven)
- **State**: Local state for interactions (forms, carousels)
- **Styling**: Tailwind CSS classes with glass morphism effects
- **Animations**: CSS animations with staggered delays

### 4. **Shared Components** (`/src/components/`)
- **Button.jsx**: Reusable button component
- **AnimatedBorderButton.jsx**: Button with animated border effect

---

## 🧭 Navigation & Routing

### Smooth Scroll Navigation
The website uses **anchor-based navigation** with smooth scrolling:

```jsx
// Navbar Links Example
<a href="#about" className="nav-link">About</a>
<a href="#projects" className="nav-link">Projects</a>
<a href="#contact" className="nav-link">Contact</a>
```

### Section IDs
Each section has a unique ID for navigation:
- `#hero` - Hero section
- `#about` - About & Skills
- `#projects` - Projects showcase
- `#certificates` - Certificates & achievements
- `#education` - Academic background
- `#training` - Professional development
- `#contact` - Contact form

### Scroll Behavior
- **Smooth Scrolling**: CSS `scroll-behavior: smooth`
- **Offset Handling**: Navbar height compensation
- **Active State**: Visual feedback for current section

---

## 🎨 Styling System

### Tailwind CSS Configuration
- **Theme**: Custom color palette with primary/secondary colors
- **Glass Morphism**: `glass` utility class for frosted glass effect
- **Animations**: Custom CSS animations defined in `index.css`

### CSS Animation Classes
```css
/* Base Animations */
.animate-fade-in          /* Fade in animation */
.animation-delay-100     /* 100ms delay */
.animation-delay-200     /* 200ms delay */
/* ... more delays */

/* Component-Specific */
.animate-float           /* Floating animation */
.animate-marquee         /* Scrolling marquee */
.animate-ping            /* Pulsing animation */
```

### Responsive Design
- **Mobile-first approach**
- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`
- **Grid layouts**: Responsive grid systems
- **Typography**: Fluid typography scaling

---

## 📱 Data Flow & State Management

### Component Data Flow
```
📊 Static Data (Objects/Arrays)
    ↓
🔄 Component Props
    ↓
🎨 JSX Rendering
    ↓
🌊 User Interactions
    ↓
📝 Local State Updates (useState)
```

### State Management Examples
- **Contact Form**: Form data, loading states, error handling
- **Project Cards**: Hover states, active project tracking
- **Navigation**: Mobile menu toggle state

### Data Sources
- **Hard-coded**: Skills, education, projects data
- **Environment**: API keys for EmailJS
- **User Input**: Contact form submissions

---

## 🔧 Integration Points

### EmailJS Integration
```jsx
// Contact Form Flow
handleSubmit() → EmailJS.send() → Success/Error Response → UI Update
```

### External Links
- **GitHub**: Profile repository links
- **LinkedIn**: Professional profile
- **Project Demos**: Live project URLs
- **Email**: Mailto links

### Asset Management
- **Images**: `/public/` directory
- **Icons**: Lucide React icons
- **Fonts**: System fonts with web font fallbacks

---

## �🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/anjalikadyan/react-portfolio-master.git
cd react-portfolio-master
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm start
```

The application will open in your default browser at http://localhost:3000 

---

## ⚙️ Configuration

### EmailJS Setup (Required for Contact Form)

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Verify your email address

2. **Configure Email Service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Design your email template
   - Use variables: {{name}}, {{email}}, {{message}} 
   - Note your Template ID

4. **Get API Keys**
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update Configuration**
   - Open src/config/emailjs.js 
   - Replace placeholder values with your credentials

📖 **Detailed Instructions**: See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for complete guide

### Firebase Configuration (Optional)
If using Firebase features:
1. Create Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Update src/firebase.js with your configuration

---

## 🎮 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App (irreversible)
npm run eject
```

---

## 📑 Portfolio Sections

### 1. **Hero Section** (/)
- Personal introduction with animated text
- Professional roles: Full Stack Developer, UI/UX Designer, Software Engineer
- Project count display with animation
- Contact information for mobile users

### 2. **About Me** (/#about)
- Detailed professional background
- Educational information
- Career objectives and interests
- Technical focus areas

### 3. **Skills** (/#skills)
- Categorized technical skills
- Programming languages
- Frameworks and libraries
- Tools and technologies

### 4. **Education** (/#education)
- Academic qualifications
- Institution details
- Relevant coursework and achievements

### 5. **Projects** (/projects)
- Comprehensive project showcase
- 9+ real-world projects
- Live demo links
- GitHub repositories
- Technology stacks used

### 6. **Achievements & Certifications** (/certificates)
- Professional certifications
- Academic achievements
- Competition wins and recognition

### 7. **Contact** (/#contact)
- Functional contact form
- Direct email integration
- Social media links
- Professional network connections

---

## 🎨 Projects Showcase

The portfolio features **9+ diverse projects** demonstrating expertise across:

### Full-Stack Applications
- **Sports Management System** - MERN stack with JWT authentication
- **Training Center Management** - Course enrollment and assignment tracking
- **E-Commerce Platform** - Complete online shopping experience

### Frontend Applications
- **Tours & Travel Packages** - React-based booking interface
- **Weather Dashboard** - Real-time weather data visualization
- **AI Image Generator** - OpenAI DALL-E integration

### Real-Time Applications
- **Chat Application** - Socket.io powered messaging
- **Task Management Tool** - Firebase-based productivity app

### Personal Projects
- **Portfolio Website v1** - Previous version with custom animations

Each project includes:
- ✅ Live demo links
- ✅ Source code repositories
- ✅ Detailed descriptions
- ✅ Technology stack information
- ✅ Development timeline

---

## 📧 Contact & Email Setup

### Contact Form Features
- **Name Input**: User's full name
- **Email Input**: Sender's email address
- **Message Textarea**: Detailed message content
- **Submit Button**: Form submission with validation
- **Success Notifications**: Toast notifications for feedback

### Email Integration
- **Service**: EmailJS for serverless email sending
- **Templates**: Customizable email templates
- **Security**: No backend exposure of email credentials
- **Reliability**: Professional email delivery service

### Social Links
- **Email**: anjalikadyan607@gmail.com
- **GitHub**: [github.com/anjalikadyan](https://github.com/anjalikadyan)
- **LinkedIn**: Professional profile link
- **Resume**: Downloadable CV/Resume

---

## 🤝 Contributing

While this is a personal portfolio, contributions and suggestions are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### Areas for Improvement
- [ ] Additional animations and transitions
- [ ] SEO optimization
- [ ] Performance enhancements
- [ ] Accessibility improvements
- [ ] Dark/light theme toggle

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Anjali Kadyan**
- B.Tech CSE Student at Lovely Professional University
- Full Stack Developer | UI/UX Designer | Software Engineer
- Passionate about building innovative web solutions

**Connect with me:**
- 📧 Email: anjalikadyan607@gmail.com
- 🔗 GitHub: [github.com/anjalikadyan](https://github.com/anjalikadyan)
- 💼 LinkedIn: [linkedin.com/in/anjalikadyan](https://linkedin.com/in/anjalikadyan)

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Framer Motion** - For smooth animation library
- **EmailJS** - For contact form functionality
- **React Icons** - For beautiful icon components
- **Open Source Community** - For invaluable resources and tools

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Blog section for technical articles
- [ ] Admin panel for content management
- [ ] Multi-language support
- [ ] Advanced analytics integration
- [ ] PWA capabilities
- [ ] Voice search functionality

### Technical Improvements
- [ ] Next.js migration for better SEO
- [ ] TypeScript implementation
- [ ] Advanced testing coverage
- [ ] CI/CD pipeline setup
- [ ] Performance optimization
- [ ] Security enhancements

---

**Thank you for visiting my portfolio!** 🚀

*Built with passion, dedication, and modern web technologies.*
