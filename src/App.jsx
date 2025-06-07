import React, { useState, useRef, useEffect } from 'react';
import ASCIIArt from './components/ASCIIArt';
import { experience } from './components/experience';
import { education } from './components/education';
import { projects } from './components/projects';
import { skills } from './components/skills';
import ContactInfo from './components/contactInfo';
import { SkillBar } from './components/SkillBar';


// Import the CSS file
import './App.css';

const App = () => {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Show scroll indicator initially after content loads and terminal is scrolled down
  useEffect(() => {
    const checkForScroll = () => {
      if (terminalBodyRef.current && !hasUserScrolled) {
        const { scrollHeight, clientHeight } = terminalBodyRef.current;
        // First scroll to bottom to show all initial content
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;

        // Then check if there's content to scroll back up
        if (scrollHeight > clientHeight) {
          // Small delay to ensure scroll completes before showing indicator
          setTimeout(() => {
            setShowScrollIndicator(true);
          }, 100);
        }
      }
    };

    // Run check after terminal history updates
    checkForScroll();
  }, [terminalHistory, hasUserScrolled]);

  // Hide scroll indicator once user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!hasUserScrolled && terminalBodyRef.current) {
        const { scrollTop } = terminalBodyRef.current;
        if (scrollTop > 5) { // User has scrolled
          setHasUserScrolled(true);
          setShowScrollIndicator(false);
        }
      }
    };

    const terminal = terminalBodyRef.current;
    if (terminal) {
      terminal.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (terminal) {
        terminal.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasUserScrolled]);

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Welcome message on mount
  useEffect(() => {
    if (!welcomeShown) {
      setWelcomeShown(true);
      const timer = setTimeout(() => {
        addToHistory('echo "Welcome! Type \'help\' to explore my DevOps journey"', 'command');
        const timer2 = setTimeout(() => {
          addToHistory('Welcome! Type \'help\' to explore my DevOps journey', 'success');
        }, 500);
        return () => clearTimeout(timer2);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [welcomeShown]); // Add welcomeShown to dependencies

  const addToHistory = (content, type = 'output') => {
    setTerminalHistory(prev => [...prev, { content, type, id: Date.now() }]);
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add command to history
    addToHistory(cmd, 'command');

    // Add to command history for arrow key navigation
    if (cmd.trim() !== '') {
      setCommandHistory(prev => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    // Command handlers
    const commandHandlers = {
      'docker ps': () => {
        addToHistory(
          `<div style="border-bottom: 1px solid #2a3f5f; padding-bottom: 5px; margin-bottom: 10px;">
            <span style="display: inline-block; width: 250px;">CONTAINER NAMES</span>
            <span>STATUS</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 250px;">terraform-infrastructure</span>
            <span class="success">Up 8 months (S3, DynamoDB, Modules)</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 250px;">kubernetes-orchestration</span>
            <span class="success">Up 4 months (Helm charts ready)</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 250px;">cicd-pipelines</span>
            <span class="success">Up 8 months (GitHub Actions, Jenkins)</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 250px;">monitoring-stack</span>
            <span class="success">Up 6 months (Prometheus, CloudWatch)</span>
          </div>
          <div style="margin-bottom: 5px;">
            <span style="display: inline-block; width: 250px;">version-control-collab</span>
            <span class="success">Up 3 years (Git, GitHub, BitBucket)</span>
          </div>`,
          'html'
        );
      },


      // Alternative version with sections
      help: () => {
        addToHistory(
          `<div style="color: #64ffda; font-size: 18px; margin-bottom: 20px; border-bottom: 1px solid #2a3f5f; padding-bottom: 10px;">
      📚 Available Commands
    </div>
    
    <div style="margin-bottom: 20px;">
      <div style="color: #64ffda; margin-bottom: 10px; font-size: 14px;">📋 Basic Commands</div>
      <div style="margin-left: 20px; display: grid; gap: 8px;">
        <div><span class="success" style="display: inline-block; width: 100px;">help</span> - Show this help message</div>
        <div><span class="success" style="display: inline-block; width: 100px;">whoami</span> - Display personal information</div>
        <div><span class="success" style="display: inline-block; width: 100px;">pwd</span> - Show current directory</div>
        <div><span class="success" style="display: inline-block; width: 100px;">clear</span> - Clear terminal screen</div>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <div style="color: #64ffda; margin-bottom: 10px; font-size: 14px;">📁 Navigation</div>
      <div style="margin-left: 20px; display: grid; gap: 8px;">
        <div><span class="success" style="display: inline-block; width: 100px;">ls [dir]</span> - List directory contents</div>
        <div style="margin-left: 110px; color: #8892b0; font-size: 12px;">
          Available: projects, skills, experience, education, contact,<br/>
          pipeline, certifications, strengths, weaknesses
        </div>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <div style="color: #64ffda; margin-bottom: 10px; font-size: 14px;">🚀 DevOps & Professional</div>
      <div style="margin-left: 20px; display: grid; gap: 8px;">
        <div><span class="success" style="display: inline-block; width: 100px;">docker ps</span> - Show running containers (skills)</div>
      </div>
    </div>
    
    <div style="margin-bottom: 20px;">
      <div style="color: #64ffda; margin-bottom: 10px; font-size: 14px;">🔗 External Links</div>
      <div style="margin-left: 20px; display: grid; gap: 8px;">
        <div><span class="success" style="display: inline-block; width: 100px;">github</span> - Open GitHub profile</div>
        <div><span class="success" style="display: inline-block; width: 100px;">linkedin</span> - Open LinkedIn profile</div>
      </div>
    </div>
    
    
    <div style="margin-top: 20px; padding: 15px; background: rgba(100, 255, 218, 0.1); border: 1px solid #64ffda; border-radius: 5px;">
      <div style="color: #64ffda; margin-bottom: 5px;">💡 Pro Tips:</div>
      <div style="color: #8892b0; font-size: 12px;">
        • Press <span class="highlight">Tab</span> for auto-completion<br/>
        • Use <span class="highlight">↑/↓</span> arrows to navigate command history<br/>
        • Try <span class="highlight">ls</span> followed by a directory name to explore
      </div>
    </div>`,
          'html'
        );
      },
      pwd: () => {
        addToHistory(`/home/sai/`);
      },
      whoami: () => {
        addToHistory(
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '2px solid #64ffda',
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
            }}>
              <img
                src="/My_Pic.jpg"
                alt="Sai Kalyan Burra"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #64ffda, #4CAF50); display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; color: #0d1117;">SK</div>';
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <ProjectCard
                project={{
                  title: "→ Sai Kalyan Burra - DevOps Engineer",
                  subtitle: "🎓 MS Software Engineering @ Northeastern University",
                  description: "📍 Boston, MA · 📧 burra.sa@northeastern.edu",
                  details: ["🚀 Automating infrastructure, one pipeline at a time!"]
                }}
              />
            </div>
          </div>,
          'component'
        );
      },

      github: () => {
        window.open('https://github.com/Sai9700128', '_blank');
        addToHistory('Opening GitHub profile in new tab...', 'success');
      },
      linkedin: () => {
        window.open('https://www.linkedin.com/in/b-sai-kalyan-a14816221/', '_blank');
        addToHistory('Opening LinkedIn profile in new tab...', 'success');
      },
      clear: () => {
        setTerminalHistory([]);
      },
      //       sudo: () => {
      //         addToHistory(
      //           `<span class="warning">[sudo] password for sai: </span><span style="color: #0d1117;">**********</span>
      // <span class="success">Access granted! Welcome to the inner sanctum 🔓</span>`,
      //           'html'
      //         );
      //         addToHistory(
      //           <ProjectCard
      //             project={{
      //               title: "SECRET: Infrastructure Cost Optimization",
      //               description: "Achieved 40% cloud cost reduction through:",
      //               details: [
      //                 "Implemented auto-scaling policies",
      //                 "Optimized resource allocation",
      //                 "Leveraged spot instances strategically",
      //                 "Automated resource cleanup scripts"
      //               ],
      //               isSecret: true
      //             }}
      //           />,
      //           'component'
      //         );
      //       },
      // strengths: () => {
      //   addToHistory(
      //     <div className="project-card">
      //       <div className="success">💪 Professional Strengths</div>
      //       <div style={{ marginTop: '15px', color: '#8892b0' }}>
      //         <div style={{ marginBottom: '10px' }}>
      //           <span className="highlight">🚀 Technical Leadership:</span>
      //           <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      //             • Led cross-functional teams and reduced merge conflicts by 40%<br />
      //             • Strong experience in DevOps automation and infrastructure optimization
      //           </div>
      //         </div>
      //         <div style={{ marginBottom: '10px' }}>
      //           <span className="highlight">🔧 Problem-Solving:</span>
      //           <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      //             • Proven track record of achieving 40% cost reduction through strategic optimization<br />
      //             • Expert in troubleshooting complex cloud infrastructure issues
      //           </div>
      //         </div>
      //         {/* <div style={{ marginBottom: '10px' }}>
      //           <span className="highlight">📚 Continuous Learning:</span>
      //           <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      //             • Currently pursuing MS in Software Engineering at Northeastern<br />
      //             • Working on microservices architecture and cloud-native applications<br />
      //             •
      //           </div>
      //         </div> */}
      //         <div style={{ marginBottom: '10px' }}>
      //           <span className="highlight">🤝 Collaboration:</span>
      //           <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      //             • Introduced GitHub-based workflows and improved team collaboration<br />
      //             • Strong communication skills across technical and non-technical stakeholders
      //           </div>
      //         </div>
      //       </div>
      //     </div>,
      //     'component'
      //   );
      // },
      weaknesses: () => {
        addToHistory(
          <div className="project-card">
            <div className="warning">🎯 Areas for Growth</div>
            <div style={{ marginTop: '15px', color: '#8892b0' }}>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">⏰ Perfectionism:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Sometimes spend too much time optimizing code/infrastructure beyond requirements<br />
                  • <span className="success">Working on:</span> Setting clear time boundaries and focusing on MVP delivery
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🗣️ Public Speaking:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Still developing confidence in large group presentations<br />
                  • <span className="success">Working on:</span> Joined Toastmasters and actively seeking speaking opportunities
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">📊 Business Domain Knowledge:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Strong on technical side, but learning more about business impact of technical decisions<br />
                  • <span className="success">Working on:</span> Taking business courses and working closely with product teams
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🔄 Delegation:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Tendency to take on too many tasks personally instead of delegating<br />
                  • <span className="success">Working on:</span> Improving trust in team members and focusing on mentoring
                </div>
              </div>
            </div>
          </div>,
          'component'
        );
      },
      ls: () => {
        addToHistory(
          `<span class="success">projects/</span>    <span class="success">skills/</span>      <span class="success">experience/</span>
<span class="success">education/</span>  <span class="success">certifications/</span> <span class="success">contact/</span>     
<span class="success">pipeline/</span>   <span class="success">strengths/</span>   <span class="success">weaknesses/</span>`
        );
      }
    };

    // Handle ls command with directory paths
    if (trimmedCmd.startsWith('ls ')) {
      const targetDir = trimmedCmd.slice(3).trim();

      if (targetDir === 'projects') {
        projects.forEach(project => {
          addToHistory(
            <ProjectCard key={project.id} project={project} />,
            'component'
          );
        });
      } else if (targetDir === 'skills') {
        skills.forEach(skill => {
          addToHistory(
            <SkillBar key={skill.id} skill={skill} />,
            'component'
          );
        });
      } else if (targetDir === 'experience') {
        experience.forEach(exp => {
          addToHistory(
            <ProjectCard key={exp.id} project={exp} />,
            'component'
          );
        });
      } else if (targetDir === 'education') {
        education.forEach(edu => {
          addToHistory(
            <ProjectCard key={edu.id} project={edu} />,
            'component'
          );
        });
      } else if (targetDir === 'contact') {
        addToHistory(<ContactInfo />, 'component');
      } else if (targetDir === 'pipeline') {
        addToHistory('Loading CI/CD Pipeline Visualization...', 'success');
        addToHistory(<Pipeline />, 'component');
      } else if (targetDir === 'certifications') {
        addToHistory(
          <>
            <div className="project-card">
              <span className="cert-badge">Google Cloud Certified - Cloud Digital Leader</span>
              <span style={{ color: '#8892b0', fontSize: '12px', marginLeft: '10px' }}>(Valid: Jan 2023 - Jan 2026)</span>
            </div>
            <div className="project-card">
              <span className="cert-badge">Oracle Cloud Infrastructure 2023 - Architect Associate</span>
              <span style={{ color: '#8892b0', fontSize: '12px', marginLeft: '10px' }}>(Valid: Aug 2023 - Aug 2025)</span>
            </div>
          </>,
          'component'
        );
      } else if (targetDir === 'strengths') {
        addToHistory(
          <div className="project-card">
            <div className="success">💪 Professional Strengths</div>
            <div style={{ marginTop: '15px', color: '#8892b0' }}>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🚀 Technical Leadership:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Led cross-functional teams and reduced merge conflicts by 40%<br />
                  • Strong experience in DevOps automation and infrastructure optimization
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🔧 Problem-Solving:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Proven track record of achieving 40% cost reduction through strategic optimization<br />
                  • Expert in troubleshooting complex cloud infrastructure issues
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">📚 Continuous Learning:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Currently pursuing MS in Software Engineering at Northeastern<br />
                  • Working on microservices architecture and cloud-native applications<br />
                  •
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🤝 Collaboration:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Introduced GitHub-based workflows and improved team collaboration<br />
                  • Strong communication skills across technical and non-technical stakeholders
                </div>
              </div>
            </div>
          </div>,
          'component'
        );
      } else if (targetDir === 'weaknesses') {
        addToHistory(
          <div className="project-card">
            <div className="warning">🎯 Areas for Growth</div>
            <div style={{ marginTop: '15px', color: '#8892b0' }}>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">⏰ Perfectionism:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Sometimes spend too much time optimizing code/infrastructure beyond requirements<br />
                  • <span className="success">Working on:</span> Setting clear time boundaries and focusing on MVP delivery
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🗣️ Public Speaking:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Still developing confidence in large group presentations<br />
                  • <span className="success">Working on:</span> Joined Toastmasters and actively seeking speaking opportunities
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">📊 Business Domain Knowledge:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Strong on technical side, but learning more about business impact of technical decisions<br />
                  • <span className="success">Working on:</span> Taking business courses and working closely with product teams
                </div>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <span className="highlight">🔄 Delegation:</span>
                <div style={{ marginLeft: '20px', marginTop: '5px' }}>
                  • Tendency to take on too many tasks personally instead of delegating<br />
                  • <span className="success">Working on:</span> Improving trust in team members and focusing on mentoring
                </div>
              </div>
            </div>
          </div>,
          'component'
        );
      } else if (targetDir === '' || targetDir === '~') {
        addToHistory(
          `<span class="success">projects/</span>    <span class="success">skills/</span>      <span class="success">experience/</span>
<span class="success">education/</span>  <span class="success">certifications/</span> <span class="success">contact/</span>     
<span class="success">pipeline/</span>   <span class="success">strengths/</span>   <span class="success">weaknesses/</span>`
        );
      } else {
        addToHistory(`<span class="warning">ls: cannot access '${targetDir}': No such file or directory</span>`);
      }
      return;
    }

    // Handle multi-word commands
    if (trimmedCmd === 'docker ps') {
      commandHandlers['docker ps']();
      return;
    }

    // Execute command
    if (commandHandlers[trimmedCmd]) {
      commandHandlers[trimmedCmd]();
    } else if (trimmedCmd) {
      addToHistory(
        `<span class="warning">bash: ${trimmedCmd}: command not found</span>
<span style="color: #8892b0;">Type 'help' to see available commands</span>`
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const currentValue = inputValue.toLowerCase();
      const availableCommands = ['help', 'whoami', 'ls', 'pwd', 'docker ps', 'github', 'linkedin', 'clear', 'sudo'];
      const availableDirs = ['projects', 'skills', 'experience', 'education', 'contact', 'pipeline', 'certifications', 'strengths', 'weaknesses'];

      // Handle ls command tab completion
      if (currentValue.startsWith('ls ')) {
        const partial = currentValue.slice(3);
        const matches = availableDirs.filter(dir => dir.startsWith(partial));
        if (matches.length === 1) {
          setInputValue(`ls ${matches[0]}`);
        } else if (matches.length > 1) {
          addToHistory(matches.join('  '));
        }
      } else {
        const matches = availableCommands.filter(cmd => cmd.startsWith(currentValue));
        if (matches.length === 1) {
          setInputValue(matches[0]);
        } else if (matches.length > 1) {
          addToHistory(matches.join('  '));
        }
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputValue('');
        } else {
          setHistoryIndex(newIndex);
          setInputValue(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="terminal-container">
      <TerminalHeader />
      <TerminalBody ref={terminalBodyRef}>
        <ASCIIArt />

        {/* Initial display */}
        <OutputLine prompt="sai@devops:~$" command="whoami" />
        <div className="output">
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{
              width: '180px',
              height: '180px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '2px solid #64ffda',
              flexShrink: 0,
              boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)'
            }}>
              <img
                src="/My_Pic.jpg"
                alt="Sai Kalyan Burra"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #64ffda, #4CAF50); display: flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; color: #0d1117;">SK</div>';
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <ProjectCard
                project={{
                  title: "→ Sai Kalyan Burra - DevOps Engineer",
                  subtitle: "🎓 MS Software Engineering @ Northeastern University",
                  description: "📍 Boston, MA · 📧 burra.sa@northeastern.edu",
                  details: ["🚀 Automating infrastructure, one pipeline at a time!"]
                }}
              />
            </div>
          </div>
        </div>

        <OutputLine prompt="sai@devops:~$" command="ls -la /skills/cloud" />
        <div className="output">
          <div style={{ color: '#64ffda', marginBottom: '10px' }}>total 16</div>
          <div>drwxr-xr-x  5 sai devops 4096 Jun  4 <span className="highlight">aws/</span></div>
          <div style={{ marginLeft: '30px' }}>├── EC2, S3, IAM, Lambda</div>
          <div style={{ marginLeft: '30px' }}>├── RDS, VPC, Route 53</div>
          <div style={{ marginLeft: '30px' }}>└── ECS, EKS, CloudWatch</div>
          <div>drwxr-xr-x  2 sai devops 4096 Jun  4 <span className="highlight">gcp/</span></div>
          <div style={{ marginLeft: '30px' }}>└── Compute Engine, Cloud Storage</div>
          <div>drwxr-xr-x  1 sai devops 4096 Jun  4 <span className="highlight">digital-ocean/</span></div>
        </div>

        <OutputLine prompt="sai@devops:~$" command='docker ps --format "table {{.Names}}\t{{.Status}}"' />
        <div className="output">
          <div style={{ borderBottom: '1px solid #2a3f5f', paddingBottom: '5px', marginBottom: '10px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>CONTAINER NAMES</span>
            <span>STATUS</span>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>terraform-infrastructure</span>
            <span className="success">Up 6 months (S3, DynamoDB, Modules)</span>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>kubernetes-orchestration</span>
            <span className="success">Up 4 months (Helm charts ready)</span>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>cicd-pipelines</span>
            <span className="success">Up 8 months (GitHub Actions, Jenkins)</span>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>monitoring-stack</span>
            <span className="success">Up 6 months (Prometheus, CloudWatch)</span>
          </div>
          <div style={{ marginBottom: '5px' }}>
            <span style={{ display: 'inline-block', width: '250px' }}>version-control-collab</span>
            <span className="success">Up 3 years (Git, GitHub, BitBucket)</span>
          </div>
        </div>

        <OutputLine prompt="sai@devops:~$" command="terraform show certifications" />
        <div className="output">
          <div className="project-card">
            <span className="cert-badge">Google Cloud Certified - Cloud Digital Leader</span>
            <span style={{ color: '#8892b0', fontSize: '12px' }}>(Valid: Jan 2023 - Jan 2026)</span>
          </div>
          <div className="project-card">
            <span className="cert-badge">Oracle Cloud Infrastructure 2023 - Architect Associate</span>
            <span style={{ color: '#8892b0', fontSize: '12px' }}>(Valid: Aug 2023 - Aug 2025)</span>
          </div>
        </div>

        {/* Terminal History */}
        {terminalHistory.map(entry => {
          if (entry.type === 'command') {
            return <OutputLine key={entry.id} prompt="sai@devops:~$" command={entry.content} />;
          } else if (entry.type === 'component') {
            return <div key={entry.id} className="output">{entry.content}</div>;
          } else if (entry.type === 'html') {
            return <div key={entry.id} className="output" dangerouslySetInnerHTML={{ __html: entry.content }} />;
          } else {
            return <div key={entry.id} className="output" dangerouslySetInnerHTML={{ __html: entry.content }} />;
          }
        })}

        {/* Input Line */}
        <div className="input-line">
          <span className="prompt">sai@devops:~$</span>
          <input
            ref={inputRef}
            type="text"
            id="terminal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' for available commands"
            autoFocus
          />
          <span className="cursor"></span>
        </div>

        <div className="help-hint" style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          color: '#64ffda',
          opacity: 0.8,
          fontSize: '12px',
          background: 'rgba(13, 17, 23, 0.9)',
          padding: '8px 12px',
          borderRadius: '4px',
          border: '1px solid #2a3f5f',
          animation: 'pulseHint 2s infinite'
        }}>
          Try commands: ls skills | ls projects | ls experience | ls certifications | ls pipeline | ls contact| pwd
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <div
            className="scroll-indicator"
            style={{
              position: 'fixed',
              bottom: '30px',
              left: '30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#64ffda',
              opacity: 0.9,
              cursor: 'pointer',
              animation: 'bounce 2s infinite',
              zIndex: 1000,
              background: 'rgba(13, 17, 23, 0.95)',
              padding: '10px 15px',
              borderRadius: '6px',
              border: '1px solid #64ffda',
              boxShadow: '0 0 15px rgba(100, 255, 218, 0.3)'
            }}
            onClick={() => {
              terminalBodyRef.current?.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
              setHasUserScrolled(true);
              setShowScrollIndicator(false);
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '4px' }}>↑</div>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>Scroll up</span>
          </div>
        )}
      </TerminalBody>
    </div>
  );
};

// Component definitions
const TerminalHeader = () => (
  <div className="terminal-header">
    <div className="terminal-button red"></div>
    <div className="terminal-button yellow"></div>
    <div className="terminal-button green"></div>
    <div className="terminal-title">sai@devops:~</div>
  </div>
);

const TerminalBody = React.forwardRef(({ children }, ref) => (
  <div className="terminal-body" ref={ref}>
    {children}
  </div>
));



const OutputLine = ({ prompt, command }) => (
  <div className="output-line">
    <span className="prompt">{prompt}</span> <span className="command">{command}</span>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className={`project-card ${project.isSecret ? 'secret' : ''}`}>
    <div className="success">{project.title}</div>
    {project.status && <div className="warning">{project.status}</div>}
    {project.subtitle && <div style={{ marginTop: '10px' }}>{project.subtitle}</div>}
    {project.description && <div style={{ marginTop: '10px' }}>{project.description}</div>}
    {project.techStack && (
      <div className="tech-stack">
        {project.techStack.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>
    )}
    {project.details && (
      <div style={{ marginTop: '10px', color: '#8892b0' }}>
        {project.details.map((detail, i) => (
          <div key={i}>• {detail}</div>
        ))}
      </div>
    )}
  </div>
);



const Pipeline = () => (
  <div className="pipeline-section">
    <h2 className="pipeline-title">CI/CD Pipeline Projects</h2>
    <div className="pipeline">
      {['Source', 'Build', 'Test', 'Deploy', 'Monitor'].map((stage, i) => (
        <div key={i} className="stage">
          <div className="stage-header">
            <div className="stage-name">{stage}</div>
          </div>
          <div className="stage-icon">
            {stage === 'Source' && '📦'}
            {stage === 'Build' && '🔨'}
            {stage === 'Test' && '🧪'}
            {stage === 'Deploy' && '🚀'}
            {stage === 'Monitor' && '📊'}
          </div>
          <div className="stage-status"></div>
          <div style={{ fontSize: '12px', textAlign: 'center', color: '#8892b0' }}>
            {stage === 'Source' && 'GitHub\nSpring Boot\nMicroservices'}
            {stage === 'Build' && 'Packer AMI\nDocker Images\nMaven/Gradle'}
            {stage === 'Test' && 'TDD\nSecurity Scan\n99% Uptime'}
            {stage === 'Deploy' && 'ECS Fargate\nRoute 53\nALB'}
            {stage === 'Monitor' && 'CloudWatch\nPrometheus\nElasticSearch'}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default App;
