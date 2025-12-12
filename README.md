 🚀 CodersDen

> **Your comprehensive platform for discovering world-class technology courses**

Learn React, Node.js, Python, DevOps, AI/ML, and 20+ tech stacks from curated Udemy & Coursera courses. Whether you're a beginner taking your first steps into web development or an advanced professional mastering cutting-edge technologies, CodersDen connects you with the learning resources you need to succeed.

[![Next.js](https://img.shields.io/badge/Next.js-14.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

- **📚 25+ Curated Courses** - Carefully selected content across multiple tech domains
- **🔍 Advanced Search & Filtering** - Find courses by category, skill level, and platform
- **⭐ Quality Ratings** - Community-driven ratings to help you choose the right course
- **🎯 Skill-Based Learning Paths** - Organized by category for structured progression
- **🔗 Direct Integration** - Links to Udemy and Coursera for seamless learning
- **👨‍🏫 Expert Instructors** - Learn from industry professionals and experienced educators

## 🎓 Course Categories

- **Frontend Development** - React, Vue, Angular, TypeScript, JavaScript
- **Backend Development** - Node.js, Django, Python, GraphQL
- **Databases** - MongoDB, PostgreSQL, SQL
- **DevOps & Infrastructure** - Docker, Kubernetes, CI/CD
- **Cloud Computing** - AWS, Azure, Cloud Architecture
- **Mobile Development** - React Native, iOS, Android
- **AI & Machine Learning** - Deep Learning, Data Science, Neural Networks
- **Security** - Web Security, Ethical Hacking, OWASP

## 🛠️ Tech Stack

- **Next.js 14** - Modern React framework with SSR & SSG
- **React 18** - Interactive UI components
- **Tailwind CSS** - Utility-first styling
- **React Icons** - Beautiful icon library
- **NextAuth** - Authentication & security

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/codersden.git
   cd codersden
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your configuration in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Browse Courses
- Visit the home page to see all available courses
- Use the search bar to find courses by keywords

### Filter Courses
- Filter by **Category** (Frontend, Backend, etc.)
- Filter by **Skill Level** (Beginner, Intermediate, Advanced)
- Filter by **Platform** (Udemy, Coursera)

### View Course Details
- Click on any course card to see:
  - Full course description
  - Instructor information
  - Community rating
  - Direct link to enroll

## 📁 Project Structure

```
codersden/
├── app/
│   ├── api/
│   │   └── courses/          # Course API routes
│   ├── components/           # Reusable React components
│   ├── about/                # About page
│   ├── code/repos/           # Repository showcase
│   └── page.jsx              # Home page
├── lib/
│   └── config.js             # Configuration management
├── public/                   # Static assets
├── styles/                   # Global styles
└── package.json
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 📚 API Endpoints

### GET `/api/courses`
Retrieve all courses with optional filters

**Query Parameters:**
- `category` - Filter by course category
- `level` - Filter by skill level
- `platform` - Filter by platform (Udemy/Coursera)

**Example:**
```bash
GET /api/courses?category=Frontend&level=Beginner
```

### POST `/api/courses`
Add a new course (for admin use)

**Request Body:**
```json
{
  "title": "Course Title",
  "description": "Course description",
  "level": "Intermediate",
  "link": "https://...",
  "category": "Backend",
  "platform": "Udemy",
  "rating": 4.8
}
```

### GET `/api/courses/search`
Search courses by query with advanced filtering

**Query Parameters:**
- `query` - Search term
- `category` - Course category
- `level` - Skill level
- `platform` - Platform filter

## 🎯 Our Mission

We believe that quality education should be accessible to everyone. CodersDen democratizes tech education by providing a centralized hub where learners can discover, compare, and access courses across all major technology domains. We partner with industry-leading platforms like Udemy and Coursera to bring you vetted, high-quality content from experienced instructors.

## 👥 Team

CodersDen was founded by a passionate group of developers committed to advancing tech education. Meet our team of experts spanning full-stack development, DevOps, mobile development, AI/ML, and more on our [Team Page](https://codersden.com/about/team).

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website:** [https://codersden.com](https://codersden.com)
- **About:** [https://codersden.com/about](https://codersden.com/about)
- **Repositories:** [https://codersden.com/code/repos](https://codersden.com/code/repos)

## 💌 Support & Feedback

- Found a bug? [Open an issue](https://github.com/yourusername/codersden/issues)
- Have a suggestion? [Start a discussion](https://github.com/yourusername/codersden/discussions)
- Contact us: [info@codersden.com](mailto:info@codersden.com)

---

**Made with ❤️ by the CodersDen team**

*Empowering developers, one course at a time* 🚀
