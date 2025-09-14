import { Link } from 'react-router-dom'
import { useState } from 'react'

// Sample blog posts data
const samplePosts = [
  {
    id: 1,
    slug: 'pool-maintenance-tips-spring',
    title: 'Essential Pool Maintenance Tips for Spring Opening',
    excerpt: 'Get your pool ready for the swimming season with these professional tips for spring pool opening and maintenance.',
    author: 'Mike Johnson',
    date: '2024-03-15',
    image: '🌱',
    category: 'Maintenance'
  },
  {
    id: 2,
    slug: 'chemical-balance-guide',
    title: 'The Complete Guide to Pool Chemical Balance',
    excerpt: 'Learn how to maintain perfect water chemistry for a safe and enjoyable swimming experience.',
    author: 'Sarah Wilson',
    date: '2024-03-10',
    image: '⚗️',
    category: 'Water Chemistry'
  },
  {
    id: 3,
    slug: 'pool-equipment-maintenance',
    title: 'Pool Equipment Maintenance: Extending the Life of Your Investment',
    excerpt: 'Discover how proper equipment maintenance can save you money and keep your pool running smoothly.',
    author: 'Mike Johnson',
    date: '2024-03-05',
    image: '🔧',
    category: 'Equipment'
  },
  {
    id: 4,
    slug: 'energy-efficient-pool-tips',
    title: '10 Ways to Make Your Pool More Energy Efficient',
    excerpt: 'Reduce your pool\'s environmental impact and save money with these energy-efficient tips.',
    author: 'Lisa Chen',
    date: '2024-02-28',
    image: '⚡',
    category: 'Energy Efficiency'
  }
]

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Maintenance', 'Water Chemistry', 'Equipment', 'Energy Efficiency']
  
  const filteredPosts = selectedCategory === 'All' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === selectedCategory)

  return (
    <div className="blog-page">
      <div className="container">
        <div className="blog-header">
          <h1>Pool Care Blog</h1>
          <p>Expert tips, guides, and insights for perfect pool maintenance</p>
        </div>

        <div className="blog-filters">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <div className="placeholder-image">{post.image}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="category">{post.category}</span>
                  <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-author">
                  By {post.author}
                </div>
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <p>No posts found in the selected category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPage