const translations = {
  es: {
    'title': 'Master en Ciencias de la Tierra',
    'city': 'Ciudad de México, México',
    'skills-title': 'Experiencia',
    'skill1': 'Predicción Numérica',
    'skill2': 'Sistema de Administración Informático',
    'skill3': 'Creación de Contenido (Da Vinci Resolve, Photoshop, etc)',
    'skill4': 'Desarrollo Front-end',
    'languages-title': 'Idiomas',
    'lang1': 'Español',
    'lang2': 'Inglés',
    'lang3': 'Portugués',
    'lang4': 'Sueco',
    'work-title': 'Experiencia Laboral',
    'date1': 'Agosto 2011',
    'current': 'Actual',
    'work1': 'Clúster de alto rendimiento, desarrollo de software, desarrollo front-end y programación en paralelo',
    'project': 'Proyecto Independiente',
    'date2': 'Julio 2019',
    'current2': 'Actual',
    'work2': 'Canal de YouTube',
    'job-title': 'Especialista en Física de la Atmósfera',
    'date3': 'Agosto 2011 - Dic 2014',
    'work3': 'Modificación Artificial del Tiempo, Monitoreo Aerológico y predicción numérica del Tiempo',
    'education-title': 'Educación',
    'edu1-name': 'Escuela Británica de Artes Creativas y Tecnología',
    'edu1-degree': 'Desarrollador Front-end',
    'edu2-name': 'Universidad Nacional Autónoma de México',
    'edu2-degree': 'Doctor en Ciencias de la Tierra',
    'edu3-name': 'Universidad Nacional Autónoma de México',
    'edu3-degree': 'Master en Ciencias de la Tierra',
    'edu4-name': 'Instituto Superior de Ciencias Aplicadas',
    'edu4-degree': 'Licenciado en Meteorología',
    'social-title': 'Mis redes sociales',
    'copyright': '© 2025 Lainer F. Donet - Todos los derechos reservados'
  },
  en: {
    'title': 'Earth Sciences Master Degree',
    'city': 'Mexico City, Mexico',
    'skills-title': 'Skills',
    'skill1': 'Numerical Weather Prediction',
    'skill2': 'IT System Administration',
    'skill3': 'Content Creation (Da Vinci Resolve, Photoshop, etc)',
    'skill4': 'Front-end Development',
    'languages-title': 'Languages',
    'lang1': 'Spanish',
    'lang2': 'English',
    'lang3': 'Portuguese',
    'lang4': 'Swedish',
    'work-title': 'Work Experience',
    'date1': 'August 2011',
    'current': 'Current',
    'work1': 'High-performance cluster, software development, front-end development and parallel programming',
    'project': 'Independent Project',
    'date2': 'July 2019',
    'current2': 'Current',
    'work2': 'YouTube Channel',
    'job-title': 'Atmospheric Physics Specialist',
    'date3': 'August 2011 - Dec 2014',
    'work3': 'Artificial Weather Modification, Aerological Monitoring and Numerical Weather Prediction',
    'education-title': 'Education',
    'edu1-name': 'British School of Creative Arts and Technology',
    'edu1-degree': 'Front-end Developer',
    'edu2-name': 'National Autonomous University of Mexico',
    'edu2-degree': 'PhD in Earth Sciences',
    'edu3-name': 'National Autonomous University of Mexico',
    'edu3-degree': 'Earth Sciences Master Degree',
    'edu4-name': 'Higher Institute of Applied Sciences',
    'edu4-degree': "Bachelor's Degree in Meteorology",
    'social-title': 'My Social Networks',
    'copyright': '© 2025 Lainer F. Donet - All rights reserved'
  }
};

let currentLang = 'es';

function switchLanguage(lang) {
  if (lang === currentLang) return;
  
  currentLang = lang;
  document.documentElement.lang = lang;
  
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  initializeAnimations();
}

function initializeAnimations() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const originalWidth = entry.target.style.width;
        entry.target.style.opacity = '0';
        entry.target.style.width = '0';
        
        setTimeout(() => {
          entry.target.style.transition = 'all 1s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.width = originalWidth;
          entry.target.dataset.animated = 'true';
        }, 100);
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
  
  setInterval(() => {
    if (progressBars.length > 0) {
      const randomBar = progressBars[Math.floor(Math.random() * progressBars.length)];
      randomBar.classList.add('pulse-animation');
      setTimeout(() => {
        randomBar.classList.remove('pulse-animation');
      }, 2000);
    }
  }, 5000);
  
  progressBars.forEach(bar => {
    bar.addEventListener('click', function() {
      this.style.transform = 'scale(1.05)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
  
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      icon.style.transition = 'all 0.5s ease-out';
      icon.style.opacity = '1';
      icon.style.transform = 'translateY(0)';
    }, 100 * index);
  });
}

document.addEventListener('DOMContentLoaded', initializeAnimations);