# DictSage

A modern, intuitive dictionary web application that helps users quickly find word definitions, examples, and related terms with a clean, ad-free interface.

## 📚 About DictSage

DictSage provides instant access to word definitions while offering personalized features like favorites and search history. Built with React and SUPABase, it combines powerful functionality with a seamless user experience.

### Key Features

- **Word Search**: Fast and accurate word lookups
- **Rich Definitions**: Comprehensive definitions with examples and usage
- **Pronunciation**: Audio pronunciation guides
- **Favorites**: Save words for future reference
- **Search History**: Track your previous searches
- **User Accounts**: Personalized experience with cross-device synchronization
- **Clean Interface**: Modern, distraction-free design

## 🛠️ Technology Stack

### Frontend
- React.js
- HTML5/CSS3
- Bootstrap/Tailwind CSS
- JavaScript

### Backend
- SUPABase
- Free Dictionary API

### Infrastructure
- Version Control: GitHub
- Deployment: Vercel (frontend), SUPABase (backend)
- Testing: Jest, React Testing Library

## 👥 Team

- **Chimobi Ekwunife** - Frontend Engineer
- **Emmanuel Ubani Oti-Owom** - Backend Developer using SUPABase

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- SUPABase account

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/dictsage.git
   cd dictsage
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory and add:
   ```
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

## 📊 Project Structure

```
dictsage/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── search/
│   │   ├── results/
│   │   ├── user/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── styles/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🔄 Workflow

1. Work on feature branches named according to the feature (e.g., `feature/word-favorites`)
2. Submit pull requests for code review
3. Merge to main branch after approval
4. Automatic deployment through CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for providing word data
- [SUPABase](https://supabase.io/) for backend infrastructure
- All contributors and supporters of the project
