import { query } from './strapi';

function getPosts() {
  return query('posts?populate=*'); 
}

function getPostImage() {
  return query(`posts?populate=Posts.image`); 
}

const STRAPI_HOST = "http://localhost:1337"

export const fetchPosts = async () => {
  try {
    // Primera llamada para obtener los posts
    const response = await getPosts();
    const data = response.data[0].Posts;

    // Segunda llamada para obtener las imágenes
    const imageResponse = await getPostImage();
    const imageData = imageResponse.data[0].Posts;

    // Combina los datos de las dos respuestas
    const posts = data.map((post, index) => ({
      image: STRAPI_HOST + imageData[index]?.image?.url || "", 
      title: post.title,
      author: post.author,
      date: post.date,
      description: post.description,
      tags: post.tags.tags,
      link: `/post-detail?id=${post.id}`, 
    }));

    console.log("posts", posts); 
    return posts;
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    return [];
  }
};
