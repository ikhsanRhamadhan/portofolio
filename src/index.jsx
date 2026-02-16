import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, ChevronRight, Download, Moon, Sun, Globe, Share2, Printer, Link as LinkIcon } from 'lucide-react';


// Portfolio Data - Ganti dengan data Anda
const portfolioData = {
  personal: {
    name: "Tsabitha Anggraeni",
    title: "Architecture Portfolio",
    email: "arya.wijaya@email.com",
    phone: "+62 812-3456-7890",
    whatsapp: "6281234567890",
    instagram: "@aryaarchitect",
    linkedin: "arya-wijaya",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces", // Professional headshot
    tagline: "Creating spaces that blend function with poetic design"
  },
  
  about: {
    description: "Saya adalah arsitek muda dengan passion dalam menciptakan ruang yang tidak hanya fungsional, tetapi juga memiliki nilai estetika tinggi dan berkelanjutan. Dengan pendekatan desain yang kontekstual, saya percaya bahwa arsitektur yang baik adalah yang merespon lingkungan, budaya, dan kebutuhan penggunanya.",
    skills: ["Architectural Design", "3D Visualization", "Space Planning", "Sustainable Design", "Urban Design"],
    software: ["AutoCAD", "SketchUp", "Lumion", "Revit", "Photoshop", "Enscape", "V-Ray"]
  },
  
  cv: {
    education: [
      {
        degree: "S1 Arsitektur",
        institution: "Universitas Indonesia",
        year: "2018 - 2023",
        gpa: "3.78/4.00"
      }
    ],
    experience: [
      {
        role: "Architectural Intern",
        company: "Studio Desain Jakarta",
        period: "Jun 2022 - Des 2022",
        description: "Assisted in residential and commercial projects"
      },
      {
        role: "Vice President",
        company: "Himpunan Mahasiswa Arsitektur UI",
        period: "2021 - 2022",
        description: "Led team of 50+ members in academic and design events"
      }
    ],
    certificates: [
      "Certified AutoCAD Professional - Autodesk",
      "Green Building Fundamentals - GBCI",
      "SketchUp Advanced Training - Trimble"
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "Rumah Tropis Modern",
      location: "Bogor, Jawa Barat",
      year: "2023",
      category: "Residential",
      concept: "Desain rumah yang mengintegrasikan konsep tropis modern dengan ventilasi silang alami dan pencahayaan maksimal. Mengutamakan sustainability dengan penggunaan material lokal.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", // Modern tropical house exterior
      images: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop", // Living room interior
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop", // Kitchen area
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", // Bedroom view
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop"  // Garden/outdoor
      ],
      features: ["Site Analysis", "Floor Plan", "3D Rendering", "Section Drawing"],
      landArea: "200 m²",
      buildingArea: "150 m²"
    },
    {
      id: 2,
      title: "Kafe Urban Minimalis",
      location: "Jakarta Selatan",
      year: "2023",
      category: "Commercial",
      concept: "Konsep minimalis dengan sentuhan industrial. Menciptakan suasana hangat dan intimate untuk pengunjung dengan material exposed concrete dan wood accent.",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop", // Modern cafe exterior
      images: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop", // Cafe interior seating
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop", // Bar counter area
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop"  // Dining space
      ],
      features: ["Interior Design", "Furniture Layout", "3D Visualization"],
      area: "120 m²"
    },
    {
      id: 3,
      title: "Taman Kota Berkelanjutan",
      location: "Bandung, Jawa Barat",
      year: "2022",
      category: "Landscape",
      concept: "Urban park yang mengedepankan konsep sustainable landscape. Integrasi ruang hijau dengan fasilitas publik yang ramah disabilitas dan keluarga.",
      image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&h=600&fit=crop", // Urban park landscape
      images: [
        "https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=800&h=600&fit=crop", // Park pathway
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop", // Green space aerial
        "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&h=600&fit=crop"  // Park facilities
      ],
      features: ["Master Plan", "Landscape Design", "Circulation Analysis"],
      area: "5,000 m²"
    },
    {
      id: 4,
      title: "Villa Kontemporer Pantai",
      location: "Bali",
      year: "2023",
      category: "Residential",
      concept: "Villa mewah dengan konsep open-plan yang memaksimalkan view laut. Desain kontemporer dengan material natural seperti kayu jati dan batu alam.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", // Luxury beach villa
      images: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop", // Villa exterior pool
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop", // Living room ocean view
        "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop"  // Master bedroom
      ],
      features: ["Architectural Design", "3D Visualization", "Construction Detail"],
      landArea: "500 m²",
      buildingArea: "350 m²"
    },
    {
      id: 5,
      title: "Co-Working Space Modern",
      location: "Surabaya, Jawa Timur",
      year: "2022",
      category: "Commercial",
      concept: "Ruang kerja bersama yang fleksibel dengan zona-zona yang mendukung produktivitas. Kombinasi area private dan collaborative workspace.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", // Modern office space
      images: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", // Open workspace
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop", // Meeting room
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"  // Break area
      ],
      features: ["Space Planning", "Interior Design", "Lighting Design"],
      area: "400 m²"
    },
    {
      id: 6,
      title: "Museum Seni Kontemporer",
      location: "Yogyakarta",
      year: "2022",
      category: "Public Building",
      concept: "Bangunan museum dengan pendekatan kontekstual terhadap lingkungan sekitar. Fasad yang unik mencerminkan identitas seni kontemporer.",
      image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&h=600&fit=crop", // Modern museum exterior
      images: [
        "https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&h=600&fit=crop", // Gallery interior
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop", // Exhibition hall
        "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&h=600&fit=crop"  // Museum atrium
      ],
      features: ["Facade Design", "Exhibition Layout", "Structural Analysis"],
      area: "2,500 m²"
    }
  ],
  
  otherWorks: [
    {
      category: "Interior Design",
      items: [
        { 
          title: "Scandinavian Bedroom", 
          image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop" 
        },
        { 
          title: "Minimalist Kitchen", 
          image: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600&h=400&fit=crop" 
        },
        { 
          title: "Industrial Living Room", 
          image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop" 
        },
        { 
          title: "Modern Bathroom", 
          image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop" 
        }
      ]
    },
    {
      category: "Urban Design & Landscape",
      items: [
        { 
          title: "Public Plaza Design", 
          image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop" 
        },
        { 
          title: "Rooftop Garden", 
          image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop" 
        },
        { 
          title: "Urban Masterplan", 
          image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop" 
        }
      ]
    },
    {
      category: "Sketches & Conceptual Design",
      items: [
        { 
          title: "Hand Sketch - Pavilion", 
          image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop" 
        },
        { 
          title: "Conceptual Model", 
          image: "https://images.unsplash.com/photo-1545158535-c3daa0bcd2f1?w=600&h=400&fit=crop" 
        },
        { 
          title: "Perspective Drawing", 
          image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop" 
        }
      ]
    },
    {
      category: "Furniture Design",
      items: [
        { 
          title: "Custom Bookshelf", 
          image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=400&fit=crop" 
        },
        { 
          title: "Modular Chair", 
          image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop" 
        }
      ]
    }
  ]
};

