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
      '/images/01-2.png',
      '/images/01-3.jpg',
      '/images/01-4.jpg',
      '/images/01-5.jpg',
      '/images/01-6.jpg',
      '/images/01-7.jpg',

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
    image: '/images/02-1.jpg',
    images: [
      '/images/02-2.jpg',
      '/images/02-3.jpg',
      '/images/02-4.jpg',
      '/images/02-5.jpg',
      '/images/02-6.png',
      '/images/02-7.png',
      '/images/02-8.png',
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
    image: '/images/03-1.jpg',
    images: [
      '/images/03-2.jpg',
      '/images/03-3.jpg',
      '/images/03-4.jpg',
      '/images/03-5.jpg',
      '/images/03-6.jpg',
      '/images/03-7.jpg',
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
    image: '/images/04-1.jpg',
    images: [
      '/images/04-2.png',
      '/images/04-3.png',
      '/images/04-4.png',
      '/images/04-5.png',
      '/images/04-6.png',
      '/images/04-7.jpg'
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
    image: '/images/05-1.jpg',
    images: [
      '/images/05-2.jpg',
      '/images/05-3.jpg',
      '/images/05-4.png',
      '/images/05-5.jpg',
      '/images/05-6.jpg',
      '/images/05-7.jpg',
      '/images/05-8.jpg',
      '/images/05-9.jpg',
      '/images/05-10.jpg',
      '/images/05-11.jpg',
      '/images/05-12.jpg',
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
    image: '/images/06-1.jpg',
    images: [
      '/images/06-2.jpg',
      '/images/06-3.jpg',
      '/images/06-4.jpg',
      '/images/06-5.jpg',
      '/images/06-6.jpg',
      '/images/06-7.jpg',
      '/images/06-8.jpg',
      '/images/06-9.jpg',
      '/images/06-10.jpg',
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
    image: '/images/07-1.jpg',
    images: [
      '/images/07-2.png',
      '/images/07-3.png',
      '/images/07-4.png',
      '/images/07-5.jpg',
      '/images/07-6.jpg',
      '/images/07-7.png',
      '/images/07-8.jpg',
      '/images/07-9.jpg',
      '/images/07-10.png',
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
    image: '/images/08-1.jpg',
    images: [
      '/images/08-2.jpg',
      '/images/08-3.jpg',
      '/images/08-4.jpg',
      '/images/08-5.jpg',
      '/images/08-6.jpg',
      '/images/08-7.jpg',
      '/images/08-8.jpg',
      '/images/08-9.png',
      '/images/08-10.jpg',
      '/images/08-11.png',
    ],
    details: [
      'Residential setting visualization',
      'Commercial space rendering',
      'Aesthetic and functional demonstration',
      'Client presentation materials',
    ],
  },
 {
  id: 9,
  title: 'Drone Site Survey',
  category: 'Site Documentation',
  description: 'Aerial drone survey used to document site conditions and surrounding context for residential planning and design analysis.',
  image: '/images/09-1.jpg',
  images: [
    '/images/09-2.jpg',
    '/images/09-3.jpg',
    '/images/09-4.png',
  ],
  details: [
    'Drone aerial photography and site documentation',
    'Site context analysis and surrounding conditions study',
    'High-resolution image capture for design reference',
    'Visual documentation supporting architectural planning',
  ],
},

{
  id: 10,
  title: 'Existing Building Site Measurement',
  category: 'Site Survey',
  description: 'Accurate on-site measurement of an existing residential building to produce reliable as-built drawings and digital models.',
  image: '/images/10-1.png',
  images: [
    '/images/10-2.jpg',
    '/images/10-3.png',
    '/images/10-4.jpg',
    '/images/10-5.jpg',
    '/images/10-5.jpg',
  ],
  details: [
    'Field measurement of building dimensions and layout',
    'Documentation of openings, wall thickness, and structural elements',
    'Development of accurate as-built drawings',
    'Preparation of digital drafting files for modeling',
  ],
},

{
  id: 11,
  title: 'Two-Storey Residential House',
  category: 'Residential',
  description: 'Two-storey residential house design focusing on functional layout, building envelope detailing, and BIM-based documentation.',
  image: '/images/11-1.png',
  images: [
    '/images/11-2.png',
    '/images/11-3.png',
    '/images/11-4.png',
    '/images/11-5.png',
  ],
  details: [
    'Development of architectural floor plans and elevations',
    'BIM modeling using Revit',
    'Building section and wall assembly detailing',
    'Residential design and construction documentation',
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
