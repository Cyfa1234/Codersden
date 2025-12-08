import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

// Course repositories from popular developers and organizations
const courseRepos = [
  {
    id: 1,
    name: "react-learn",
    description: "Comprehensive React learning resources with examples and projects",
    stargazers_count: 5420,
    forks_count: 1230,
    watchers_count: 342,
    url: "https://github.com/facebook/react"
  },
  {
    id: 2,
    name: "nextjs-framework",
    description: "Next.js framework with SSR, SSG, and API routes",
    stargazers_count: 6890,
    forks_count: 1950,
    watchers_count: 445,
    url: "https://github.com/vercel/next.js"
  },
  {
    id: 3,
    name: "node-fundamentals",
    description: "Node.js fundamentals course with practical examples",
    stargazers_count: 3210,
    forks_count: 890,
    watchers_count: 256,
    url: "https://github.com/nodejs/node"
  },
  {
    id: 4,
    name: "javascript-algorithms",
    description: "JavaScript algorithms and data structures with explanations",
    stargazers_count: 8940,
    forks_count: 2150,
    watchers_count: 567,
    url: "https://github.com/trekhleb/javascript-algorithms"
  },
  {
    id: 5,
    name: "typescript-guide",
    description: "Complete TypeScript learning guide with examples",
    stargazers_count: 4560,
    forks_count: 1045,
    watchers_count: 312,
    url: "https://github.com/microsoft/TypeScript"
  },
  {
    id: 6,
    name: "python-data-science",
    description: "Python data science and machine learning tutorials",
    stargazers_count: 7230,
    forks_count: 1890,
    watchers_count: 510,
    url: "https://github.com/jakevdp/PythonDataScienceHandbook"
  },
  {
    id: 7,
    name: "django-framework",
    description: "Django web framework with database and ORM tutorials",
    stargazers_count: 5670,
    forks_count: 1420,
    watchers_count: 390,
    url: "https://github.com/django/django"
  },
  {
    id: 8,
    name: "fastapi-development",
    description: "FastAPI modern web framework for building APIs",
    stargazers_count: 4890,
    forks_count: 1150,
    watchers_count: 335,
    url: "https://github.com/tiangolo/fastapi"
  },
  {
    id: 9,
    name: "docker-kubernetes",
    description: "Docker and Kubernetes learning resources",
    stargazers_count: 5890,
    forks_count: 1340,
    watchers_count: 385,
    url: "https://github.com/kubernetes/kubernetes"
  },
  {
    id: 10,
    name: "mongodb-database",
    description: "MongoDB NoSQL database tutorials and examples",
    stargazers_count: 3560,
    forks_count: 920,
    watchers_count: 265,
    url: "https://github.com/mongodb/mongo"
  },
  {
    id: 11,
    name: "postgresql-guide",
    description: "PostgreSQL relational database advanced concepts",
    stargazers_count: 4120,
    forks_count: 980,
    watchers_count: 295,
    url: "https://github.com/postgres/postgres"
  },
  {
    id: 12,
    name: "graphql-api",
    description: "GraphQL API design and implementation patterns",
    stargazers_count: 3890,
    forks_count: 850,
    watchers_count: 270,
    url: "https://github.com/graphql/graphql-js"
  },
  {
    id: 13,
    name: "react-native-projects",
    description: "React Native mobile app development examples",
    stargazers_count: 4120,
    forks_count: 960,
    watchers_count: 280,
    url: "https://github.com/facebook/react-native"
  },
  {
    id: 14,
    name: "vue-ecosystem",
    description: "Vue.js framework and ecosystem learning materials",
    stargazers_count: 3450,
    forks_count: 810,
    watchers_count: 245,
    url: "https://github.com/vuejs/vue"
  },
  {
    id: 15,
    name: "angular-masterclass",
    description: "Angular framework advanced concepts and patterns",
    stargazers_count: 2980,
    forks_count: 720,
    watchers_count: 210,
    url: "https://github.com/angular/angular"
  },
  {
    id: 16,
    name: "svelte-guide",
    description: "Svelte framework for building reactive UI components",
    stargazers_count: 3240,
    forks_count: 650,
    watchers_count: 185,
    url: "https://github.com/sveltejs/svelte"
  },
  {
    id: 17,
    name: "rust-programming",
    description: "Rust systems programming language tutorials",
    stargazers_count: 6780,
    forks_count: 1680,
    watchers_count: 410,
    url: "https://github.com/rust-lang/rust"
  },
  {
    id: 18,
    name: "golang-learning",
    description: "Go programming language basics and advanced topics",
    stargazers_count: 5340,
    forks_count: 1220,
    watchers_count: 350,
    url: "https://github.com/golang/go"
  },
  {
    id: 19,
    name: "aws-cloud",
    description: "AWS cloud computing services and deployment",
    stargazers_count: 4560,
    forks_count: 1090,
    watchers_count: 305,
    url: "https://github.com/aws/aws-sdk-js"
  },
  {
    id: 20,
    name: "tensorflow-ml",
    description: "TensorFlow machine learning and deep learning",
    stargazers_count: 7890,
    forks_count: 2340,
    watchers_count: 590,
    url: "https://github.com/tensorflow/tensorflow"
  }
];

const ReposPage = async () => {
  const repos = courseRepos;

  if (!repos || repos.length === 0) {
    return (
      <div className="repos-container">
        <h1>Code Repositories</h1>
        <div className="empty-state">
          <p>Unable to load repositories at the moment. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="repos-container">
      <div className="repos-header">
        <h1>Code Repositories</h1>
        <p className="repos-subtitle">Explore popular course repositories and learning resources from the global development community</p>
      </div>
      
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="repo-item">
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-link">
              <div className="repo-content">
                <h3 className="repo-name">{repo.name}</h3>
                <p className="repo-desc">{repo.description || 'No description available'}</p>
              </div>
              <div className="repo-details">
                <span className="repo-stat">
                  <FaStar className="stat-icon" /> {repo.stargazers_count || 0}
                </span>

                <span className="repo-stat">
                  <FaCodeBranch className="stat-icon" /> {repo.forks_count || 0}
                </span>

                <span className="repo-stat">
                  <FaEye className="stat-icon" /> {repo.watchers_count || 0}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
