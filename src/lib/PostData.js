import { query } from './strapi';

function getPosts() {
  return query('posts?populate=*'); 
}

function getPostImage() {
  return query(`posts?populate=Posts.image`); 
}

const IMAGES_HOST = "http://localhost:1337";

export const mockPosts = [
  {
    "id": 1,
    image: "/images/galaxy1.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=1",
  },
  {
    "id": 2,
    image: "/images/galaxy2.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=2",
  },
  {
    "id": 3,
    image: "/images/galaxy3.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=3",
  },
  {
    "id": 4,
    image: "/images/galaxy1.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=4",
  },
  {
    "id": 5,
    image: "/images/galaxy2.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=5",
  },
  {
    "id": 6,
    image: "/images/galaxy3.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=6",
  },
  {
    "id": 7,
    image: "/images/galaxy1.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=7",
  },
  {
    "id": 8,
    image: "/images/galaxy2.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=8",
  },
  {
    "id": 9,
    image: "/images/galaxy3.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=9",
  },
  {
    "id": 10,
    image: "/images/galaxy1.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=10",
  },
  {
    "id": 11,
    image: "/images/galaxy2.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=11",
  },
  {
    "id": 12,
    image: "/images/galaxy3.jpg",
    title: "Lorem ipsum",
    author: "David Patiño",
    date: "2021-09-01",
    description: "dolor sit amet consectetur adipiscing elit, massa placerat dictumst potenti condimentum tortor, torquent dui nulla laoreet vivamus montes. Dictumst tincidunt montes nisl velit nunc fermentum ad eleifend eget litora, penatibus accumsan semper platea torquent tempus sodales posuere vehicula, consequat integer congue lacus lacinia senectus arcu phasellus placerat. Dictumst himenaeos imperdiet rutrum semper donec diam sodales, risus mattis cubilia lectus viverra convallis habitant vivamus, conubia dapibus ante fringilla faucibus sollicitudin. Nostra torquent accumsan neque semper vel ullamcorper nulla mattis faucibus, ante sociis pretium tincidunt molestie convallis tempor morbi, in dictum tortor parturient aptent risus habitant enim.",
    tags: ["tag1", "tag2", "tag3"],
    link: "/post-detail?id=12",
  },
];

export const fetchPosts = async () => {
  try {

    // // Primera llamada para obtener los posts
    // const response = await getPosts();
    // const data = response.data[0].Posts;

    // // Segunda llamada para obtener las imágenes
    // const imageResponse = await getPostImage();
    // const imageData = imageResponse.data[0].Posts;

    // // Combina los datos de las dos respuestas
    // const posts = data.map((post, index) => ({
      // image: IMAGES_HOST + imageData[index]?.image?.url || "", 
    //   title: post.title,
    //   author: post.author,
    //   date: post.date,
    //   description: post.description,
    //   tags: post.tags.tags,
    //   link: `/post-detail?id=${post.id}`, 
    // }));

    const posts = mockPosts;

    console.log("posts", posts); 
    return posts;
  } catch (error) {
    if (error.response) {
      console.warn("Datos no encontrados.");
      return mockPosts;
    }
    console.error("Error al obtener los posts:", error);
    throw error; 
  }
};
