// Import project images
import unitxLogo from '@/assets/logos/unitx-logo.jpg';
import sensoryLabsImg from '@/assets/projects/sensory-labs.png';
import sensoryLabsImg2 from '@/assets/projects/sensory-labs-2.png';
import sensoryLabsImg3 from '@/assets/projects/sensory-labs-3.png';
import sensoryLabsImg4 from '@/assets/projects/sensory-labs-4.png';
import sensoryLabsImg5 from '@/assets/projects/sensory-labs-5.jpg';
import millImg from '@/assets/projects/mill.jpg';
import millImg2 from '@/assets/projects/mill-2.jpg';
import millImg3 from '@/assets/projects/mill-3.jpg';
import millImg4 from '@/assets/projects/mill-4.jpg';
import ziplineImg from '@/assets/projects/zipline.webp';
import ziplineImg2 from '@/assets/projects/zipline-2.webp';
import ziplineImg3 from '@/assets/projects/zipline-3.jpg';
import unitxImg from '@/assets/projects/unitx.jpg';
import unitxImg2 from '@/assets/projects/unitx-2.jpg';
import unitxImg3 from '@/assets/projects/unitx-3.jpg';
import unitxImg4 from '@/assets/projects/unitx-4.jpg';
import bumblebeeImg from '@/assets/projects/bumblebee.jpg';
import bumblebeeImg2 from '@/assets/projects/bumblebee-2.jpg';
import bumblebeeImg3 from '@/assets/projects/bumblebee-3.jpg';
import bumblebeeImg4 from '@/assets/projects/bumblebee-4.jpg';
import amrImg from '@/assets/projects/amr.jpg';
import amrImg2 from '@/assets/projects/amr-2.jpg';
import amrImg3 from '@/assets/projects/amr-3.jpg';
import amrImg4 from '@/assets/projects/amr-4.jpg';
import butlerXlImg from '@/assets/projects/butler-xl.jpg';
import butlerXlImg2 from '@/assets/projects/butler-xl-2.jpg';
import butlerXlImg3 from '@/assets/projects/butler-xl-3.jpg';
import butlerXlImg4 from '@/assets/projects/butler-xl-4.jpg';
import fiatImg from '@/assets/projects/fiat.jpg';
import fiatImg2 from '@/assets/projects/fiat-2.jpg';
import fiatImg3 from '@/assets/projects/fiat-3.jpg';
import fiatImg4 from '@/assets/projects/fiat-4.jpg';
import fiatImg5 from '@/assets/projects/fiat-5.jpg';
import fiatImg6 from '@/assets/projects/fiat-6.jpg';
import fiatImg7 from '@/assets/projects/fiat-7.jpg';
import bajaImg from '@/assets/projects/baja.jpg';
import bajaImg2 from '@/assets/projects/baja-2.jpg';
import bajaImg3 from '@/assets/projects/baja-3.jpg';
import bajaImg4 from '@/assets/projects/baja-4.jpg';
import igcImg from '@/assets/projects/igc.jpg';
import igcImg2 from '@/assets/projects/igc-2.jpg';
import igcImg3 from '@/assets/projects/igc-3.jpg';
import igcImg4 from '@/assets/projects/igc-4.jpg';
import efficycleImg from '@/assets/projects/efficycle.jpg';
import efficycleImg2 from '@/assets/projects/efficycle-2.jpg';
import efficycleImg3 from '@/assets/projects/efficycle-3.jpg';
import efficycleImg4 from '@/assets/projects/efficycle-4.jpg';
import rcRacingImg from '@/assets/projects/rc-racing.jpg';
import rcRacingImg2 from '@/assets/projects/rc-racing-2.jpg';
import rcRacingImg3 from '@/assets/projects/rc-racing-3.jpg';
import rcRacingImg4 from '@/assets/projects/rc-racing-4.jpg';
import scooterImg from '@/assets/projects/scooter.jpg';
import scooterImg2 from '@/assets/projects/scooter-2.jpg';
import scooterImg3 from '@/assets/projects/scooter-3.jpg';
import scooterImg4 from '@/assets/projects/scooter-4.jpg';
import bevAnalysisImg from '@/assets/projects/bev-analysis.jpg';
import bevAnalysisImg2 from '@/assets/projects/bev-analysis-2.jpg';
import bevAnalysisImg3 from '@/assets/projects/bev-analysis-3.jpg';
import bevAnalysisImg4 from '@/assets/projects/bev-analysis-4.jpg';
import marsImg from '@/assets/projects/mars.jpg';
import marsImg2 from '@/assets/projects/mars-2.jpg';
import marsImg3 from '@/assets/projects/mars-3.jpg';
import marsImg4 from '@/assets/projects/mars-4.jpg';
import ventilatorImg from '@/assets/projects/ventilator.jpg';
import ventilatorImg2 from '@/assets/projects/ventilator-2.jpg';
import ventilatorImg3 from '@/assets/projects/ventilator-3.jpg';
import ventilatorImg4 from '@/assets/projects/ventilator-4.jpg';

