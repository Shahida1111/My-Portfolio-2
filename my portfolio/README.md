# Angular Portfolio Website

A modern, minimalist portfolio website built with Angular 17+ featuring smooth animations, responsive design, and clean code architecture.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Component-Based**: Modular Angular components for easy customization
- **Smooth Scrolling**: Navigate sections with smooth scroll behavior
- **Contact Form**: Functional contact form with validation
- **Timeline Experience**: Professional timeline layout for work history
- **Project Showcase**: Grid layout for displaying your projects
- **Skills Section**: Visual skill bars with percentage indicators
- **Type Animation**: Rotating role titles in hero section
- **SEO Friendly**: Optimized structure for search engines

## 📦 Tech Stack

- Angular 17+
- TypeScript
- SCSS
- Standalone Components
- Reactive Forms

## 🛠️ Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Setup Steps

1. **Install Angular CLI** (if not already installed)
```bash
npm install -g @angular/cli
```

2. **Create a new Angular project**
```bash
ng new portfolio --routing --style=scss
cd portfolio
```

3. **Copy the component files**
   - Copy all files from this package into your Angular project
   - Match the folder structure exactly

4. **Install dependencies**
```bash
npm install
```

5. **Run the development server**
```bash
ng serve
```

6. **Open your browser**
   - Navigate to `http://localhost:4200/`

## 🎨 Customization Guide

### 1. Personal Information

#### Hero Section (`hero.component.ts`)
```typescript
name = 'Your Name';
roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

#### About Section (`about.component.ts`)
Update the `aboutInfo` object with your information:
```typescript
aboutInfo = {
  title: 'About Me',
  description: 'Your description...',
  // Update stats
  stats: [
    { number: '3+', label: 'Years Experience' },
    // ... more stats
  ]
};
```

#### Skills Section (`skills.component.ts`)
Update the `skillCategories` array:
```typescript
skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 90 },
      // Add your skills
    ]
  }
];
```

#### Projects Section (`projects.component.ts`)
Update the `projects` array:
```typescript
projects = [
  {
    title: 'Your Project',
    description: 'Description...',
    image: 'assets/images/project1.jpg',
    technologies: ['Tech1', 'Tech2'],
    liveLink: 'https://...',
    githubLink: 'https://github.com/...'
  }
];
```

#### Experience Section (`experience.component.ts`)
Update the `experiences` array with your work history.

#### Contact Section (`contact.component.ts`)
Update contact information:
```typescript
contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
];
```

### 2. Colors & Styling

The primary color is defined throughout the SCSS files. To change it:

**Global Color Variables** (create `src/styles/_variables.scss`):
```scss
$primary-color: #4a90e2;
$primary-dark: #357abd;
$text-dark: #1a1a1a;
$text-light: #666;
```

Then find and replace `#4a90e2` with your preferred color across all `.scss` files.

### 3. Images

#### Add Your Photos
1. Create folder: `src/assets/images/`
2. Add your images:
   - Profile photo
   - Project screenshots
   - Company logos

#### Update Image Paths
In `hero.component.html`, uncomment and update:
```html
<img src="assets/images/your-photo.jpg" alt="Your Name">
```

### 4. Fonts

To change fonts, update in `styles.scss`:
```scss
body {
  font-family: 'Your Font', sans-serif;
}
```

Add Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### 5. Contact Form Integration

The contact form currently simulates submission. To make it functional:

#### Option 1: EmailJS
```bash
npm install @emailjs/browser
```

Update `contact.component.ts`:
```typescript
import emailjs from '@emailjs/browser';

onSubmit() {
  emailjs.send('service_id', 'template_id', this.formData, 'public_key')
    .then(() => {
      this.submitSuccess = true;
    });
}
```

#### Option 2: Formspree
Update form action in `contact.component.html`:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

#### Option 3: Custom Backend
Create your own API endpoint and update the submission logic.

## 📱 Adding More Sections

To add a new section:

1. **Generate component**
```bash
ng generate component components/new-section --standalone
```

2. **Add to app.component.html**
```html
<app-new-section id="new-section"></app-new-section>
```

3. **Add to navbar links** (`navbar.component.ts`)
```typescript
navLinks = [
  // ... existing links
  { name: 'New Section', href: '#new-section' }
];
```

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deploy to Netlify
1. Create account at netlify.com
2. Drag and drop the `dist/portfolio` folder
3. Your site is live!

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
ng add angular-cli-ghpages
ng deploy --base-href=/repository-name/
```

## 🎯 Performance Tips

1. **Optimize Images**
   - Use WebP format
   - Compress images (use TinyPNG, ImageOptim)
   - Use appropriate sizes

2. **Lazy Loading**
   - Images load as you scroll
   - Consider lazy loading non-critical components

3. **Minification**
   - Production build automatically minifies
   - Enable compression on your hosting

## 📝 SEO Optimization

Update `index.html`:
```html
<title>Your Name - Software Developer Portfolio</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
```

Add structured data for better SEO.

## 🐛 Troubleshooting

### Port Already in Use
```bash
ng serve --port 4201
```

### Module Not Found
```bash
npm install
```

### Styles Not Loading
Check that `styles.scss` is included in `angular.json`.

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Found a bug or want to add a feature? Feel free to fork and submit a PR!

## 📧 Support

If you need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ using Angular**