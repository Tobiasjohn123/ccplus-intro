// price = lowest price on the flyer, tiers = the flyer text
export const COURSES = [
  { name: 'Computer Basic Class (MS Office & Windows)', price: 30000, tiers: '30k / 35k / 40k' },
  { name: 'Google Suite & Canva Mastery', price: 30000, tiers: '30k / 35k / 40k' },
  { name: 'Coding (Scratch/Robotics)', price: 80000, tiers: '80k (Child)' },
  { name: 'Graphics Design (Photoshop & AI)', price: 60000, tiers: '60k / 60k / 70k' },
  { name: 'Ethical AI & Prompt Engineering', price: 50000, tiers: '50k / 60k' },
  { name: 'Data Analytics (Excel)', price: 60000, tiers: '60k / 60k' },
  { name: 'Data Analytics (Power BI & SQL)', price: 70000, tiers: '70k / 70k' },
  { name: 'Data Analytics (Tableau & Python)', price: 100000, tiers: '100k / 100k' },
  { name: 'Digital Marketing & Canva (Beginner)', price: 60000, tiers: '60k / 60k' },
  { name: 'Digital Marketing & Video Editing (Advanced)', price: 90000, tiers: '90k / 90k' },
  { name: 'Web Development (Frontend)', price: 100000, tiers: '100k / 100k' },
  { name: 'Mobile App Development', price: 100000, tiers: '100k / 100k' },
  { name: 'Backend (Python, Node JS)', price: 200000, tiers: '200k / 200k' },
  { name: 'Cybersecurity Beginners', price: 100000, tiers: '100k / 120k' },
  { name: 'Cybersecurity (Advanced)', price: 160000, tiers: '160k / 180k' },
]

export const naira = (n) => '\u20A6' + Number(n).toLocaleString('en-NG')