// Animación de entrada para las barras de progreso
document.addEventListener('DOMContentLoaded', function() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  // Observador de intersección para animar cuando entran en vista
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.width = '0';
        
        setTimeout(() => {
          entry.target.style.transition = 'all 1s ease-out';
          entry.target.style.opacity = '1';
          entry.target.style.width = entry.target.getAttribute('data-width');
        }, 100);
      }
    });
  }, { threshold: 0.5 });
  
  // Guardar el ancho original y observar cada barra
  progressBars.forEach(bar => {
    const originalWidth = bar.style.width;
    bar.setAttribute('data-width', originalWidth);
    observer.observe(bar);
  });
  
  // Efecto de pulso aleatorio en las barras
  setInterval(() => {
    const randomBar = progressBars[Math.floor(Math.random() * progressBars.length)];
    randomBar.classList.add('pulse-animation');
    setTimeout(() => {
      randomBar.classList.remove('pulse-animation');
    }, 2000);
  }, 5000);
  
  // Efecto de click en las barras
  progressBars.forEach(bar => {
    bar.addEventListener('click', function() {
      this.style.transform = 'scale(1.05)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
  
  // Animación de entrada para los iconos sociales
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
});