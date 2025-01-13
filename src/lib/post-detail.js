import { query } from './strapi.js'; // Usamos la función query para realizar las solicitudes
import { mockPosts } from './PostData.js';

// URL base de Strapi
const IMAGES_HOST = "http://localhost:1337"

// Función para obtener el ID del post de la URL
function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Función para obtener todos los posts desde Strapi
function getPosts() {
    return query('posts?populate=*'); 
  }

// Función para obtener las imagenes de los post Strapi
function getPostImage() {
    return query(`posts?populate=Posts.image`); 
  }

// Función para obtener un post por su ID desde Strapi
async function fetchPostById(id) {
    try {        
        // const response = await getPosts(); 
        // const posts = response.data[0].Posts;

        // const post = posts.find(post => post.id === Number(id));

        // const imageResponse = await getPostImage();
        // const imageData = imageResponse.data[0].Posts;

        // const postImage = imageData.find(image => image.id === Number(id)).image.url;

        // return {
        //     id: post.id,
        //     title: post.title,
        //     author: post.author,
        //     date: post.date,
        //     description: post.description,
        //     tags: post.tags?.tags || [],
        //     image: IMAGES_HOST + postImage || "",
        // };

        const post = mockPosts.find(post => post.id === Number(id));
        return post;

    } catch (error) {
        console.error('Error al obtener el post:', error);
        return null;
    }
}

// Función para renderizar los tags
function renderTags(tags) {
    return tags.map(tag => 
        `<span class="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">${tag}</span>`
    ).join('');
}

// Función principal para cargar los detalles del post
async function loadPostDetails() {
    const postId = getPostIdFromUrl();
    if (!postId) {
        console.log('ID del post no encontrado en la URL');
        return;
    }

    // Obtener datos del post
    const post = await fetchPostById(postId);
    if (!post) {
        console.log('Post no encontrado');
        return;
    }

    // Actualizar el título de la página
    document.title = `${post.title} | Blog Personal`;

    // Actualizar los elementos del DOM
    document.getElementById('postTitle').textContent = post.title;
    document.getElementById('postDescription').textContent = post.description;
    document.getElementById('postAuthor').textContent = post.author;
    document.getElementById('postDate').textContent = post.date;
    document.getElementById('postTags').innerHTML = renderTags(post.tags);
    document.getElementById('postImage').src = post.image;
    document.getElementById('postImage').alt = post.title;
    document.getElementById('authorName').textContent = post.author;

}

// Cargar los detalles cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadPostDetails);
