# Setup Instructions

## Node.js Installation

This project uses **Node.js v24.11.0 LTS** installed via NVM (Node Version Manager).

### Using NVM

Every time you open a new terminal, you need to load NVM before running npm commands:

```bash
# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verify Node.js version
node --version  # Should show v24.11.0
npm --version   # Should show v11.6.1
```

### Quick Commands

```bash
# Load NVM and start development server
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev

# Load NVM and build for production
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run build

# Load NVM and install dependencies
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm install
```

### Permanent Setup (Optional)

NVM has already been added to your `~/.bashrc`. To make it permanent:

1. Close and reopen your terminal, OR
2. Run: `source ~/.bashrc`

After this, NVM will be automatically loaded in every new terminal session.

## Project Commands

- `npm run dev` - Start development server on http://localhost:8080
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Dependencies Installed

All required dependencies have been installed:
- React 18.3.1
- Vite 5.4.21
- TypeScript 5.9.3
- Tailwind CSS 3.4.18
- Radix UI components
- All missing dependencies (cssnano, terser, etc.)

## Build Status

✅ Build successful
✅ Development server running on port 8080
✅ All dependencies installed
