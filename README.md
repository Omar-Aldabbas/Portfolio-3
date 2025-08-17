# Portfolio Website

A personal portfolio website built with **React** and **React Router**, showcasing projects, certifications, and contact information.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://omar-aldabbas.github.io/Portfolio-3/#/)

**Design inspired by:** [Figma Portfolio Template](https://www.figma.com/community/file/1164933568884615740/portfolio)


## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  

## About

This portfolio website demonstrates my skills as a **Full-Stack Developer**, with expertise in **JavaScript, React, Node.js, MongoDB**, and **data analysis**. It includes:

- Projects section with “view more” functionality  
- Certifications section  
- Social links and contact form  
- Fully responsive design for mobile and desktop  
- Light/Dark theme toggle  

## Features

- **Home Page**: Overview of skills, projects, and contact info (form hidden).  
- **Projects Page**: Full list of projects with images, tags, and descriptions.  
- **Certifications Page**: List of certifications and achievements.  
- **Contact Page**: Interactive contact form with validation and toast notifications.  
- **404 Page**: Friendly “Not Found” page with a return home button.  
- **Responsive Navigation**: Mobile-friendly hamburger menu.  
- **Theme Toggle**: Light and dark mode support.  

## Technologies Used

- **Frontend**: React, CSS  
- **Routing**: React Router DOM  
- **State Management**: React Hooks (useState, useEffect)  
- **Notifications**: react-hot-toast  
- **Icons**: lucide-react  

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Omar-Aldabbas/portfolio-3.git


## Usage

- **Home Page**: `/` – Overview of skills, highlights, and contact info (form hidden on home).  
- **Projects Page**: `/projects` – Displays all projects with details and tags.  
- **About Page**: `/about` – Information about me and my background.  
- **Contact Page**: `/contact` – Full contact form and social links.  
- **404 Page**: Any undefined route – Shows a friendly “Not Found” page.  

## Folder Structure

```plaintext
portfolio/
├─ public/                  # Static assets like images and favicon
├─ src/
│  ├─ components/           # Reusable components (Navbar, Footer, Contact, etc.)
│  ├─ pages/                # Page components (Home, Projects, About, Contact, NotFound)
│  ├─ styles/               # CSS files
│  ├─ App.jsx               # Main app component with routing
│  └─ index.js              # Entry point
├─ package.json             # Project dependencies and scripts
└─ README.md                # Project documentation


