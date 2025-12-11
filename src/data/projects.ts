// Import project images
import bumblebeeImg from '@/assets/projects/bumblebee.jpg';
import bumblebeeImg2 from '@/assets/projects/bumblebee-2.jpg';
import bumblebeeImg3 from '@/assets/projects/bumblebee-3.jpg';
import bumblebeeImg4 from '@/assets/projects/bumblebee-4.jpg';
import amrImg from '@/assets/projects/amr.jpg';
import butlerXlImg from '@/assets/projects/butler-xl.jpg';
import fiatImg from '@/assets/projects/fiat.jpg';
import bajaImg from '@/assets/projects/baja.jpg';
import bajaImg2 from '@/assets/projects/baja-2.jpg';
import bajaImg3 from '@/assets/projects/baja-3.jpg';
import bajaImg4 from '@/assets/projects/baja-4.jpg';
import igcImg from '@/assets/projects/igc.jpg';
import efficycleImg from '@/assets/projects/efficycle.jpg';
import rcRacingImg from '@/assets/projects/rc-racing.jpg';
import scooterImg from '@/assets/projects/scooter.jpg';
import bevAnalysisImg from '@/assets/projects/bev-analysis.jpg';
import marsImg from '@/assets/projects/mars.jpg';
import ventilatorImg from '@/assets/projects/ventilator.jpg';

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
}

