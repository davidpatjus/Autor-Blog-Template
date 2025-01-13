import { PostCard } from '../components/PostCard.js';
import { fetchPosts } from './PostData.js';

// Variables de control
let isLoading = false;
let currentPage = 1;
const postsPerLoad = 6;

// Elementos DOM
const postsGrid = document.getElementById('postsGrid');
const loadingIndicator = document.getElementById('loadingIndicator');

// Función para obtener posts paginados
async function Posts(page) {
    const posts = await fetchPosts();
    
    // Calcular el rango de posts a retornar
    const start = (page - 1) * postsPerLoad;
    const end = start + postsPerLoad;
    
    // Retornar solo los posts del rango actual si existen
    if (start < posts.length) {
        return posts.slice(start, end);
    }
    
    return []; // Retornar array vacío si no hay más posts
}

// Renderizar posts
function renderPosts(newPosts) {
    const postsHTML = newPosts.map(post => PostCard(post)).join('');
    postsGrid.insertAdjacentHTML('beforeend', postsHTML);
}

// Cargar más posts
async function loadMorePosts() {
    if (isLoading) return;
    
    try {
        isLoading = true;
        loadingIndicator.classList.remove('hidden');
        
        const newPosts = await Posts(currentPage);
        
        if (newPosts.length > 0) {
            renderPosts(newPosts);
            currentPage++;
        } else {
            // Si no hay más posts, remover el event listener de scroll
            window.removeEventListener('scroll', handleScroll);
            loadingIndicator.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error cargando posts:', error);
    } finally {
        isLoading = false;
        loadingIndicator.classList.add('hidden');
    }
}

// Detector de scroll con throttling
let ticking = false;
function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            
            // Cargar más posts cuando el usuario está cerca del final de la página
            if (scrollTop + clientHeight >= scrollHeight - 800) {
                loadMorePosts();
            }
            
            ticking = false;
        });
        
        ticking = true;
    }
}

// Event Listeners
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', loadMorePosts);