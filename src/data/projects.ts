
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  features?: string[];
  technologies: string[];
  category: string;
  image?: string;
  images?: string[];
  videos?: string[];
  githubUrl?: string;
  githubUrl2?: string;
  videoPlaceholder?: boolean;
}

export const categories = ['All', 'IoT', 'AI/ML', 'DevOps', 'Web', 'Electronics'];

export const projects: Project[] = [

  {
    id: 'helmet-detection',
    title: 'Helmet & Triple-Ride Detection',
    shortDescription: 'YOLO and CNN-based system to detect helmet use and triple riding using real-time camera feed.',

    fullDescription: [
        "This project uses deep learning models such as YOLOv5 and CNNs to detect traffic rule violations in real time, specifically identifying riders without helmets and cases of triple riding on motorcycles.",

        "The system processes live camera feeds using OpenCV and performs object detection with optimized accuracy and speed. The model is trained to recognize helmets, riders, and multiple passengers efficiently.",

        "The project demonstrates the use of AI in smart traffic monitoring and road safety enforcement. It can be integrated into surveillance systems for automated violation detection and monitoring.",

        "Major implementation areas included dataset preparation, real-time object detection, model optimization, and video stream processing."
    ],

    technologies: ['YOLOv5', 'CNN', 'OpenCV', 'PyTorch', 'Python'],
    category: 'AI/ML',
    videos: ['/videos/helmet.mp4'],
    githubUrl: ''
},

  {
    id: 'iare-mun-devops',

    title: 'IARE MUN - Microservices Architecture',

    shortDescription:
      'Enterprise-grade MUN platform with Load Balancers, API Gateways, and Dockerized microservices.',

    fullDescription: [
      "This project focused on transforming the IARE MUN platform into a scalable microservices-based architecture using modern DevOps practices.",

      "The infrastructure includes Layer 7 Load Balancers, API Gateway integration, Dockerized services, Redis caching layers, and optimized request routing using Nginx.",

      "The platform was designed for improved scalability, reliability, and performance.",

      "The project strengthened skills in DevOps engineering, containerization, and distributed system architecture."
    ],

    technologies: [
      'Docker',
      'Nginx',
      'Redis',
      'API Gateway',
      'Cloudflare',
      'Firebase',
      'React'
    ],

    category: 'DevOps',

    videos: ['/videos/iaremun.mp4'],

    images: [
      '/videos/backend1.jpeg',
      '/videos/arch.jpeg',
      '/videos/docker-system.jpeg'
    ],

    githubUrl: '',
    githubUrl2: ''
  },

  {
    id: 'speech-enhancement-deep-unet',

    title: 'Speech Enhancement using Deep U-Net',

    shortDescription:
      'Deep learning-based speech enhancement system that removes background noise from audio signals.',

    fullDescription: [
      "This project uses a Deep U-Net architecture for speech enhancement by reducing background noise and improving speech clarity.",

      "The model was trained on noisy and clean speech datasets to learn effective noise reduction.",

      "The system processes noisy audio inputs and generates enhanced speech output with improved intelligibility and quality.",

      "Key implementation areas included spectrogram generation, U-Net model training, and audio reconstruction."
    ],

    technologies: [
      'Python',
      'TensorFlow',
      'Deep U-Net',
      'Librosa',
      'NumPy',
      'Audio Signal Processing'
    ],

    category: 'AI/ML',

    githubUrl:
      'https://github.com/manojchanna-312/Speech-Enhancement-using-U-Net.git'
  }
];

