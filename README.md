# TERMINAL PORTFOLIO

*Experience my DevOps journey through an interactive command-line interface.*

![Last Commit](https://img.shields.io/github/last-commit/Sai9700128/terminal-portfolio?style=flat-square&color=blue&label=last%20commit)
![JavaScript](https://img.shields.io/badge/JavaScript-85.4%25-yellow?style=flat-square&logo=javascript)
![Languages](https://img.shields.io/badge/Languages-3-blue?style=flat-square)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)

## 🚀 Overview

Welcome to my interactive terminal portfolio! This project reimagines the traditional web portfolio as a fully functional command-line interface. Navigate through my professional journey using familiar bash commands while experiencing a unique blend of creativity and technical prowess.

### ✨ Key Features

- **Fully Interactive Terminal** - Complete with command history, tab completion, and real-time responses
- **Creative Command System** - Explore skills, projects, and experience through intuitive commands
- **Docker Integration Metaphor** - Skills presented as "running containers"
- **Hidden Easter Eggs** - Discover secret achievements with special commands
- **Responsive Design** - Optimized for both desktop and mobile experiences
- **ASCII Art & Animations** - Engaging visual elements that enhance the terminal aesthetic

## 🛠️ Built With

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

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
| `certs` | Quick access to certifications |

### External Links
| Command | Description |
|---------|-------------|
| `github` | Open GitHub profile in new tab |
| `linkedin` | Open LinkedIn profile in new tab |

### Special Commands
| Command | Description |
|---------|-------------|
| `sudo` | 🔐 Easter egg - reveals secret achievements |

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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sai9700128/terminal-portfolio.git
cd terminal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Build for production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
terminal-portfolio/
├── src/
│   ├── components/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Terminal styling
│   └── main.jsx         # Application entry point
├── public/
│   └── My_Pic.jpg       # Profile picture
├── index.html           # HTML template
├── package.json         # Project dependencies
└── README.md           # Project documentation
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
Update the data arrays at the bottom of `App.jsx`:
- `projects` - Your development projects
- `skills` - Technical skills and proficiency
- `experience` - Work history
- `education` - Academic background

## 💡 Usage Tips

1. **Start with `help`** - Get familiar with all available commands
2. **Explore directories** - Use `ls [directory]` to dive into different sections
3. **Try tab completion** - Speed up your navigation
4. **Don't forget `sudo`** - Discover hidden achievements
5. **Check out the pipeline** - See CI/CD visualization with `ls pipeline`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

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

---

<p align="center">
  Made with ❤️ by Sai Kalyan Burra | 
  <a href="https://github.com/Sai9700128">GitHub</a> | 
  <a href="https://www.linkedin.com/in/b-sai-kalyan-a14816221/">LinkedIn</a>
</p>
