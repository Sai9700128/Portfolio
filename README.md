# TERMINAL PORTFOLIO
*Experience my DevOps journey through an interactive command-line interface.*

![Last Commit](https://img.shields.io/github/last-commit/Sai9700128/terminal-portfolio?style=flat-square&color=blue&label=last%20commit)
![JavaScript](https://img.shields.io/badge/JavaScript-85.4%25-yellow?style=flat-square&logo=javascript)
![Languages](https://img.shields.io/badge/Languages-3-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions)

## 🚀 Overview

Welcome to my interactive terminal portfolio! This project reimagines the traditional web portfolio as a fully functional command-line interface. Navigate through my professional journey using familiar bash commands while experiencing a unique blend of creativity and technical prowess.

🔗 **Live Demo**: [https://your-project.vercel.app](https://your-project.vercel.app)

### ✨ Key Features

- **Fully Interactive Terminal** - Complete with command history, tab completion, and real-time responses
- **Creative Command System** - Explore skills, projects, and experience through intuitive commands
- **Docker Integration Metaphor** - Skills presented as "running containers"
- **Hidden Easter Eggs** - Discover secret achievements with special commands
- **Responsive Design** - Optimized for both desktop and mobile experiences
- **ASCII Art & Animations** - Engaging visual elements that enhance the terminal aesthetic
- **Auto-Scroll Indicator** - Smart scroll hints for better user experience
- **Continuous Deployment** - Automatic updates via GitHub Actions and Vercel

## 🛠️ Built With

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

## 🚀 Deployment & CI/CD

### 🌐 Vercel Deployment

This portfolio is automatically deployed to Vercel with every push to the main branch. Here's how it works:

#### Automatic Deployment Flow:
1. **Push Code** → Commit changes to the `main` branch
2. **Vercel Webhook** → Automatically triggered by GitHub
3. **Build Process** → Vercel runs `npm run build`
4. **Deploy** → Site goes live at your custom domain
5. **Preview Deployments** → Every PR gets its own preview URL

#### Setting Up Vercel Deployment:

1. **Connect Repository**
   ```bash
   # Visit vercel.com and sign in with GitHub
   # Click "New Project" → Import your GitHub repository
   # Vercel auto-detects React and configures build settings
   ```

2. **Environment Configuration**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` or `yarn build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install` or `yarn install`

3. **Domain Configuration**
   - Default: `your-project.vercel.app`
   - Custom domain: Add in Vercel dashboard → Settings → Domains

### 🔄 GitHub Actions CI/CD Pipeline

The project includes a robust CI/CD pipeline using GitHub Actions:

```yaml
# .github/workflows/ci-cd.yml
name: Portfolio Website Build

on:
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: checkout code
        uses: actions/checkout@v4

      - name: setup node
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: check node version
        run: node --version

      - name: check npm version
        run: npm --version

      - name: install dependencies
        run: npm install

      - name: Install build
        run: npm run build

```

#### Pipeline Features:
- **Automated Testing** - Runs on every push and PR
- **Code Quality Checks** - ESLint validation
- **Build Verification** - Ensures production build succeeds
- **Artifact Storage** - Stores build outputs for debugging
- **PR Preview Links** - Automatic preview deployments for PRs

### 📊 Deployment Benefits

1. **Zero Downtime Deployments** - Instant rollouts with atomic deployments
2. **Global CDN** - Fast loading times worldwide
3. **Automatic HTTPS** - SSL certificates provisioned automatically
4. **Branch Previews** - Test changes before merging
5. **Rollback Capability** - One-click rollback to previous versions

## 📋 Available Commands

### Core Commands
| Command | Description |
|---------|-------------|
| `help` | Display all available commands with descriptions |
| `whoami` | Show personal information and introduction |
| `pwd` | Print working directory (current location) |
| `clear` | Clear the terminal screen |

### Navigation Commands
| Command | Description |
|---------|-------------|
| `ls` | List all available directories |
| `ls projects` | View all development projects with details |
| `ls skills` | Display technical skills with proficiency bars |
| `ls experience` | Show professional work experience |
| `ls education` | View educational background |
| `ls certifications` | Display professional certifications |
| `ls contact` | Show contact information and links |
| `ls pipeline` | Visualize CI/CD pipeline projects |
| `ls strengths` | List professional strengths |
| `ls weaknesses` | Show areas for growth |

### DevOps Commands
| Command | Description |
|---------|-------------|
| `docker ps` | Show "running containers" (skills metaphor) |

### External Links
| Command | Description |
|---------|-------------|
| `github` | Open GitHub profile in new tab |
| `linkedin` | Open LinkedIn profile in new tab |

## 🎮 Terminal Features

### Tab Completion
- Press `Tab` to auto-complete commands
- Works for both commands and directory names
- Shows available options if multiple matches exist

### Command History
- Use `↑` arrow key to navigate to previous commands
- Use `↓` arrow key to navigate to next commands
- Full session history is maintained

### Interactive Elements
- Real-time command processing
- Smooth scrolling for new outputs
- Color-coded responses (success, warnings, info)
- Animated welcome message on load
- Smart scroll indicator appears on initial load

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sai9700128/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

### Deploy Your Own

1. **Fork this repository** to your GitHub account

2. **Deploy to Vercel** (Recommended)
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```
   Or use the [Vercel Dashboard](https://vercel.com/new) to import your GitHub repository

3. **Configure Environment** (if needed)
   - Add any environment variables in Vercel dashboard
   - Update `vercel.json` for custom configurations

## 📁 Project Structure

```
terminal-portfolio/
├── .github/
│   └── workflows/
│       └── ci-cd.yml         # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── ASCIIArt.jsx     # ASCII art component
│   │   ├── SkillBar.jsx     # Skill progress bars
│   │   ├── contactInfo.jsx  # Contact information
│   │   ├── education.js     # Education data
│   │   ├── experience.js    # Experience data
│   │   ├── projects.js      # Projects data
│   │   └── skills.js        # Skills data
│   ├── App.jsx              # Main React component
│   ├── App.css              # Terminal styling
│   └── main.jsx             # Application entry point
├── public/
│   └── My_Pic.jpg           # Profile picture
├── .gitignore               # Git ignore file
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── vercel.json              # Vercel configuration (optional)
└── README.md                # Project documentation
```

## 🎨 Customization

### Modifying Commands
Commands are defined in the `executeCommand` function within `App.jsx`. To add a new command:

```javascript
const commandHandlers = {
  'your-command': () => {
    addToHistory('Your command output', 'output');
  }
};
```

### Styling
The terminal appearance can be customized in `App.css`. Key classes include:
- `.terminal-container` - Main terminal window
- `.terminal-header` - Terminal title bar  
- `.terminal-body` - Terminal content area
- `.success`, `.warning`, `.highlight` - Text color utilities

### Adding Content
Update the component files in `src/components/`:
- `projects.js` - Your development projects
- `skills.js` - Technical skills and proficiency
- `experience.js` - Work history
- `education.js` - Academic background

## 📈 Performance Optimization

- **Lazy Loading** - Components loaded on demand
- **Minified Build** - Optimized production bundle
- **CDN Delivery** - Static assets served from Vercel's edge network
- **Gzip Compression** - Automatic compression for faster loads
- **Image Optimization** - Profile picture optimized for web

## 🛡️ Security Features

- **HTTPS Only** - Enforced SSL/TLS encryption
- **CSP Headers** - Content Security Policy configured
- **No Sensitive Data** - All information is public-friendly
- **Regular Updates** - Dependencies kept current via Dependabot

## 💡 Usage Tips

1. **Start with `help`** - Get familiar with all available commands
2. **Explore directories** - Use `ls [directory]` to dive into different sections
3. **Try tab completion** - Speed up your navigation
4. **Check out the pipeline** - See CI/CD visualization with `ls pipeline`
5. **Watch for the scroll indicator** - It appears once to guide new visitors

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Workflow
- PRs automatically get preview deployments
- All tests must pass before merging
- Main branch is protected and requires PR reviews

## 📞 Contact

**Sai Kalyan Burra** - DevOps Engineer

- 📧 Email: [burra.sa@northeastern.edu](mailto:burra.sa@northeastern.edu)
- 💼 LinkedIn: [linkedin.com/in/b-sai-kalyan-a14816221](https://www.linkedin.com/in/b-sai-kalyan-a14816221/)
- 🐙 GitHub: [github.com/Sai9700128](https://github.com/Sai9700128)
- 📝 Medium: [medium.com/@saikalyan.burra](https://medium.com/@saikalyan.burra)
- 📍 Location: Boston, MA

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by classic Unix/Linux terminals
- ASCII art generated with custom styling
- Built with passion for DevOps and creative web development
- Deployed with Vercel's excellent platform
- CI/CD powered by GitHub Actions

---

<p align="center">
Made with ❤️ by Sai Kalyan Burra | 
<a href="https://github.com/Sai9700128">GitHub</a> | 
<a href="https://www.linkedin.com/in/b-sai-kalyan-a14816221/">LinkedIn</a>
</p>

<p align="center">
  <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSai9700128%2Fterminal-portfolio&label=Visitors&countColor=%2337d67a" alt="Visitors" />
</p>