const ArchitecturePortfolio = () => {
  const [activeSection, setActiveSection] = useState('cover');
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('id'); // 'id' or 'en'
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const printPortfolio = () => {
    window.print();
  };

  const sharePortfolio = (platform) => {
    const url = window.location.href;
    const text = `Check out ${portfolioData.personal.name}'s Architecture Portfolio`;
    
    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank');
    }
    setShowShareMenu(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
    setShowShareMenu(false);
  };

  const generateAndDownloadCV = async () => {
    // Import jsPDF dynamically
    const { jsPDF } = await import('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPos = 20;
    
    // Colors
    const primaryColor = [26, 26, 26];
    const accentColor = [201, 168, 106];
    const grayColor = [102, 102, 102];
    
    // Header - Name
    doc.setFontSize(28);
    doc.setTextColor(...primaryColor);
    doc.text(portfolioData.personal.name, pageWidth / 2, yPos, { align: 'center' });
    
    // Title
    yPos += 10;
    doc.setFontSize(12);
    doc.setTextColor(...accentColor);
    doc.text(portfolioData.personal.title.toUpperCase(), pageWidth / 2, yPos, { align: 'center' });
    
    // Line separator
    yPos += 5;
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(0.5);
    doc.line(40, yPos, pageWidth - 40, yPos);
    
    // Contact Info
    yPos += 10;
    doc.setFontSize(9);
    doc.setTextColor(...grayColor);
    const contactInfo = `${portfolioData.personal.email} | ${portfolioData.personal.phone} | ${portfolioData.personal.instagram}`;
    doc.text(contactInfo, pageWidth / 2, yPos, { align: 'center' });
    
    // About Section
    yPos += 15;
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text('ABOUT ME', 20, yPos);
    
    yPos += 8;
    doc.setFontSize(9);
    doc.setTextColor(...primaryColor);
    const aboutLines = doc.splitTextToSize(portfolioData.about.description, pageWidth - 40);
    doc.text(aboutLines, 20, yPos);
    yPos += aboutLines.length * 5 + 5;
    
    // Skills
    doc.setFontSize(10);
    doc.setTextColor(...accentColor);
    doc.text('Skills: ', 20, yPos);
    doc.setTextColor(...primaryColor);
    doc.text(portfolioData.about.skills.join(', '), 38, yPos);
    yPos += 8;
    
    // Software
    doc.setTextColor(...accentColor);
    doc.text('Software: ', 20, yPos);
    doc.setTextColor(...primaryColor);
    const softwareText = portfolioData.about.software.join(', ');
    const softwareLines = doc.splitTextToSize(softwareText, pageWidth - 50);
    doc.text(softwareLines, 38, yPos);
    yPos += softwareLines.length * 5 + 10;
    
    // Education Section
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text('EDUCATION', 20, yPos);
    yPos += 8;
    
    portfolioData.cv.education.forEach(edu => {
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text(edu.degree, 20, yPos);
      yPos += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(...grayColor);
      doc.text(`${edu.institution} | ${edu.year}`, 20, yPos);
      yPos += 5;
      
      doc.text(`GPA: ${edu.gpa}`, 20, yPos);
      yPos += 8;
    });
    
    // Experience Section
    yPos += 5;
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text('EXPERIENCE', 20, yPos);
    yPos += 8;
    
    portfolioData.cv.experience.forEach(exp => {
      doc.setFontSize(11);
      doc.setTextColor(...primaryColor);
      doc.text(exp.role, 20, yPos);
      yPos += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(...grayColor);
      doc.text(`${exp.company} | ${exp.period}`, 20, yPos);
      yPos += 5;
      
      doc.setTextColor(...primaryColor);
      const descLines = doc.splitTextToSize(exp.description, pageWidth - 40);
      doc.text(descLines, 20, yPos);
      yPos += descLines.length * 5 + 5;
    });
    
    // Check if we need a new page
    if (yPos > pageHeight - 40) {
      doc.addPage();
      yPos = 20;
    }
    
    // Certificates
    yPos += 5;
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text('CERTIFICATES', 20, yPos);
    yPos += 8;
    
    portfolioData.cv.certificates.forEach(cert => {
      doc.setFontSize(9);
      doc.setTextColor(...primaryColor);
      doc.text(`• ${cert}`, 20, yPos);
      yPos += 6;
    });
    
    // Projects Section (New Page)
    doc.addPage();
    yPos = 20;
    
    doc.setFontSize(14);
    doc.setTextColor(...accentColor);
    doc.text('SELECTED PROJECTS', 20, yPos);
    yPos += 8;
    
    portfolioData.projects.forEach(project => {
      // Check if we need a new page
      if (yPos > pageHeight - 60) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(12);
      doc.setTextColor(...primaryColor);
      doc.text(project.title, 20, yPos);
      yPos += 5;
      
      doc.setFontSize(9);
      doc.setTextColor(...accentColor);
      doc.text(`${project.category} | ${project.location} | ${project.year}`, 20, yPos);
      yPos += 6;
      
      doc.setTextColor(...primaryColor);
      const conceptLines = doc.splitTextToSize(project.concept, pageWidth - 40);
      doc.text(conceptLines, 20, yPos);
      yPos += conceptLines.length * 5 + 3;
      
      if (project.landArea) {
        doc.setTextColor(...grayColor);
        doc.text(`Land Area: ${project.landArea} | Building Area: ${project.buildingArea}`, 20, yPos);
        yPos += 6;
      }
      
      doc.setTextColor(...grayColor);
      doc.text(`Features: ${project.features.join(', ')}`, 20, yPos);
      yPos += 10;
    });
    
    // Footer
    const footerY = pageHeight - 15;
    doc.setFontSize(8);
    doc.setTextColor(...grayColor);
    doc.text(`© ${new Date().getFullYear()} ${portfolioData.personal.name}. All Rights Reserved.`, pageWidth / 2, footerY, { align: 'center' });
    
    // Save the PDF
    doc.save(`${portfolioData.personal.name.replace(/\s/g, '_')}_CV.pdf`);
  };

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #1a1a1a;
          --secondary: #2d2d2d;
          --accent: #c9a86a;
          --light: #f5f5f5;
          --white: #ffffff;
          --gray: #666666;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--light);
          color: var(--primary);
          line-height: 1.6;
          overflow-x: hidden;
          transition: background 0.3s ease, color 0.3s ease;
        }

        ${darkMode ? `
          body {
            background: #0f0f0f;
            color: #f5f5f5;
          }
          
          .section {
            background: #1a1a1a !important;
          }
          
          .section[style*="background: var(--light)"] {
            background: #0f0f0f !important;
          }
          
          .project-card,
          .modal-content,
          .cv-item,
          .software-item,
          .skill-tag,
          .feature-tag,
          .contact-link {
            background: #2d2d2d !important;
            color: #f5f5f5 !important;
            border-color: #3d3d3d !important;
          }
          
          .section-title,
          .project-title,
          .cv-title,
          .work-overlay {
            color: #f5f5f5 !important;
          }
          
          .about-text,
          .project-concept,
          .cv-desc {
            color: #d1d1d1 !important;
          }
          
          .problem-card {
            background: #2d2d2d !important;
          }
          
          .value-card {
            background: #2d2d2d !important;
          }
          
          .value-card:hover {
            background: var(--accent) !important;
            color: white !important;
          }
        ` : ''}

        .portfolio-container {
          position: relative;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(201, 168, 106, 0.1);
          z-index: 1000;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #c9a86a, #d4b87c);
          transition: width 0.1s ease;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          right: 0;
          width: 80px;
          height: 100vh;
          background: var(--primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 0;
          z-index: 999;
          transition: all 0.3s ease;
        }

        .nav.open {
          width: 300px;
        }

        .nav-toggle {
          cursor: pointer;
          color: var(--white);
          margin-bottom: 60px;
        }

        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 30px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .nav.open .nav-links {
          opacity: 1;
          pointer-events: all;
        }

        .nav-link {
          color: var(--light);
          text-decoration: none;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: color 0.3s;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .nav-download-btn {
          width: 100%;
          padding: 15px 20px;
          background: var(--accent);
          color: var(--white);
          border: none;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
          font-weight: 600;
        }

        .nav-download-btn:hover {
          background: #d4b87c;
          transform: translateY(-2px);
        }

        .nav-feature-btn {
          width: 100%;
          padding: 12px 15px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s;
          font-weight: 500;
        }

        .nav-feature-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--accent);
        }

        /* Share Popup */
        .share-popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2500;
          animation: fadeIn 0.2s ease;
        }

        .share-popup-content {
          background: var(--white);
          padding: 30px;
          border-radius: 12px;
          min-width: 300px;
          max-width: 90%;
        }

        ${darkMode ? `
          .share-popup-content {
            background: #2d2d2d;
            color: #f5f5f5;
          }
        ` : ''}

        .share-btn {
          width: 100%;
          padding: 12px 20px;
          background: var(--light);
          border: 1px solid var(--border-color);
          color: var(--primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s;
          font-size: 14px;
          font-weight: 500;
        }

        .share-btn:hover {
          background: var(--accent);
          color: var(--white);
          border-color: var(--accent);
        }

        ${darkMode ? `
          .share-btn {
            background: #1a1a1a;
            color: #f5f5f5;
            border-color: #3d3d3d;
          }
        ` : ''}

        /* Print Styles */
        @media print {
          .nav,
          .progress-bar,
          .nav-toggle,
          .share-popup,
          .modal {
            display: none !important;
          }

          .section {
            page-break-inside: avoid;
            padding: 40px 20px !important;
          }

          .project-card {
            page-break-inside: avoid;
          }

          body {
            background: white !important;
            color: black !important;
          }
        }

        /* Cover Section */
        .cover {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          position: relative;
          overflow: hidden;
        }

        .cover::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="rgba(201,168,106,0.03)" width="100" height="100"/><circle cx="50" cy="50" r="30" fill="none" stroke="rgba(201,168,106,0.1)" stroke-width="0.5"/></svg>');
          background-size: 100px 100px;
          opacity: 0.3;
        }

        .cover-content {
          text-align: center;
          z-index: 1;
          animation: fadeInUp 1s ease;
        }

        .cover-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--accent);
          margin-bottom: 30px;
          animation: fadeIn 1.5s ease;
        }

        .cover-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          color: var(--white);
          margin-bottom: 10px;
          letter-spacing: 3px;
        }

        .cover-title {
          font-size: 18px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .cover-tagline {
          font-size: 16px;
          color: var(--light);
          font-style: italic;
          opacity: 0.8;
          margin-bottom: 40px;
        }

        .cover-contacts {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cover-contact {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--light);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s;
        }

        .cover-contact:hover {
          color: var(--accent);
          transform: translateY(-2px);
        }

        /* Section Base */
        .section {
          min-height: 100vh;
          padding: 120px 80px 120px 160px;
          background: var(--white);
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          margin-bottom: 20px;
          color: var(--primary);
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60%;
          height: 2px;
          background: var(--accent);
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 60px;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .about-text {
          font-size: 18px;
          line-height: 2;
          color: var(--secondary);
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 40px;
        }

        .skill-tag {
          padding: 12px 24px;
          background: var(--light);
          border: 1px solid var(--accent);
          color: var(--primary);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s;
        }

        .skill-tag:hover {
          background: var(--accent);
          color: var(--white);
        }

        .software-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .software-item {
          padding: 20px;
          background: var(--light);
          text-align: center;
          font-weight: 500;
          transition: all 0.3s;
        }

        .software-item:hover {
          background: var(--primary);
          color: var(--white);
        }

        /* CV Section */
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .cv-item {
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(201, 168, 106, 0.2);
        }

        .cv-item:last-child {
          border-bottom: none;
        }

        .cv-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          margin-bottom: 5px;
          color: var(--primary);
        }

        .cv-meta {
          color: var(--accent);
          font-size: 14px;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cv-desc {
          color: var(--gray);
          line-height: 1.8;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        .project-card {
          background: var(--white);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s ease;
          border: 1px solid rgba(0,0,0,0.1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .project-image {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-content {
          padding: 30px;
        }

        .project-category {
          font-size: 12px;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .project-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .project-location {
          color: var(--gray);
          font-size: 14px;
          margin-bottom: 15px;
        }

        .project-concept {
          color: var(--secondary);
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .project-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .feature-tag {
          padding: 8px 16px;
          background: var(--light);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Modal */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.95);
          z-index: 2000;
          overflow-y: auto;
          padding: 60px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          max-width: 1200px;
          margin: 0 auto;
          background: var(--white);
          padding: 60px;
        }

        .modal-close {
          position: fixed;
          top: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2001;
        }

        .modal-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .modal-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        /* Other Works */
        .works-category {
          margin-bottom: 80px;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .work-item {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .work-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .work-item:hover .work-image {
          transform: scale(1.1);
        }

        .work-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 30px;
          color: var(--white);
          transform: translateY(100%);
          transition: transform 0.3s;
        }

        .work-item:hover .work-overlay {
          transform: translateY(0);
        }

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .contact-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          line-height: 1.4;
          font-weight: 300;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          background: var(--light);
          text-decoration: none;
          color: var(--primary);
          font-size: 16px;
          transition: all 0.3s;
        }

        .contact-link:hover {
          background: var(--accent);
          color: var(--white);
          transform: translateX(10px);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            width: 100%;
            height: auto;
            flex-direction: row;
            padding: 20px;
            justify-content: space-between;
          }

          .nav.open {
            height: 100vh;
            flex-direction: column;
          }

          .section {
            padding: 80px 30px;
          }

          .section-title {
            font-size: 42px;
          }

          .cover-name {
            font-size: 48px;
          }

          .about-grid,
          .cv-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .modal {
            padding: 20px;
          }

          .modal-content {
            padding: 30px;
          }

          .modal-images {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <div className="nav-links">
          <a className="nav-link" onClick={() => scrollToSection('cover')}>Cover</a>
          <a className="nav-link" onClick={() => scrollToSection('about')}>About</a>
          <a className="nav-link" onClick={() => scrollToSection('cv')}>CV</a>
          <a className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a>
          <a className="nav-link" onClick={() => scrollToSection('works')}>Other Works</a>
          <a className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
          
          <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
              <button className="nav-feature-btn" onClick={toggleTheme}>
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              <button className="nav-feature-btn" onClick={toggleLanguage}>
                <Globe size={18} />
                <span>{language === 'id' ? 'English' : 'Bahasa'}</span>
              </button>
              
              <button className="nav-feature-btn" onClick={() => setShowShareMenu(!showShareMenu)}>
                <Share2 size={18} />
                <span>Share Portfolio</span>
              </button>
              
              <button className="nav-feature-btn" onClick={printPortfolio}>
                <Printer size={18} />
                <span>Print Portfolio</span>
              </button>
            </div>
            
            <button className="nav-download-btn" onClick={() => generateAndDownloadCV()}>
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="share-popup">
          <div className="share-popup-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Share Portfolio</h3>
              <X size={20} style={{ cursor: 'pointer' }} onClick={() => setShowShareMenu(false)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button className="share-btn" onClick={() => sharePortfolio('whatsapp')}>
                <Phone size={18} />
                <span>WhatsApp</span>
              </button>
              <button className="share-btn" onClick={() => sharePortfolio('linkedin')}>
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </button>
              <button className="share-btn" onClick={() => sharePortfolio('twitter')}>
                <Share2 size={18} />
                <span>Twitter</span>
              </button>
              <button className="share-btn" onClick={() => sharePortfolio('email')}>
                <Mail size={18} />
                <span>Email</span>
              </button>
              <button className="share-btn" onClick={copyLink}>
                <LinkIcon size={18} />
                <span>Copy Link</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cover Section */}
      <section id="cover" className="cover">
        <div className="cover-content">
          <img src={portfolioData.personal.photo} alt={portfolioData.personal.name} className="cover-photo" />
          <h1 className="cover-name">{portfolioData.personal.name}</h1>
          <p className="cover-title">{portfolioData.personal.title}</p>
          <p className="cover-tagline">{portfolioData.personal.tagline}</p>
          <div className="cover-contacts">
            <a href={`mailto:${portfolioData.personal.email}`} className="cover-contact">
              <Mail size={18} />
              <span>{portfolioData.personal.email}</span>
            </a>
            <a href={`https://wa.me/${portfolioData.personal.whatsapp}`} className="cover-contact" target="_blank">
              <Phone size={18} />
              <span>{portfolioData.personal.phone}</span>
            </a>
            <a href={`https://instagram.com/${portfolioData.personal.instagram.replace('@', '')}`} className="cover-contact" target="_blank">
              <Instagram size={18} />
              <span>{portfolioData.personal.instagram}</span>
            </a>
            <a href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} className="cover-contact" target="_blank">
              <Linkedin size={18} />
              <span>{portfolioData.personal.linkedin}</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Introduction</p>
        
        <div className="about-grid">
          <div>
            <p className="about-text">{portfolioData.about.description}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', marginBottom: '20px', fontFamily: 'Cormorant Garamond, serif' }}>Core Skills</h3>
            <div className="skills-list">
              {portfolioData.about.skills.map((skill, index) => (
                <div key={index} className="skill-tag">{skill}</div>
              ))}
            </div>
          </div>
        </div>

        <h3 style={{ fontSize: '24px', marginBottom: '30px', fontFamily: 'Cormorant Garamond, serif' }}>Software Proficiency</h3>
        <div className="software-grid">
          {portfolioData.about.software.map((software, index) => (
            <div key={index} className="software-item">{software}</div>
          ))}
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="section" style={{ background: 'var(--light)' }}>
        <h2 className="section-title">Curriculum Vitae</h2>
        <p className="section-subtitle">Background & Experience</p>
        
        <div className="cv-grid">
          <div>
            <h3 style={{ fontSize: '28px', marginBottom: '40px', fontFamily: 'Cormorant Garamond, serif' }}>Education</h3>
            {portfolioData.cv.education.map((edu, index) => (
              <div key={index} className="cv-item">
                <h4 className="cv-title">{edu.degree}</h4>
                <p className="cv-meta">{edu.institution} • {edu.year}</p>
                <p className="cv-desc">GPA: {edu.gpa}</p>
              </div>
            ))}

            <h3 style={{ fontSize: '28px', marginBottom: '40px', marginTop: '60px', fontFamily: 'Cormorant Garamond, serif' }}>Certificates</h3>
            {portfolioData.cv.certificates.map((cert, index) => (
              <div key={index} className="cv-item">
                <p className="cv-desc">• {cert}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 style={{ fontSize: '28px', marginBottom: '40px', fontFamily: 'Cormorant Garamond, serif' }}>Experience</h3>
            {portfolioData.cv.experience.map((exp, index) => (
              <div key={index} className="cv-item">
                <h4 className="cv-title">{exp.role}</h4>
                <p className="cv-meta">{exp.company} • {exp.period}</p>
                <p className="cv-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Design Projects</h2>
        <p className="section-subtitle">Selected Works</p>
        
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location} • {project.year}</p>
                <p className="project-concept">{project.concept}</p>
                <div className="project-features">
                  {project.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Works Section */}
      <section id="works" className="section" style={{ background: 'var(--light)' }}>
        <h2 className="section-title">Other Works</h2>
        <p className="section-subtitle">Additional Portfolio</p>
        
        {portfolioData.otherWorks.map((category, catIndex) => (
          <div key={catIndex} className="works-category">
            <h3 style={{ fontSize: '32px', marginBottom: '20px', fontFamily: 'Cormorant Garamond, serif' }}>{category.category}</h3>
            <div className="works-grid">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="work-item">
                  <img src={item.image} alt={item.title} className="work-image" />
                  <div className="work-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">Get in Touch</p>
        
        <div className="contact-grid">
          <div className="contact-text">
            Thank you for viewing my portfolio. I'm always open to discussing new projects and opportunities.
          </div>
          <div className="contact-links">
            <a href={`mailto:${portfolioData.personal.email}`} className="contact-link">
              <Mail size={24} />
              <span>{portfolioData.personal.email}</span>
            </a>
            <a href={`https://wa.me/${portfolioData.personal.whatsapp}`} className="contact-link" target="_blank">
              <Phone size={24} />
              <span>{portfolioData.personal.phone}</span>
            </a>
            <a href={`https://instagram.com/${portfolioData.personal.instagram.replace('@', '')}`} className="contact-link" target="_blank">
              <Instagram size={24} />
              <span>{portfolioData.personal.instagram}</span>
            </a>
            <a href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} className="contact-link" target="_blank">
              <Linkedin size={24} />
              <span>{portfolioData.personal.linkedin}</span>
            </a>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '100px', color: 'var(--gray)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          © {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-close" onClick={() => setSelectedProject(null)}>
            <X size={24} />
          </div>
          <div className="modal-content">
            <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>
              {selectedProject.category}
            </p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '56px', marginBottom: '10px' }}>
              {selectedProject.title}
            </h2>
            <p style={{ color: 'var(--gray)', marginBottom: '30px' }}>
              {selectedProject.location} • {selectedProject.year}
            </p>
            
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '500px', objectFit: 'cover', marginBottom: '40px' }} />
            
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Design Concept</h3>
              <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--secondary)' }}>{selectedProject.concept}</p>
            </div>

            {selectedProject.landArea && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
                <div>
                  <p style={{ color: 'var(--gray)', marginBottom: '5px' }}>Land Area</p>
                  <p style={{ fontSize: '24px', fontWeight: '600' }}>{selectedProject.landArea}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--gray)', marginBottom: '5px' }}>Building Area</p>
                  <p style={{ fontSize: '24px', fontWeight: '600' }}>{selectedProject.buildingArea}</p>
                </div>
              </div>
            )}

            {selectedProject.images && (
              <div>
                <h3 style={{ fontSize: '24px', marginBottom: '20px', fontFamily: 'Cormorant Garamond, serif' }}>Design Documentation</h3>
                <div className="modal-images">
                  {selectedProject.images.map((img, index) => (
                    <img key={index} src={img} alt={`${selectedProject.title} ${index + 1}`} className="modal-image" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchitecturePortfolio;