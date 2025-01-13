import { fetchPosts } from "../lib/PostData"; 

// Renderiza las tarjetas dinámicamente
async function renderCards() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

    // Obtener los datos desde la API
	const PostData = await fetchPosts();
	console.log("PostData", PostData);

  PostData.forEach((post) => {
	const shortDescription = post.description.substring(0, 50) + '...';
    const card = `
      <div class="swiper-slide bg-white rounded-lg shadow-md overflow-hidden">
        <article>
          <div class="flex flex-col bg-white overflow-hidden border rounded-lg">
						<!-- Imagen -->
						<img
							src="${post.image}"
							alt="Image for ${post.title}"
							class="w-full h-48 object-cover"
							loading="lazy"
						/>
						<!-- Contenido -->
						<div class="p-4 flex flex-col flex-grow">
							<!-- Autor y fecha -->
							<div class="text-sm text-gray-500 mb-2">
								<span class="font-semibold text-gray-900">${post.author}</span> • ${post.date}
							</div>
							<!-- Título -->
							<h2 class="text-lg md:text-2xl font-semibold text-gray-900 leading-tight">
								<a href="${post.link}" class="hover:text-gray-700 flex justify-between items-center">
									${post.title}
									<img src="/arrow-up-right.svg" alt="Arrow up and right" class="w-8 h-8" />
								</a>
							</h2>
							<!-- Descripción -->
							<p class="text-gray-600 mt-3 flex-grow">
								${shortDescription}
							</p>
							<!-- Etiquetas -->
							<div class="mt-4 flex flex-wrap gap-2">
								${post.tags.map(tag => `<span class="bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full border shadow-lg border-black">${tag}</span>`).join('')}
							</div>
							<!-- Enlace -->
							<div class="mt-8 mb-3">
								<a href="${post.link}" class="text-white bg-black  p-4 font-semibold rounded-xl">
								Read more &nbsp;  →
								</a>
							</div>
						</div>
					</div>
        </article>
      </div>
    `;
    swiperWrapper.innerHTML += card;
  });
}

// Inicializa Swiper.js
function initializeSwiper() {
	new Swiper(".swiper", {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 24,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 500, // Transiciones suaves
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			640: { slidesPerView: 1 },
			768: { slidesPerView: 2 },
			1024: { slidesPerView: 3 },
		},
	});	
}

// Ejecuta las funciones
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  initializeSwiper();
});
