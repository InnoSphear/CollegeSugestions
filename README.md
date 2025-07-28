# CollegeSuggest - Find Your Perfect College Match

A modern, responsive web application built with React and Tailwind CSS that helps students find their ideal college through intelligent search, filtering, and recommendation features.

## 🌟 Features

### 🏠 Homepage
- **Hero Section** with gradient background and call-to-action buttons
- **Statistics Section** showcasing platform achievements
- **Features Overview** highlighting key platform benefits
- **How It Works** step-by-step process explanation
- **Student Testimonials** with rating system
- **Call-to-Action Section** encouraging user registration

### 🔍 College Search
- **Advanced Filtering System**:
  - Search by name, location, or program
  - Filter by state, college type, size, tuition range, and ratings
  - Real-time filtering with instant results
- **Smart Sorting Options**:
  - Sort by name, rating, tuition (low to high, high to low)
- **Detailed College Cards** with:
  - College images and basic information
  - Ratings and reviews
  - Tuition costs and student population
  - Program highlights
  - Quick access to detailed view

### 🏫 College Details
- **Comprehensive College Profiles**:
  - Hero section with college image and location
  - Detailed overview and key statistics
  - Popular programs and highlights
  - Admissions information (acceptance rate, SAT/ACT ranges)
- **Sidebar Information**:
  - Quick facts summary
  - Tuition and contact information
  - Student reviews with rating breakdowns
  - Similar college recommendations

### 👤 User Authentication
- **Modern Login/Register Forms**:
  - Clean, responsive design
  - Password visibility toggle
  - Social media authentication options (Google, Facebook)
  - Form validation and error handling
  - Remember me functionality

### 📊 User Profile & Dashboard
- **Comprehensive Profile Management**:
  - Editable personal information
  - Academic details (GPA, graduation year)
  - Interest tags and bio
  - Contact information management
- **Dashboard Features**:
  - Personal statistics (saved colleges, applications)
  - Saved colleges with application status
  - Recent activity tracking
  - Quick action buttons
  - Personalized recommendations

### 📞 Contact & About
- **Contact Page**:
  - Contact form with multiple subject categories
  - Office information and business hours
  - FAQ section
  - Emergency support option
- **About Page**:
  - Company story and mission
  - Team member profiles
  - Core values presentation
  - Achievement statistics

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.0.0
- **Styling**: Tailwind CSS 4.1.11
- **Routing**: React Router DOM 7.7.1
- **Icons**: 
  - React Icons 5.5.0
  - Lucide React 0.525.0
- **HTTP Client**: Axios 1.11.0
- **Development**: 
  - ESLint for code linting
  - Hot module replacement for fast development

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd college-suggest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── CollegeSearch.jsx # College search and filtering
│   ├── CollegeDetails.jsx # Individual college details
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact page
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   └── Profile.jsx     # User profile and dashboard
├── data/               # Data files
│   └── collegesData.js # Sample college data
├── utils/              # Utility functions
├── App.jsx             # Main application component
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # Application entry point
```

## 🎨 Design Features

### Responsive Design
- **Mobile-first approach** with responsive breakpoints
- **Flexible grid layouts** that adapt to different screen sizes
- **Touch-friendly interface** for mobile devices

### Modern UI/UX
- **Clean, professional design** with consistent spacing
- **Smooth animations and transitions** for better user experience
- **Intuitive navigation** with clear visual hierarchy
- **Accessibility features** with proper contrast and focus states

### Color Scheme
- **Primary Blue**: #3B82F6 (blue-600)
- **Secondary Gray**: #6B7280 (gray-500)
- **Success Green**: #10B981 (emerald-500)
- **Warning Yellow**: #F59E0B (amber-500)
- **Background**: #F9FAFB (gray-50)

## 📊 Sample Data

The application includes comprehensive sample data for 12 top universities, including:

- **Ivy League Schools**: Harvard, Yale, Princeton
- **Top Tech Schools**: Stanford, MIT, Caltech
- **Public Universities**: UC Berkeley, University of Michigan, UT Austin
- **Private Research Universities**: Columbia, NYU

Each college entry includes:
- Basic information (name, location, type, size)
- Academic data (admission rates, test score ranges)
- Financial information (tuition costs)
- Student reviews and ratings
- Program offerings and highlights

## 🔧 Customization

### Adding New Colleges
Edit `src/data/collegesData.js` to add new college entries:

```javascript
{
  id: 13,
  name: "Your College Name",
  location: "City, State",
  state: "State",
  type: "Public/Private",
  // ... other properties
}
```

### Styling Customization
- Modify `tailwind.config.js` for custom colors and themes
- Update `src/index.css` for global style overrides
- Use Tailwind utility classes for component-specific styling

### Adding New Features
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Update routing in `src/App.jsx`

## 🌐 Deployment

### Building for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Web Hosting**: Upload the `dist/` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** for the excellent frontend framework
- **Tailwind CSS** for the utility-first CSS framework
- **Unsplash** for providing high-quality stock images
- **React Icons & Lucide** for the comprehensive icon libraries

## 📧 Support

For support, email support@collegesuggest.com or create an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
