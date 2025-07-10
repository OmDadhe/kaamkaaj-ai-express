export interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  icon: string;
  formFields: FormField[];
  detailDescription: string;
}

export interface FormField {
  label: string;
  type: 'text' | 'textarea' | 'select' | 'url';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export const packages: Package[] = [
  {
    id: 'quickinsights',
    name: 'QuickInsights Report',
    price: '₹700',
    description: '5-page industry analysis & recommendations',
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Get a comprehensive 5-page industry analysis with actionable recommendations. Our AI experts will analyze your specific market, competitors, and provide strategic insights to help your business grow.',
    formFields: [
      { label: 'Business Sector', type: 'text', placeholder: 'e.g., Technology, Healthcare, Finance', required: true },
      { label: 'Market Focus', type: 'text', placeholder: 'e.g., B2B SaaS, Consumer Apps', required: true },
      { label: 'Competitors (names/URLs)', type: 'textarea', placeholder: 'List main competitors with their websites', required: true },
      { label: 'Focus Areas', type: 'textarea', placeholder: 'Specific areas you want analyzed', required: true },
      { label: 'Deadline', type: 'select', options: ['Within 1 hour', 'Within 2 hours', 'Within 4 hours'], required: true }
    ]
  },
  {
    id: 'bizanalytics',
    name: 'BizAnalytics Snapshot',
    price: '₹700',
    description: '10 key metrics with benchmarks & chart descriptions',
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Receive 10 key business metrics with industry benchmarks and detailed chart descriptions. Perfect for board presentations and strategic planning.',
    formFields: [
      { label: 'Company Size', type: 'select', options: ['Startup (1-10)', 'Small (11-50)', 'Medium (51-200)', 'Large (200+)'], required: true },
      { label: 'Sector', type: 'text', placeholder: 'Your industry sector', required: true },
      { label: 'Metrics of Interest', type: 'textarea', placeholder: 'Specific metrics you want to track', required: true },
      { label: 'Benchmark Source', type: 'text', placeholder: 'Preferred benchmark source or industry', required: true },
      { label: 'Chart Type', type: 'select', options: ['Bar Charts', 'Line Graphs', 'Pie Charts', 'Mixed'], required: true }
    ]
  },
  {
    id: 'proemail',
    name: 'ProEmail Express',
    price: '₹700',
    description: '3 professional email drafts (sales, follow-up, internal)',
    icon: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Get 3 professionally crafted email templates: sales outreach, follow-up sequences, and internal communications. Ready to use and customizable.',
    formFields: [
      { label: 'Email Purpose', type: 'select', options: ['Sales Outreach', 'Follow-up', 'Internal Communication', 'Customer Support'], required: true },
      { label: 'Recipient Profile', type: 'textarea', placeholder: 'Describe your target audience', required: true },
      { label: 'Tone Preference', type: 'select', options: ['Professional', 'Friendly', 'Formal', 'Casual'], required: true }
    ]
  },
  {
    id: 'embassy',
    name: 'Embassy CoverLetter Fast',
    price: '₹700',
    description: 'Embassy-formatted visa/scholarship cover letter',
    icon: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Professional embassy-formatted cover letters for visa applications and scholarship programs. Tailored to specific embassy requirements and application types.',
    formFields: [
      { label: 'Embassy Name', type: 'text', placeholder: 'e.g., US Embassy, UK Embassy', required: true },
      { label: 'Application Type', type: 'select', options: ['Student Visa', 'Work Visa', 'Tourist Visa', 'Scholarship'], required: true },
      { label: 'Applicant Background', type: 'textarea', placeholder: 'Your education, work experience, purpose', required: true },
      { label: 'Achievements', type: 'textarea', placeholder: 'Key achievements and qualifications', required: true }
    ]
  },
  {
    id: 'promptxpress',
    name: 'PromptXpress Starter',
    price: '₹700',
    description: '5 custom AI prompts for marketing & data analysis',
    icon: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=center',
    detailDescription: '5 custom-crafted AI prompts designed for marketing campaigns and data analysis. Optimized for ChatGPT, Claude, and other AI tools.',
    formFields: [
      { label: 'Use Case', type: 'select', options: ['Marketing Content', 'Data Analysis', 'Customer Research', 'Content Strategy'], required: true },
      { label: 'Business Goals', type: 'textarea', placeholder: 'What you want to achieve', required: true },
      { label: 'Brand Tone', type: 'select', options: ['Professional', 'Creative', 'Technical', 'Conversational'], required: true }
    ]
  },
  {
    id: 'devprompt',
    name: 'DevPrompt Pro',
    price: '₹700',
    description: '3 API spec & code scaffold kits',
    icon: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=64&h=64&fit=crop&crop=center',
    detailDescription: '3 complete API specification and code scaffolding kits with documentation. Includes REST API designs, database schemas, and implementation guides.',
    formFields: [
      { label: 'Language/Framework', type: 'select', options: ['Node.js/Express', 'Python/FastAPI', 'Java/Spring', 'PHP/Laravel', 'Go'], required: true },
      { label: 'API Endpoints', type: 'textarea', placeholder: 'Describe the endpoints you need', required: true },
      { label: 'Documentation Standard', type: 'select', options: ['OpenAPI/Swagger', 'Postman', 'Custom'], required: true }
    ]
  },
  {
    id: 'seobooster',
    name: 'SEO Content Booster',
    price: '₹700',
    description: '5 SEO-optimized content outlines',
    icon: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=64&h=64&fit=crop&crop=center',
    detailDescription: '5 comprehensive SEO-optimized content outlines with keyword research, meta descriptions, and content structure for maximum search visibility.',
    formFields: [
      { label: 'Topic/Niche', type: 'text', placeholder: 'Your content topic or niche', required: true },
      { label: 'Target Keywords', type: 'textarea', placeholder: 'Primary and secondary keywords', required: true },
      { label: 'Word Count per Section', type: 'select', options: ['500-800 words', '800-1200 words', '1200-2000 words'], required: true }
    ]
  },
  {
    id: 'resume',
    name: 'Resume & LinkedIn Revamp',
    price: '₹700',
    description: 'ATS-optimized resume & LinkedIn summary',
    icon: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Complete resume optimization for ATS systems plus a compelling LinkedIn summary. Increase your job application success rate significantly.',
    formFields: [
      { label: 'Upload Resume URL', type: 'url', placeholder: 'Link to your current resume (Google Drive, Dropbox)', required: true },
      { label: 'LinkedIn URL', type: 'url', placeholder: 'Your LinkedIn profile URL', required: true },
      { label: 'Target Role', type: 'text', placeholder: 'Job title you are targeting', required: true },
      { label: 'Industry', type: 'text', placeholder: 'Your target industry', required: true }
    ]
  },
  {
    id: 'customreport',
    name: 'Custom Report Generator',
    price: '₹700',
    description: '5–10 page custom business report',
    icon: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Custom business report ranging from 5-10 pages with charts, analysis, and recommendations tailored to your specific business needs.',
    formFields: [
      { label: 'Topic', type: 'text', placeholder: 'Report topic or subject', required: true },
      { label: 'Scope', type: 'textarea', placeholder: 'What should be covered in the report', required: true },
      { label: 'Page Count', type: 'select', options: ['5 pages', '6-7 pages', '8-10 pages'], required: true },
      { label: 'Preferred Sources', type: 'textarea', placeholder: 'Any specific data sources or references', required: false }
    ]
  },
  {
    id: 'research',
    name: 'Corporate Research Paper',
    price: '₹700',
    description: '8–12-page academic research with citations',
    icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Academic-quality research paper with proper citations, methodology, and analysis. Perfect for corporate training and educational purposes.',
    formFields: [
      { label: 'Research Question', type: 'textarea', placeholder: 'The main question your research should answer', required: true },
      { label: 'Methodology', type: 'select', options: ['Qualitative', 'Quantitative', 'Mixed Methods', 'Literature Review'], required: true },
      { label: 'Case Study Focus', type: 'textarea', placeholder: 'Specific companies or examples to focus on', required: false }
    ]
  },
  {
    id: 'documentation',
    name: 'SaaS Documentation',
    price: '₹700',
    description: '8–15-page user guides & API tutorials',
    icon: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=64&h=64&fit=crop&crop=center',
    detailDescription: 'Complete SaaS documentation package including user guides, API tutorials, and onboarding materials. Professional and user-friendly.',
    formFields: [
      { label: 'Product Overview', type: 'textarea', placeholder: 'Describe your SaaS product', required: true },
      { label: 'User Personas', type: 'textarea', placeholder: 'Describe your typical users', required: true },
      { label: 'Key Features', type: 'textarea', placeholder: 'Main features to document', required: true }
    ]
  },
  {
    id: 'productdesc',
    name: 'Product Descriptions',
    price: '₹700',
    description: '5 e-commerce product descriptions with SEO',
    icon: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop&crop=center',
    detailDescription: '5 compelling e-commerce product descriptions optimized for SEO and conversions. Increase your product page performance and sales.',
    formFields: [
      { label: 'Product Name', type: 'text', placeholder: 'Name of your product', required: true },
      { label: 'Features', type: 'textarea', placeholder: 'Key product features and benefits', required: true },
      { label: 'Materials', type: 'text', placeholder: 'Materials used (if applicable)', required: false },
      { label: 'Tone', type: 'select', options: ['Professional', 'Casual', 'Luxury', 'Technical'], required: true },
      { label: 'Length', type: 'select', options: ['Short (50-100 words)', 'Medium (100-200 words)', 'Long (200+ words)'], required: true }
    ]
  }
];