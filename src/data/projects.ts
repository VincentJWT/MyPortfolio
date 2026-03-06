// Project data configuration - Easy to modify for future updates
// To change images, simply update the image paths below

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string; // Main thumbnail image
  images: string[]; // Gallery images for modal
  details: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Multi-Family Residential',
    category: 'Residential',
    description: '4-unit townhouse complex arranged around a central courtyard, meeting density requirements while preserving existing trees.',
    // Main image - can be changed to any image file in /images folder
    image: '/images/01-1.jpg',
    // Gallery images - add or remove as needed
    images: [
      '/images/01-2.jpg',
      '/images/01-3.jpg',
      '/images/01-4.jpg',
    ],
    details: [
      'Revit site modeling and sunlight analysis',
      'Precise control of 1.2m side yard setback + 6.5m rear yard setback',
      'Achieved compliant layout through precise setback control',
    ],
  },
  {
    id: 2,
    title: 'Garage House',
    category: 'Residential',
    description: 'Complete design process from concept to construction documents, simulating real-world workflow from design development to construction phase.',
    image: '/images/Enscape_2025-02-12-23-48-15.jpg',
    images: [
      '/images/Enscape_2025-02-12-23-48-15.jpg',
      '/images/Wentian Jiang-2 STOREY _Page_2.png',
    ],
    details: [
      'Setback and city bylaw compliance',
      'Sunlight analysis',
      'Design & massing studies',
      'Floor plan and elevation development',
    ],
  },
  {
    id: 3,
    title: 'Windsor Home',
    category: 'Residential',
    description: 'Modern two-story residential design developed using BIM software Revit to enhance detailing and refinement of residential drawings.',
    image: '/images/Wentian Jiang-Windsor home.jpg',
    images: [
      '/images/Wentian Jiang-Windsor home.jpg',
      '/images/Wentian Jiang-Windsor home 2.jpg',
      '/images/Wentian Jiang-Windsor home 3.jpg',
      '/images/Wentian Jiang-Windsor home 4.jpg',
      '/images/Wentian Jiang-Windsor home 5.jpg',
      '/images/Wentian Jiang-Windsor home 6.jpg',
    ],
    details: [
      'Functional interior spaces with sleek exterior',
      'Floor plan optimization',
      'Stair 3D modeling',
      'Section and elevation detailing',
    ],
  },
  {
    id: 4,
    title: 'Ambulance HQ',
    category: 'Commercial',
    description: 'Comprehensive BIM-modeled initiative entirely developed using Revit, with detailed division based on fire safety zoning and ratings.',
    image: '/images/WENTIAN JIANG-AMBULANCE HQ Portfolio.jpg',
    images: [
      '/images/WENTIAN JIANG-AMBULANCE HQ Portfolio.jpg',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS FINAL _Page_07.png',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS FINAL _Page_08.png',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS FINAL _Page_16.png',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS FINAL _Page_17.png',
    ],
    details: [
      'Fire safety zoning and ratings',
      'Complex structural requirements',
      'Stair section detailing',
      'Building section coordination',
    ],
  },
  {
    id: 5,
    title: 'Blue Parrot Cru',
    category: 'Commercial',
    description: 'Standalone commercial building fully developed using BIM software Revit, rendered with Enscape for interior and exterior visualization.',
    image: '/images/WENTIAN JIANG Blue Parrot-Phasing.jpg',
    images: [
      '/images/WENTIAN JIANG Blue Parrot-Phasing.jpg',
      '/images/WENTIAN JIANG Blue Parrot-Phasing 3D WR.jpg',
      '/images/WENTIAN JIANG Blue Parrot-Phasing SR.jpg',
      '/images/WENTIAN JIANG Blue Parrot-Phasing WR.jpg',
    ],
    details: [
      'Washroom elevation design',
      '3D washroom modeling',
      'Interior elevation development',
      'Building section coordination',
      'Exterior rendering with Enscape',
    ],
  },
  {
    id: 6,
    title: 'EPL Public Library',
    category: 'Public Building',
    description: 'Public library design emphasizing zoning different areas and understanding the complete architectural design process.',
    image: '/images/Enscape_2024-12-03-12-33-18.jpg',
    images: [
      '/images/Enscape_2024-12-03-12-33-18.jpg',
      '/images/Enscape_2024-12-03-10-02-14.jpg',
    ],
    details: [
      'Entry reception zone design',
      'Collection areas planning',
      'Reading spaces optimization',
      'Functional and inviting environment',
      'AutoCAD and SketchUp utilization',
    ],
  },
  {
    id: 7,
    title: 'Wall or Section Detail',
    category: 'Detail',
    description: 'Focus on mastering wall connections, roof details, and building sections using AutoCAD and Revit.',
    image: '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS detial.jpg',
    images: [
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS detial.jpg',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS detail2.jpg',
      '/images/WENTIAN JIANG-AMBULANCE HEADQUARTERS details 3.jpg',
    ],
    details: [
      'Wall connection detailing',
      'Roof detail development',
      'Building section refinement',
      'Structural stability enhancement',
    ],
  },
  {
    id: 8,
    title: 'Interior/Exterior Rendering',
    category: 'Rendering',
    description: 'Lifelike renderings showcasing practical effects of different designs, enhancing client engagement.',
    image: '/images/Enscape_2025-02-21-16-37-37.jpg',
    images: [
      '/images/Enscape_2025-02-21-16-37-37.jpg',
      '/images/Enscape_2024-03-19-14-04-41.jpg',
      '/images/Enscape_2024-03-29-14-23-21.jpg',
      '/images/Enscape_2024-04-20-13-09-03.jpg',
    ],
    details: [
      'Residential setting visualization',
      'Commercial space rendering',
      'Aesthetic and functional demonstration',
      'Client presentation materials',
    ],
  },
];

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