export type ProjectCategory = 'professional' | 'academic' | 'personal';

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  image: string;
  gallery?: string[];
  year: string;
  company?: string;
  role?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  // Professional Company Projects
  {
    id: 'sensory-labs',
    title: 'Sensory Labs - Tactile Sensing for Physical AI',
    shortTitle: 'Sensory Labs',
    category: 'professional',
    description: 'Founded company building tactile multimodal sensing hardware and infrastructure for physical AI and industrial robotics applications.',
    fullDescription: `Founded Sensory Labs to build tactile multimodal sensing hardware and infrastructure for physical AI. The vision was to enable robots to perceive and interact with the physical world through advanced touch sensing, similar to how humans use their sense of touch.

Built early prototypes for multimodal sensing systems and explored industrial robotics applications. The technology combined tactile, visual, and proprioceptive sensing to create systems that could feel and adapt to physical interactions.

The venture was early to market for physical AI applications. The experience reinforced my conviction that useful robots in the real world will require fundamentally better sensing capabilities.`,
    highlights: [
      'Founded company focused on tactile sensing for robotics',
      'Built early prototypes for multimodal sensing systems',
      'Explored industrial robotics applications',
      'Developed hardware infrastructure for physical AI'
    ],
    technologies: ['Tactile Sensing', 'Physical AI', 'Multimodal Systems', 'Robotics', 'Hardware Prototyping'],
    image: sensoryLabsImg,
    gallery: [sensoryLabsImg, sensoryLabsImg2, sensoryLabsImg3, sensoryLabsImg4, sensoryLabsImg5],
    year: '2024 - 2025',
    company: 'Sensory Labs',
    role: 'Founder & CTO'
  },
  {
    id: 'unitx',
    title: 'UnitX - AI Visual Inspection Systems',
    shortTitle: 'UnitX',
    category: 'professional',
    description: 'Led hardware engineering for AI-powered visual inspection systems that catch defects humans miss, inspecting billions in products annually.',
    fullDescription: `At UnitX, I led the hardware engineering team building AI-powered visual inspection systems for mission-critical manufacturing. Our systems inspect over $6 billion worth of products annually for companies like GE and Teijin, catching defects that human inspectors miss.

The challenge was building inspection systems that operate 24/7/365 with near-perfect accuracy in demanding manufacturing environments. This meant designing robust hardware that could withstand factory conditions while maintaining the precision needed for AI-powered defect detection.

We achieved 9x lower escape rates than traditional inspection methods and 3x faster deployment times—results that directly impact product quality and manufacturing efficiency at scale.`,
    highlights: [
      'Led hardware engineering for AI visual inspection platform',
      'Systems inspect $6B+ in products annually for major manufacturers',
      'Achieved 9x lower defect escape rates vs traditional methods',
      'Designed hardware for 24/7 operation in demanding factory environments'
    ],
    technologies: ['Computer Vision', 'AI/ML', 'Industrial Hardware', 'Manufacturing Systems', 'Quality Control'],
    image: unitxImg,
    gallery: [unitxImg, unitxImg2, unitxImg3, unitxImg4],
    year: '2023 - 2024',
    company: 'UnitX',
    role: 'Director of Engineering'
  },
  {
    id: 'mill',
    title: 'Mill - Kitchen Food Recycler',
    shortTitle: 'Mill',
    category: 'professional',
    description: 'Founding engineer and Head of Systems Engineering. Led hardware architecture from pre-seed through Series C, filed 18 patents, achieved UL/FCC certification.',
    fullDescription: `As a founding engineer at Mill, I led hardware and firmware architecture, development, validation, and production readiness for residential and commercial food waste recyclers from pre-seed through Series C.

Led cross-functional teams to develop advanced systems for food waste management, reducing methane emissions. Built and scaled systems architecture for both consumer and commercial products, achieving Gen-1 and Gen-2 safety certifications from scratch working with UL for US and Canada compliance.

Owned the product reliability program to meet functional, reliability, safety, and certification goals. Responsible for scoping and onboarding strategic vendors, selecting, training, and ramping contract manufacturers across US and Mexico through proto-to-production stages. Filed over 18 patents related to novel technologies and built strategic partnerships with key component suppliers.`,
    highlights: [
      'Founding engineer, pre-seed through Series C',
      'Filed 18 patents for novel technologies',
      'Led UL and FCC certifications for high-power appliances',
      'Ramped contract manufacturers across US and Mexico'
    ],
    technologies: ['Consumer Hardware', 'Systems Architecture', 'UL/FCC Certification', 'DFM/DFA', 'Manufacturing Scale-up'],
    image: millImg,
    gallery: [millImg, millImg2, millImg3, millImg4],
    year: '2021 - 2023',
    company: 'Mill',
    role: 'Head of Systems Engineering'
  },
  {
    id: 'zipline',
    title: 'Zipline - Platform 2 Ground Systems Architecture',
    shortTitle: 'Zipline',
    category: 'professional',
    description: 'Led early architecture exploration for Platform-2 ground systems, Zipline\'s next-gen drone logistics infrastructure.',
    fullDescription: `At Zipline, I was part of the founding leadership team for Platform-2, the next-generation drone logistics system. I led early architecture exploration for ground systems, collaborating with Keenan Wyrobek and top-tier engineers to define the hardware systems architecture.

My role focused on translating product goals into technical requirements, auditing shipper sites, and identifying integration challenges. I developed sizing and integration concepts to enhance scalability across different customer types and deployment scenarios.

I built simulation tools to model system sizing for demand scenarios, throughput scale, and unit economics. These tools enabled data-driven decisions on system configuration and early cost estimates, helping shape the foundation for Zipline's next phase of growth.`,
    highlights: [
      'Founding leadership team for Platform-2 ground systems',
      'Defined hardware systems architecture and technical requirements',
      'Built simulation tools for system sizing and unit economics',
      'Audited shipper sites and developed integration strategies'
    ],
    technologies: ['Systems Architecture', 'Simulation Modeling', 'Hardware Integration', 'Logistics Systems', 'Autonomous Delivery'],
    image: ziplineImg,
    gallery: [ziplineImg, ziplineImg2, ziplineImg3],
    year: '2020 - 2021',
    company: 'Zipline',
    role: 'Product Architect & Engineering Lead'
  },
  {
    id: 'low-cost-ventilator',
    title: 'Design of Low Cost Ventilator',
    shortTitle: 'Ventilator Design',
    category: 'personal',
    description: 'Designed affordable ventilator system for resource-constrained healthcare settings.',
    fullDescription: `Designed a low-cost ventilator system intended for resource-constrained healthcare settings, particularly in developing countries where access to medical equipment is limited.

This project combined mechanical engineering with healthcare impact. The challenge was achieving medical-grade performance at a fraction of traditional costs, requiring creative approaches to components, manufacturing, and reliability.`,
    highlights: [
      'Cost-optimized medical device design',
      'Designed for resource-constrained settings',
      'Medical-grade performance requirements',
      'Focus on manufacturability and reliability'
    ],
    technologies: ['Medical Devices', 'Low-Cost Design', 'Pneumatic Systems', 'Healthcare Engineering', 'DFM'],
    image: ventilatorImg,
    gallery: [ventilatorImg, ventilatorImg2, ventilatorImg3, ventilatorImg4],
    year: '2020',
    role: 'Personal Project'
  },
  // Original Portfolio Projects
  {
    id: 'bumblebee-spaces',
    title: 'Bumblebee Spaces Robotic Furniture',
    shortTitle: 'Robotic Furniture',
    category: 'professional',
    description: 'Designed and developed robotic furniture systems that transform living spaces on demand.',
    fullDescription: `At Bumblebee Spaces, I worked on robotic furniture systems that reimagine how people use space in their homes. These ceiling-mounted systems lower furniture (beds, desks, storage) on demand, effectively doubling usable floor space in urban apartments.

The engineering challenge was making something as heavy and complex as furniture move safely and silently in people's homes, thousands of times over its lifetime. This required innovative mechanical design, robust sensing systems, and meticulous attention to user experience.`,
    highlights: [
      'Designed robotic systems for ceiling-mounted furniture',
      'Developed safety and sensing systems for home environments',
      'Built for thousands of cycles over product lifetime',
      'Focus on silent operation and seamless user experience'
    ],
    technologies: ['Robotics', 'Mechanical Design', 'Consumer Products', 'Safety Systems', 'Embedded Systems'],
    image: bumblebeeImg,
    gallery: [bumblebeeImg, bumblebeeImg2, bumblebeeImg3, bumblebeeImg4],
    year: '2019 - 2020',
    company: 'Bumblebee Spaces',
    role: 'Mechanical Engineer'
  },
  {
    id: 'autonomous-mobile-robot',
    title: 'Warehouse Robotics - Butler',
    shortTitle: 'Warehouse Robotics',
    category: 'professional',
    description: 'Complete mechanical design of autonomous mobile robot platform for warehouse automation.',
    fullDescription: `Led the mechanical design of an autonomous mobile robot (AMR) for warehouse and logistics applications. The robot needed to navigate complex environments, carry significant payloads, and operate reliably for extended periods.

This project required balancing competing requirements: structural rigidity for payload capacity, weight optimization for efficiency, and accessibility for maintenance and manufacturing. The result was a platform that became the foundation for multiple product variants.`,
    highlights: [
      'Complete mechanical architecture from concept to production',
      'Optimized for payload capacity and operational efficiency',
      'Designed for manufacturability and serviceability',
      'Platform foundation for multiple product variants'
    ],
    technologies: ['Mechanical Design', 'Robotics', 'SolidWorks', 'FEA', 'DFM/DFA'],
    image: amrImg,
    gallery: [amrImg, amrImg2, amrImg3, amrImg4],
    year: '2015 - 2016',
    role: 'Lead Mechanical Engineer'
  },
  {
    id: 'butler-xl',
    title: 'Warehouse Robotics - Butler XL',
    shortTitle: 'Butler XL',
    category: 'professional',
    description: 'Heavy-duty autonomous mobile robot designed for larger payloads and industrial applications.',
    fullDescription: `Extended the autonomous mobile robot platform to handle significantly larger payloads for industrial warehouse applications. The BUTLER XL required fundamental rethinking of structural design, drivetrain, and navigation systems to handle the increased scale.

The engineering challenge was maintaining the reliability and maneuverability of the smaller platform while dramatically increasing payload capacity. This required innovative approaches to chassis design, power management, and thermal systems.`,
    highlights: [
      'Scaled platform for heavy industrial payloads',
      'Redesigned chassis and drivetrain systems',
      'Maintained maneuverability at larger scale',
      'Advanced thermal and power management'
    ],
    technologies: ['Heavy Robotics', 'Industrial Design', 'Structural Analysis', 'Power Systems', 'Thermal Management'],
    image: butlerXlImg2,
    gallery: [butlerXlImg2, butlerXlImg, butlerXlImg3, butlerXlImg4],
    year: '2016 - 2017',
    role: 'Senior Mechanical Engineer'
  },
  {
    id: 'fiat-closures',
    title: 'Automotive Design & Manufacturing Technology',
    shortTitle: 'FCA Engineering',
    category: 'professional',
    description: 'CAE durability analysis and manufacturing technology for engine and robotic Body-in-White assembly lines, including Made-in-India Jeep Compass.',
    fullDescription: `Two roles at Fiat Chrysler Automobiles spanning CAE durability analysis and manufacturing technology for vehicle production.

As a Manufacturing Technologist, optimized production processes across Engine manufacturing and Body-in-White (BIW) assembly divisions. Implemented a temporary BIW facility achieving 300+ units/day output for Fiat Punto/Linea. Led automation improvements that increased BIW build efficiency from 27% to 65% for the right-hand-drive Jeep Compass and Tata Nexon production lines—a key part of the Made-in-India initiative.

As a CAE Engineer, developed advanced analytical models for closure durability, improving computation time by 40% and accuracy by 12%. Conducted structural analysis, NVH optimization, and durability validation for automotive door systems. Presented findings at SAE World Congress 2016, published in SAE Journal.`,
    highlights: [
      'Built robotic BIW assembly lines for Jeep Compass production',
      'Increased BIW build efficiency from 27% to 65%',
      'Implemented temporary facility achieving 300+ units/day',
      'Published durability research at SAE World Congress 2016'
    ],
    technologies: ['Manufacturing Engineering', 'BIW Assembly', 'Robotics', 'ANSYS', 'HyperMesh', 'NVH Analysis', 'Process Optimization'],
    image: fiatImg5,
    gallery: [fiatImg5, fiatImg, fiatImg2, fiatImg3, fiatImg4, fiatImg6, fiatImg7],
    year: '2014 - 2015',
    company: 'Fiat Chrysler Automobiles',
    role: 'Manufacturing Technologist & CAE Engineer'
  },
  {
    id: 'sae-baja',
    title: 'Chassis & Suspension Design: SAE Baja',
    shortTitle: 'SAE Baja',
    category: 'academic',
    description: 'Designed chassis and suspension systems for off-road racing vehicle competing in SAE Baja series.',
    fullDescription: `Led the chassis and suspension design for our university's SAE Baja off-road racing vehicle. The competition challenges student teams to design, build, and race single-seat off-road vehicles that can survive brutal terrain and aggressive driving.

This was my introduction to real vehicle dynamics and the art of designing for extreme conditions. Every gram matters, every weld must be perfect, and the vehicle must survive impacts that would destroy a road car.`,
    highlights: [
      'Complete chassis design for off-road competition',
      'Suspension geometry optimization for terrain',
      'Lightweight design with structural integrity',
      'Hands-on fabrication and testing'
    ],
    technologies: ['Vehicle Dynamics', 'Chassis Design', 'Suspension Design', 'Welding', 'Competition Engineering'],
    image: bajaImg,
    gallery: [bajaImg, bajaImg2, bajaImg3, bajaImg4],
    year: '2014 - 2015',
    role: 'Chassis Lead',
    hidden: true
  },
  {
    id: 'igc-karting',
    title: 'International Karting Championship (IGC 2013)',
    shortTitle: 'IGC Karting',
    category: 'academic',
    description: 'Designed and raced kart in International Go-Karting Championship competition.',
    fullDescription: `Designed and built a racing kart for the International Go-Karting Championship, competing against teams from across the country. The competition required building a kart from scratch that could compete on performance, reliability, and innovation.

Racing teaches engineering lessons you cannot learn in a classroom. When your design choices determine whether you win or crash, you learn to make decisions with conviction and test them relentlessly.`,
    highlights: [
      'Complete kart design and fabrication',
      'Performance optimization for competition',
      'Hands-on racing and iteration',
      'Team leadership and project management'
    ],
    technologies: ['Kart Design', 'Vehicle Dynamics', 'Fabrication', 'Competition Strategy', 'Team Leadership'],
    image: igcImg,
    gallery: [igcImg, igcImg2, igcImg3, igcImg4],
    year: '2013',
    role: 'Team Lead',
    hidden: true
  },
  {
    id: 'efficycle',
    title: 'Hybrid Tricycle: SAE Efficycle',
    shortTitle: 'SAE Efficycle',
    category: 'academic',
    description: 'Designed human-electric hybrid tricycle for SAE North India Efficycle competition.',
    fullDescription: `Developed a human-electric hybrid tricycle for the SAE North India Efficycle competition, which challenges teams to build the most efficient and practical human-powered vehicle with electric assist.

This project combined my interests in vehicle design and sustainable transportation. The challenge was maximizing efficiency while maintaining practical usability—a balance that defines good engineering.`,
    highlights: [
      'Hybrid powertrain design and integration',
      'Aerodynamic and lightweight construction',
      'Efficiency optimization for competition scoring',
      'Practical design for real-world usability'
    ],
    technologies: ['Hybrid Systems', 'Electric Vehicles', 'Lightweight Design', 'Efficiency Engineering', 'Sustainable Transport'],
    image: efficycleImg,
    gallery: [efficycleImg, efficycleImg2, efficycleImg3, efficycleImg4],
    year: '2014',
    role: 'Design Lead',
    hidden: true
  },
  {
    id: 'rc-racing',
    title: 'RC Racing Prototype for Techfest IIT Bombay',
    shortTitle: 'RC Racing',
    category: 'personal',
    description: 'Built high-performance RC racing prototype for competitive events at IIT Bombay Techfest.',
    fullDescription: `Designed and built a high-performance RC racing prototype for competitive events at IIT Bombay's Techfest, one of Asia's largest science and technology festivals.

RC racing is a proving ground for understanding vehicle dynamics at a manageable scale. The principles (weight distribution, suspension tuning, power-to-weight ratio) translate directly to full-scale vehicles, but you can iterate much faster.`,
    highlights: [
      'High-performance chassis design',
      'Competitive racing configuration',
      'Rapid prototyping and iteration',
      'Performance tuning and optimization'
    ],
    technologies: ['RC Design', 'Rapid Prototyping', 'Vehicle Dynamics', 'Performance Tuning', '3D Printing'],
    image: rcRacingImg,
    gallery: [rcRacingImg, rcRacingImg2, rcRacingImg3, rcRacingImg4],
    year: '2013',
    role: 'Designer & Builder',
    hidden: true
  },
  {
    id: 'electric-scooter',
    title: 'Design of an Electric Scooter',
    shortTitle: 'Electric Scooter',
    category: 'personal',
    description: 'Personal project designing a practical electric scooter for urban commuting.',
    fullDescription: `Designed an electric scooter optimized for practical urban commuting—focusing on range, portability, and everyday usability rather than maximum performance.

Personal projects like this let me explore ideas without constraints. The goal was creating something I would actually use daily, which forced honest evaluation of every design decision.`,
    highlights: [
      'Practical urban mobility solution',
      'Range and portability optimization',
      'Complete electrical and mechanical design',
      'Real-world usability focus'
    ],
    technologies: ['Electric Vehicles', 'Battery Systems', 'Mechanical Design', 'Urban Mobility', 'Personal Transport'],
    image: scooterImg,
    gallery: [scooterImg, scooterImg2, scooterImg3, scooterImg4],
    year: '2015',
    role: 'Personal Project',
    hidden: true
  },
  {
    id: 'bev-analysis',
    title: 'BEV Energy Consumption & Range Analysis',
    shortTitle: 'BEV Analysis',
    category: 'academic',
    description: 'Research on battery electric vehicle energy consumption, range estimation, and capacity fade analysis.',
    fullDescription: `Conducted research on battery electric vehicle performance, focusing on energy consumption modeling, range estimation algorithms, and battery capacity fade over time.

This work combined my interests in electric vehicles with rigorous analytical methods. Understanding how batteries degrade and how to predict range accurately is critical for EV adoption and user confidence.`,
    highlights: [
      'Energy consumption modeling and validation',
      'Range estimation algorithm development',
      'Battery degradation and capacity fade analysis',
      'Research publication and presentation'
    ],
    technologies: ['MATLAB', 'Battery Modeling', 'Energy Systems', 'Data Analysis', 'Electric Vehicles'],
    image: bevAnalysisImg,
    gallery: [bevAnalysisImg, bevAnalysisImg2, bevAnalysisImg3, bevAnalysisImg4],
    year: '2016',
    role: 'Research Engineer',
    hidden: true
  },
  {
    id: 'mars-urbanization',
    title: 'Mars Urbanization Challenge',
    shortTitle: 'Mars Challenge',
    category: 'personal',
    description: 'Conceptual design for Mars habitat and urbanization systems for NASA-affiliated competition.',
    fullDescription: `Developed conceptual designs for Mars habitat and urbanization systems as part of a NASA-affiliated design competition. The challenge required thinking through all aspects of sustainable human presence on Mars, from structural systems to life support to psychological well-being.

Projects like this stretch your thinking beyond conventional constraints. When you cannot rely on Earth-based assumptions, you are forced to reason from first principles about what humans actually need to survive and thrive.`,
    highlights: [
      'Comprehensive Mars habitat design',
      'Life support and sustainability systems',
      'Structural design for Mars environment',
      'NASA competition participation'
    ],
    technologies: ['Space Systems', 'Habitat Design', 'Life Support', 'Structural Engineering', 'Systems Thinking'],
    image: marsImg,
    gallery: [marsImg, marsImg2, marsImg3, marsImg4],
    year: '2016',
    role: 'Design Lead',
    hidden: true
  }
];

export const companies = [
  {
    name: 'Sensory Labs',
    logo: '/placeholder.svg',
    description: 'Physical AI & Robotics'
  },
  {
    name: 'UnitX',
    logo: unitxLogo,
    description: 'AI Visual Inspection'
  },
  {
    name: 'Mill',
    logo: '/placeholder.svg',
    description: 'Consumer Hardware'
  },
  {
    name: 'Zipline',
    logo: '/placeholder.svg',
    description: 'Autonomous Delivery'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};
