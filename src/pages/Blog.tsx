import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      excerpt: 'Learn the basics of React and start building your first application.',
      date: '2024-03-15',
      author: 'John Doe',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Development',
    },
    // Add more blog posts
  ].concat(Array(5).fill(null).map((_, i) => ({
    id: i + 2,
    title: `Blog Post ${i + 2}`,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2024-03-15',
    author: 'Jane Smith',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: ['Development', 'Design', 'Business'][i % 3],
  })));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest news, insights, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
            <div className="md:w-1/2">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <span className="text-indigo-600 font-semibold">{posts[0].category}</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">{posts[0].title}</h2>
              <p className="text-gray-600 mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{posts[0].date}</span>
                <User className="h-4 w-4 ml-4 mr-2" />
                <span>{posts[0].author}</span>
              </div>
              <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-indigo-600 font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <User className="h-4 w-4 ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates delivered directly to your inbox
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;