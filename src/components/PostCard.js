export function PostCard({ image, author, date, title, description, tags, link }) {
    const shortDescription = description.substring(0, 50) + '...';
    return `
      <div class="flex flex-col bg-white overflow-hidden border rounded-lg">

        <!-- Imagen -->
        <img
          src="${image}"
          alt="Image for ${title}"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
        
        <!-- Contenido -->
        <div class="p-4 flex flex-col flex-grow">

          <!-- Autor y fecha -->
          <div class="text-sm text-gray-500 mb-2">
            <span class="font-semibold text-gray-900">${author}</span> • ${date}
          </div>
          
          <!-- Título -->
          <h2 class="text-lg md:text-2xl font-semibold text-gray-900 leading-tight">
            <a href="${link}" class="hover:text-gray-700 flex justify-between items-center">
              ${title}
              <img src="/arrow-up-right.svg" alt="Arrow up and right" class="w-8 h-8" />
            </a>
          </h2>

          <!-- Descripción -->
          <p class="text-gray-600 mt-3 flex-grow">
            ${shortDescription}
          </p>
          
          <!-- Etiquetas -->
          <div class="mt-4 flex flex-wrap gap-2">
            ${tags.map(tag => `<span class="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full border shadow-lg border-black">${tag}</span>`).join('')}
          </div>
          
          <!-- Enlace -->
          <div class="mt-7 mb-2">
								<a href="${link}" class="text-white bg-black  px-4 py-3 font-semibold rounded-xl">
								Read more &nbsp;  →
								</a>
          </div>
          
        </div>
      </div>
    `;
}
