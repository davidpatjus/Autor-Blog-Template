const Footer = `
  <div class="bg-white border-t">
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-between items-center">
        <p class="text-gray-600">
          &copy; 2024 David Patiño - Personal Blog. All rights reserved.
        </p>
        <div class="flex space-x-4">
          <a
            href="#"
            class="text-gray-600 hover:text-primary transition-colors"
            title="Follow me on Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            class="text-gray-600 hover:text-primary transition-colors"
            title="Check out my projects on GitHub"
          >
            GitHub
          </a>
          <a
            href="#"
            class="text-gray-600 hover:text-primary transition-colors"
            title="Connect with me on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
`;

// Inserta el Footer en un contenedor con ID 'Footer'
document.addEventListener('DOMContentLoaded', () => {
  const footerContainer = document.getElementById('Footer');
  if (footerContainer) {
    footerContainer.innerHTML = Footer;
  }
});