# Heart-beat Audio Analysis

A modern, beautiful Next.js application for AI-powered heartbeat audio analysis and cardiovascular health diagnostics.

## 🌟 Features

- **AI Heart Diagnostics**: Upload or record heartbeat audio for AI-powered cardiovascular analysis
- **Educational Content**: Learn about heart health, lifestyle tips, and cardiovascular diseases
- **Interactive Tutorial**: Step-by-step guide for proper heartbeat recording
- **Research Dashboard**: View statistics and research data on cardiovascular diseases
- **Modern UI**: Beautiful glassmorphism design with smooth animations and gradients
- **Responsive**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility in mind

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **AI Integration**: ONNX Runtime (for future ML model integration)
- **Animations**: CSS animations and Framer Motion

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Design System

The project uses a custom design system with:
- **Glassmorphism effects**: Modern frosted glass UI elements
- **Gradient animations**: Smooth color transitions and animated backgrounds
- **Custom scrollbar**: Styled scrollbar matching the theme
- **Responsive typography**: Inter font family with proper scaling
- **Dark theme**: Dark mode optimized for reduced eye strain

## 🏗️ Project Structure

```
heartbeat-audio-analysis/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── diagnostics/       # Diagnostics page
│   ├── health/            # Health guide page
│   ├── tutorial/          # Recording tutorial page
│   └── dashboard/         # Research dashboard page
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation component
│   ├── Hero.tsx          # Homepage hero section
│   ├── InfoCards.tsx     # Information cards
│   ├── AISection.tsx     # AI information section
│   └── ...               # Other page-specific components
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## 🎯 Pages

1. **Home** (`/`): Landing page with project overview and call-to-action
2. **Health** (`/health`): Information about heart health and lifestyle tips
3. **Dashboard** (`/dashboard`): Research data and statistics
4. **Tutorial** (`/tutorial`): Step-by-step heartbeat recording guide
5. **Diagnostics** (`/diagnostics`): AI-powered heart diagnostics interface

## 🤖 Future Enhancements

- [ ] Integration with real ONNX ML models for heartbeat analysis
- [ ] User authentication and personalized health tracking
- [ ] Historical data visualization with charts
- [ ] Multi-language support
- [ ] PDF report generation
- [ ] Email notifications for analysis results

## ⚠️ Disclaimer

This is not a medical device. This application is for educational and informational purposes only. 
Always consult with qualified healthcare professionals for medical advice, diagnosis, or treatment.

## 📄 License

This project is a Next.js reimplementation of the original Cardio-Sonix project by Daniil K.

## 🙏 Acknowledgments

- Original project by Daniil K.
- Built with ❤️ using Next.js and modern web technologies
