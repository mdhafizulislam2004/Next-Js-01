import React from 'react';


const blogs = [
    {
        "id": 1,
        "title": "Getting Started with Web Development",
        "category": "Web Development",
        "author": "John Doe",
        "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "date": "2026-10-01",
        "description": "Learn the basics of web development, including HTML, CSS, and JavaScript. This beginner-friendly guide will help you start building your own websites.",
        "tags": ["HTML", "CSS", "JavaScript"],
        "readTime": "5 min"
    },
    {
        "id": 2,
        "title": "The Future of Artificial Intelligence",
        "category": "Technology",
        "author": "Sarah Smith",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        "date": "2026-10-05",
        "description": "Discover how artificial intelligence is transforming our daily lives, improving productivity, and creating new opportunities across different industries.",
        "tags": ["AI", "Technology", "Innovation"],
        "readTime": "7 min"
    },
    {
        "id": 3,
        "title": "10 Tips for a Healthy Lifestyle",
        "category": "Lifestyle",
        "author": "David Wilson",
        "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        "date": "2026-10-10",
        "description": "Explore simple ways to improve your daily routine, eat healthier food, stay physically active, and maintain a balanced lifestyle.",
        "tags": ["Health", "Fitness", "Lifestyle"],
        "readTime": "4 min"
    },
    {
        "id": 4,
        "title": "Essential JavaScript Concepts for Beginners",
        "category": "Programming",
        "author": "Emily Johnson",
        "image": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        "date": "2026-10-15",
        "description": "Understand essential JavaScript concepts such as variables, functions, arrays, objects, and asynchronous programming to strengthen your coding skills.",
        "tags": ["JavaScript", "Coding", "Beginners"],
        "readTime": "6 min"
    }
]



const BlogsDitelsPage = async ({ params }) => {


const{blogsid}=await params;
const blog= blogs.find(blog=>blog.id===parseInt(blogsid))
console.log("Params Data",blog);

    


    return (
        <div>

    <h1>{blog.id}</h1>
    <h2 className='text-4xl'>{blog.title}</h2>

        </div>
    );
};

export default BlogsDitelsPage;