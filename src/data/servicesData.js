import { 
  FaCode, 
  FaDatabase, 
  FaRobot, 
  FaMobile, 
  FaCloud, 
  FaChartLine,
  FaCogs,
  FaBrain
} from "react-icons/fa";

// Services Data avec clés de traduction
export const getServicesData = (t) => [
  {
    id: 1,
    icon: <FaCode />,
    title: t('services.items.webDev.title'),
    description: t('services.items.webDev.description'),
    technologies: ["Python", "Django", "FastAPI", "React", "PostgreSQL"],
    price: t('services.items.webDev.price'),
    features: t('services.items.webDev.features', { returnObjects: true })
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: t('services.items.dataScience.title'),
    description: t('services.items.dataScience.description'),
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    price: t('services.items.dataScience.price'),
    features: t('services.items.dataScience.features', { returnObjects: true })
  },
  {
    id: 3,
    icon: <FaRobot />,
    title: t('services.items.ai.title'),
    description: t('services.items.ai.description'),
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Azure ML", "Streamlit"],
    price: t('services.items.ai.price'),
    features: t('services.items.ai.features', { returnObjects: true })
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: t('services.items.mobile.title'),
    description: t('services.items.mobile.description'),
    technologies: ["React Native", "Flutter", "JavaScript", "TypeScript"],
    price: t('services.items.mobile.price'),
    features: t('services.items.mobile.features', { returnObjects: true })
  },
  {
    id: 5,
    icon: <FaCloud />,
    title: t('services.items.cloud.title'),
    description: t('services.items.cloud.description'),
    technologies: ["Azure", "Docker", "GitHub Actions", "PostgreSQL", "Linux"],
    price: t('services.items.cloud.price'),
    features: t('services.items.cloud.features', { returnObjects: true })
  },
  {
    id: 6,
    icon: <FaChartLine />,
    title: t('services.items.bi.title'),
    description: t('services.items.bi.description'),
    technologies: ["Streamlit", "Plotly", "Power BI", "SQL", "Python"],
    price: t('services.items.bi.price'),
    features: t('services.items.bi.features', { returnObjects: true })
  },
  {
    id: 7,
    icon: <FaCogs />,
    title: t('services.items.automation.title'),
    description: t('services.items.automation.description'),
    technologies: ["Python", "Apache Airflow", "Cron", "SQL", "APIs"],
    price: t('services.items.automation.price'),
    features: t('services.items.automation.features', { returnObjects: true })
  },
  {
    id: 8,
    icon: <FaBrain />,
    title: t('services.items.consulting.title'),
    description: t('services.items.consulting.description'),
    technologies: ["Stratégie IA", "Architecture Data", "ROI Analysis", "Formation"],
    price: t('services.items.consulting.price'),
    features: t('services.items.consulting.features', { returnObjects: true })
  }
];

// Services par catégorie
export const servicesByCategory = {
  development: [1, 4, 5], // Développement
  data: [2, 6, 7], // Data & Analytics
  ai: [3, 8], // IA & Consulting
  all: [1, 2, 3, 4, 5, 6, 7, 8] // Tous les services
};

export default getServicesData;
