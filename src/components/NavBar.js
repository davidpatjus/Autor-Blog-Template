const navbar = `
  <div class="bg bg-gradient-to-t from-gray-200 to-gray-50 shadow-sm border-b-2 pb-1 border-black">
    <nav class="container mx-auto px-5 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <img
          src="/logo.svg"
          alt="Logo"
          loading="lazy"
          class="w-auto h-6 md:h-10"
        />
        
        <!-- Hamburger Menu (Mobile) -->
        <button
          id="menuToggle"
          class="block md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        <!-- Navigation Links -->
        <ul id="menu" class="hidden md:flex md:space-x-6 space-y-2 md:space-y-0 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex-row flex-col z-50">
          <li><a href="/" class="text-gray-700 md:text-lg font-semibold hover:text-black transition-colors block px-5 py-2">Inicio</a></li>
          <li><a href="/blogs" class="text-gray-700 md:text-lg font-semibold hover:text-black transition-colors block px-5 py-2">Artículos</a></li>
          <li><a href="/about" class="text-gray-700 md:text-lg font-semibold hover:text-black transition-colors block px-5 py-2">Autor</a></li>
          <li><a href="/contact" class="text-gray-700 md:text-lg font-semibold hover:text-black transition-colors block px-5 py-2">Contacto</a></li>
        </ul>
      </div>
    </nav>
  </div>
`;

// Inserta el navbar en un contenedor con ID 'NavBar' y agrega funcionalidad de menú
document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.getElementById('NavBar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbar;

    // Menu toggle logic
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
});
