# React Codepen Clone

A live code editor built with React, mimicking the core functionality of Codepen. Supports HTML, CSS, and JavaScript with real-time preview.

![React Codepen Clone Demo](demo.gif) <!-- Add a demo gif/screenshot later -->

## Features

- 🚀 Real-time code editing and preview
- 📦 Supports HTML, CSS & JavaScript
- 🎨 Syntax highlighting
- 📱 Responsive design
- 🔄 Auto-run with debouncing
- 📂 Local storage for saving work
- 🌈 Theme support (light/dark mode)

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm or yarn

### Installation

1. Clone the repository:
   git clone https://github.com/AhmedrAshraf/React-Codepen-Clone.git
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Running the App
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open http://localhost:3000 to view in browser.

## Project Structure
```bash
/src
├── components/    # Reusable components
│   ├── Editor/   # Code editor components
│   └── App/      # Control buttons
├── contexts/      # React contexts
├── hooks/         # Custom hooks
├── utils/         # Utility functions
├── App.js         # Main component
└── index.js       # Entry point
```

## Built With
- React

- Monaco Editor (VS Code editor component)

- Codemirror (alternative editor option)

- Styled Components

- React Split Pane

## Available Scripts
```bash
npm start - Runs the app in development mode

npm test - Launches test runner

npm run build - Builds for production

npm run eject - Ejects from CRA (advanced)
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
MIT

## Key Customization Points:

1. Replace `ahmedrashraf` with your GitHub username
2. Add a demo gif/screenshot (create a `/public/demo.gif` file)
3. Update the "Built With" section with your actual dependencies
4. Add any special deployment instructions if needed
5. Include environment variables if your project uses them

## Recommended Extras:

- Add a "Troubleshooting" section if you have common issues
- Include a "Roadmap" section for planned features
- Add acknowledgments if you followed any tutorials



lines added  by abdul samad  (101 to 105)
Responsive Design Enhancement:
"Improved the mobile view layout to ensure better accessibility on smaller devices."

Local Storage Optimization:
"Optimized data saving to local storage, reducing unnecessary updates."