export const projects: Project[] = [
  // Professional Company Projects
  {
    id: 'sensory-labs',
    title: 'Sensory Labs - Physical AI & Robotics',
    shortTitle: 'Sensory Labs',
    category: 'professional',
    description: 'Building robotic systems that perceive and respond to the physical world through multimodal sensing and physical AI.',
    fullDescription: `At Sensory Labs, I am building the next generation of robotic systems that can truly understand and interact with their environment. We are developing physical AI systems that combine advanced sensing modalities—tactile, visual, and proprioceptive—to create robots that don't just execute commands, but genuinely perceive and respond to the world around them.

This is the frontier of robotics: systems that can feel, adapt, and learn from physical interactions. The challenge isn't just technical—it's about fundamentally rethinking how machines experience the physical world.`,
    highlights: [
      'Developing multimodal sensing systems for robotic perception',
      'Building physical AI algorithms for real-world interaction',
      'Leading hardware-software integration for sensing platforms',
      'Creating systems that bridge the gap between AI and physical manipulation'
    ],
    technologies: ['Robotics', 'Physical AI', 'Multimodal Sensing', 'Machine Learning', 'Hardware Integration'],
    image: amrImg,
    year: '2024 - Present',
    company: 'Sensory Labs',
    role: 'Hardware Engineering Lead'
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
    image: butlerXlImg,
    year: '2022 - 2024',
    company: 'UnitX',
    role: 'Hardware Engineering Lead'
  },
  {
    id: 'mill',
    title: 'Mill - Kitchen Food Recycler',
    shortTitle: 'Mill',
    category: 'professional',
    description: 'Founding engineer on a consumer appliance that transforms food scraps into fertilizer. 18 patents, UL/FCC certified, shipped to thousands of homes.',
    fullDescription: `As a founding engineer at Mill, I helped build a kitchen appliance that fundamentally changes how people deal with food waste. The Mill food recycler transforms almost anything—from avocado pits to turkey bones—into nutrient-rich fertilizer, reducing food waste volume by 80%.

This wasn't just a product launch; it was bringing complex robotics and sensing technology into people's homes in a way that's invisible to the user. The system works overnight, automatically adjusting based on what you add, with no buttons to press or settings to configure.

Getting from concept to UL/FCC certified product in thousands of American homes required solving hard problems across mechanical engineering, thermal systems, sensing, and manufacturing at scale. The 18 patents reflect the depth of innovation required to make something this complex feel effortless.`,
    highlights: [
      'Founding engineer bringing complex technology to consumer homes',
      '18 patents for novel mechanical and sensing systems',
      'Led product through UL/FCC certification process',
      'Shipped to thousands of homes across the United States'
    ],
    technologies: ['Consumer Hardware', 'Thermal Systems', 'Embedded Sensing', 'DFM/DFA', 'UL/FCC Certification'],
    image: bumblebeeImg,
    year: '2020 - 2022',
    company: 'Mill',
    role: 'Founding Hardware Engineer'
  },
  {
    id: 'zipline',
    title: 'Zipline - Autonomous Delivery Systems',
    shortTitle: 'Zipline',
    category: 'professional',
    description: 'Designed ground systems for autonomous drone delivery, helping get medical supplies to remote areas faster than roads ever could.',
    fullDescription: `At Zipline, I designed ground systems for the world's largest autonomous drone delivery network. Our drones deliver medical supplies, vaccines, and blood products to hospitals and clinics in areas where roads simply cannot reach fast enough.

The ground systems I worked on are the unsung heroes of autonomous delivery—the infrastructure that enables drones to launch, land, and reload thousands of times with near-perfect reliability. When a hospital needs blood for an emergency surgery, there's no margin for error.

This work showed me what it means to build technology that directly saves lives. The engineering challenges were significant, but the stakes made every solved problem meaningful.`,
    highlights: [
      'Designed ground systems for autonomous drone delivery network',
      'Built infrastructure enabling thousands of reliable flights',
      'Systems support delivery of medical supplies to remote areas',
      'Engineering directly impacting healthcare access globally'
    ],
    technologies: ['Autonomous Systems', 'Ground Infrastructure', 'Mechanical Design', 'Reliability Engineering', 'Logistics'],
    image: fiatImg,
    year: '2019 - 2020',
    company: 'Zipline',
    role: 'Mechanical Design Engineer'
  },
  // Original Portfolio Projects
  {
    id: 'bumblebee-spaces',
    title: 'Bumblebee Spaces Robotic Furniture',
    shortTitle: 'Robotic Furniture',
    category: 'professional',
    description: 'Designed and developed robotic furniture systems that transform living spaces on demand.',
    fullDescription: `At Bumblebee Spaces, I worked on robotic furniture systems that reimagine how people use space in their homes. These ceiling-mounted systems lower furniture—beds, desks, storage—on demand, effectively doubling usable floor space in urban apartments.

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
    year: '2018 - 2019',
    company: 'Bumblebee Spaces',
    role: 'Mechanical Engineer'
  },
  {
    id: 'autonomous-mobile-robot',
    title: 'Mechanical Design of Autonomous Mobile Robot',
    shortTitle: 'AMR Design',
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
    year: '2017 - 2018',
    role: 'Lead Mechanical Engineer'
  },
  {
    id: 'butler-xl',
    title: 'Mechanical Design of AMR - BUTLER XL',
    shortTitle: 'BUTLER XL',
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
    image: butlerXlImg,
    year: '2018',
    role: 'Senior Mechanical Engineer'
  },
  {
    id: 'fiat-closures',
    title: 'CAE of Automotive Side Closures',
    shortTitle: 'Automotive CAE',
    category: 'professional',
    description: 'Computer-aided engineering analysis of automotive door systems for a major manufacturer.',
    fullDescription: `Conducted comprehensive computer-aided engineering analysis of automotive side closure systems (doors) for Fiat Chrysler Automobiles. The work involved structural analysis, NVH optimization, and durability validation using advanced simulation tools.

Automotive closures are surprisingly complex systems that must balance structural rigidity, crash performance, sealing, and user experience—all while meeting aggressive weight and cost targets. This project taught me the rigor required for automotive-grade engineering.`,
    highlights: [
      'Structural and NVH analysis for door systems',
      'Durability validation through simulation',
      'Optimization for weight and cost targets',
      'Automotive-grade engineering standards'
    ],
    technologies: ['ANSYS', 'HyperMesh', 'NVH Analysis', 'Structural FEA', 'Automotive Engineering'],
    image: fiatImg,
    year: '2016 - 2017',
    company: 'Fiat Chrysler Automobiles',
    role: 'CAE Engineer'
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
    role: 'Chassis Lead'
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
    year: '2013',
    role: 'Team Lead'
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
    year: '2014',
    role: 'Design Lead'
  },
  {
    id: 'rc-racing',
    title: 'RC Racing Prototype for Techfest IIT Bombay',
    shortTitle: 'RC Racing',
    category: 'personal',
    description: 'Built high-performance RC racing prototype for competitive events at IIT Bombay Techfest.',
    fullDescription: `Designed and built a high-performance RC racing prototype for competitive events at IIT Bombay's Techfest, one of Asia's largest science and technology festivals.

RC racing is a proving ground for understanding vehicle dynamics at a manageable scale. The principles—weight distribution, suspension tuning, power-to-weight ratio—translate directly to full-scale vehicles, but you can iterate much faster.`,
    highlights: [
      'High-performance chassis design',
      'Competitive racing configuration',
      'Rapid prototyping and iteration',
      'Performance tuning and optimization'
    ],
    technologies: ['RC Design', 'Rapid Prototyping', 'Vehicle Dynamics', 'Performance Tuning', '3D Printing'],
    image: rcRacingImg,
    year: '2013',
    role: 'Designer & Builder'
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
    year: '2015',
    role: 'Personal Project'
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
    year: '2016',
    role: 'Research Engineer'
  },
  {
    id: 'mars-urbanization',
    title: 'Mars Urbanization Challenge',
    shortTitle: 'Mars Challenge',
    category: 'personal',
    description: 'Conceptual design for Mars habitat and urbanization systems for NASA-affiliated competition.',
    fullDescription: `Developed conceptual designs for Mars habitat and urbanization systems as part of a NASA-affiliated design competition. The challenge required thinking through all aspects of sustainable human presence on Mars—from structural systems to life support to psychological well-being.

Projects like this stretch your thinking beyond conventional constraints. When you cannot rely on Earth-based assumptions, you are forced to reason from first principles about what humans actually need to survive and thrive.`,
    highlights: [
      'Comprehensive Mars habitat design',
      'Life support and sustainability systems',
      'Structural design for Mars environment',
      'NASA competition participation'
    ],
    technologies: ['Space Systems', 'Habitat Design', 'Life Support', 'Structural Engineering', 'Systems Thinking'],
    image: marsImg,
    year: '2016',
    role: 'Design Lead'
  },
  {
    id: 'low-cost-ventilator',
    title: 'Design of Low Cost Ventilator',
    shortTitle: 'Ventilator Design',
    category: 'personal',
    description: 'Designed affordable ventilator system for resource-constrained healthcare settings.',
    fullDescription: `Designed a low-cost ventilator system intended for resource-constrained healthcare settings, particularly in developing countries where access to medical equipment is limited.

This project combined mechanical engineering with healthcare impact. The challenge was achieving medical-grade performance at a fraction of traditional costs—requiring creative approaches to components, manufacturing, and reliability.`,
    highlights: [
      'Cost-optimized medical device design',
      'Designed for resource-constrained settings',
      'Medical-grade performance requirements',
      'Focus on manufacturability and reliability'
    ],
    technologies: ['Medical Devices', 'Low-Cost Design', 'Pneumatic Systems', 'Healthcare Engineering', 'DFM'],
    image: ventilatorImg,
    year: '2020',
    role: 'Personal Project'
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
    logo: '/placeholder.svg',
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
