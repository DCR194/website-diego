//import { BlogPostProps } from '../types';

interface BlogPostProps {
    title: string;
    date: string;
    excerpt: string;
    category: string;
}

const BlogPost = ({ title, date, excerpt, category }: BlogPostProps) => {
  return (
    <article className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <span className="text-sm text-blue-600 font-medium">{category}</span>
        <time className="text-sm text-gray-500 ml-4">{date}</time>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-800">
        Read more →
      </a>
    </article>
  );
};

export default BlogPost;