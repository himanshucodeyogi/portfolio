

# 🚀 Himanshu's 3D Portfolio Website

## Overview
A stunning single-page 3D portfolio with a dark futuristic theme (deep blacks, neon cyan/purple accents), featuring a persistent Three.js canvas background with HTML content scrolling over it. Glassmorphism cards, Framer Motion scroll animations, and interactive 3D elements throughout.

## Tech Stack
- React + Vite + TypeScript
- @react-three/fiber@^8.18 + @react-three/drei@^9.122.0 + three@^0.133
- Framer Motion for scroll animations
- Tailwind CSS for styling

## Color System
- Background: Deep black (#0a0a0f)
- Accents: Neon cyan (#00f0ff) and purple (#8b5cf6)
- Cards: Glassmorphism (backdrop-blur, semi-transparent dark backgrounds)

## Sections

### 1. Hero Section
- **3D**: Slowly rotating wireframe globe/particle network that reacts to cursor movement
- **Content**: Name, animated typing subtitle, 2-line professional intro
- **CTAs**: "Explore My Work" (cyan gradient) + "View Resume" (outlined)

### 2. About Me Section
- **3D**: Floating geometric shapes (torus, icosahedron) in background
- **Content**: 3 rich paragraphs covering academics at S.A.M. Inter College, CodeYogi Foundation internship, and broad tech interests (web, game dev, AI, ethical hacking)

### 3. Skills Section
- **3D**: Floating animated skill spheres/orbs
- **Content**: Grouped skill cards with descriptions:
  - Frontend Architecture (React, React Native, JS, HTML5, Tailwind)
  - Backend & Databases (Node, Express, MongoDB)
  - Tools & Fundamentals (Git, GitHub, AI-Assisted Coding)

### 4. Projects Section
- **3D**: Tiltable glowing project cards with hover effects
- **Content**: 4 projects with rich 2-sentence descriptions + 3 feature bullet points each + live links:
  - Blood Donor Connect
  - Sug Solh
  - ThinkDual
  - IITM Info Bot

### 5. Contact & Footer
- **3D**: Rotating glowing geometric element
- **Content**: Inviting paragraph, styled contact form (Name, Email, Subject, Message), social links (GitHub, LinkedIn, Email), copyright notice, tech badge

## Architecture
- `App.tsx` — Canvas + ScrollContainer layout
- `components/Scene.tsx` — Three.js canvas with all 3D elements responding to scroll position
- `components/Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Contact.tsx` — HTML overlay sections
- `components/three/` — Individual 3D components (Globe, FloatingShapes, SkillSpheres, etc.)
- Smooth scroll with Framer Motion `useScroll` driving both HTML animations and 3D scene transitions

