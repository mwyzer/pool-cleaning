import React from "react";
import { useParams, Link } from "react-router-dom";

// Sample blog posts data with full content
const blogPosts = {
  "pool-maintenance-tips-spring": {
    id: 1,
    title: "Essential Pool Maintenance Tips for Spring Opening",
    author: "Mike Johnson",
    date: "2024-03-15",
    image: "🌱",
    category: "Maintenance",
    content: `
      <p>Spring is here, and it's time to get your pool ready for another season of fun and relaxation. Proper spring opening is crucial for maintaining water quality and ensuring your pool equipment runs efficiently throughout the swimming season.</p>
      
      <h2>1. Remove and Clean Your Pool Cover</h2>
      <p>Start by removing any debris from the top of your cover before taking it off. This prevents dirt and leaves from falling into the pool. Clean the cover thoroughly and let it dry completely before storing it.</p>
      
      <h2>2. Inspect Your Pool Equipment</h2>
      <p>Check your pump, filter, heater, and other equipment for any damage that may have occurred during the winter months. Look for cracks, leaks, or signs of wear and replace any damaged components.</p>
      
      <h2>3. Refill Your Pool</h2>
      <p>If you lowered the water level for winter, now is the time to refill your pool to the proper level. The water should reach about halfway up the skimmer opening.</p>
      
      <h2>4. Test and Balance Water Chemistry</h2>
      <p>Test your water's pH, alkalinity, and sanitizer levels. The ideal ranges are:</p>
      <ul>
        <li>pH: 7.2-7.6</li>
        <li>Total Alkalinity: 80-120 ppm</li>
        <li>Free Chlorine: 1.0-3.0 ppm</li>
      </ul>
      
      <h2>5. Shock Your Pool</h2>
      <p>Give your pool a good shock treatment to eliminate any bacteria or algae that may have developed over the winter. This will help ensure crystal clear water for the season ahead.</p>
      
      <p>Remember, if you're not comfortable performing these tasks yourself, consider hiring a professional pool service. A proper spring opening sets the foundation for a trouble-free swimming season!</p>
    `,
  },
  "chemical-balance-guide": {
    id: 2,
    title: "The Complete Guide to Pool Chemical Balance",
    author: "Sarah Wilson",
    date: "2024-03-10",
    image: "⚗️",
    category: "Water Chemistry",
    content: `
      <p>Maintaining proper chemical balance in your pool is essential for swimmer safety, comfort, and the longevity of your pool equipment. Understanding water chemistry might seem complex, but with the right knowledge, it becomes manageable.</p>
      
      <h2>The Big Three: pH, Alkalinity, and Sanitizer</h2>
      <p>These three components form the foundation of pool water chemistry and work together to keep your water safe and balanced.</p>
      
      <h2>pH Levels</h2>
      <p>pH measures how acidic or basic your water is on a scale of 0-14. For pools, you want to maintain a pH between 7.2 and 7.6. This range is:</p>
      <ul>
        <li>Comfortable for swimmers' skin and eyes</li>
        <li>Optimal for chlorine effectiveness</li>
        <li>Protective of pool equipment and surfaces</li>
      </ul>
      
      <h2>Total Alkalinity</h2>
      <p>Think of alkalinity as your pH's bodyguard. It helps stabilize pH levels and prevents rapid fluctuations. Maintain alkalinity between 80-120 ppm.</p>
      
      <h2>Sanitizer (Chlorine)</h2>
      <p>Chlorine kills bacteria and other harmful microorganisms. Maintain free chlorine levels between 1.0-3.0 ppm for optimal sanitation without over-chlorination.</p>
      
      <h2>Testing Your Water</h2>
      <p>Test your pool water 2-3 times per week using either test strips or a liquid test kit. Digital testers are also available for more precise readings.</p>
      
      <h2>Common Problems and Solutions</h2>
      <h3>Cloudy Water</h3>
      <p>Usually caused by improper filtration, poor circulation, or chemical imbalance. Check and adjust your chemical levels, then run your filter longer.</p>
      
      <h3>Algae Growth</h3>
      <p>Indicates insufficient sanitizer levels or poor circulation. Shock the pool and brush all surfaces thoroughly.</p>
      
      <p>Remember: small, frequent adjustments are better than large corrections. Always add chemicals to water, never water to chemicals, and follow manufacturer instructions carefully.</p>
    `,
  },
  "pool-equipment-maintenance": {
    id: 3,
    title: "Pool Equipment Maintenance: Extending the Life of Your Investment",
    author: "Mike Johnson",
    date: "2024-03-05",
    image: "🔧",
    category: "Equipment",
    content: `
      <p>Your pool equipment represents a significant investment, and proper maintenance is key to ensuring it serves you well for years to come. Regular care not only prevents costly repairs but also keeps your pool running efficiently.</p>
      
      <h2>Pool Pump Maintenance</h2>
      <p>The pump is the heart of your pool's circulation system. Keep it healthy with these tips:</p>
      <ul>
        <li>Clean the pump strainer basket weekly</li>
        <li>Check for leaks around seals and fittings</li>
        <li>Listen for unusual noises that might indicate problems</li>
        <li>Ensure proper water levels to prevent running dry</li>
      </ul>
      
      <h2>Filter Care</h2>
      <p>Your filter removes debris and contaminants from the water. Different types require different care:</p>
      
      <h3>Sand Filters</h3>
      <p>Backwash when pressure gauge reads 8-10 psi above clean starting pressure. Replace sand every 5-7 years.</p>
      
      <h3>Cartridge Filters</h3>
      <p>Rinse with a hose every 2-4 weeks. Replace cartridges every 1-2 years or when they can no longer be cleaned effectively.</p>
      
      <h3>DE (Diatomaceous Earth) Filters</h3>
      <p>Backwash and recharge with fresh DE powder as needed. Perform a complete breakdown and cleaning annually.</p>
      
      <h2>Heater Maintenance</h2>
      <p>If you have a pool heater, keep it running efficiently:</p>
      <ul>
        <li>Keep the area around the heater clear of debris</li>
        <li>Check for proper water flow through the heater</li>
        <li>Have it professionally serviced annually</li>
        <li>Monitor for error codes or unusual operation</li>
      </ul>
      
      <h2>Seasonal Considerations</h2>
      <p>End-of-season maintenance is just as important as regular care. Properly winterizing your equipment prevents freeze damage and ensures smooth startup next season.</p>
      
      <p>Remember: when in doubt, consult with a professional. The cost of regular professional maintenance is far less than major equipment replacement!</p>
    `,
  },
  "energy-efficient-pool-tips": {
    id: 4,
    title: "10 Ways to Make Your Pool More Energy Efficient",
    author: "Lisa Chen",
    date: "2024-02-28",
    image: "⚡",
    category: "Energy Efficiency",
    content: `
      <p>Running a pool doesn't have to break the bank or harm the environment. With these energy-efficient strategies, you can reduce your pool's energy consumption while maintaining crystal clear water.</p>
      
      <h2>1. Use a Pool Cover</h2>
      <p>A pool cover is your best friend for energy savings. It reduces evaporation by up to 95%, retains heat, and keeps debris out of your pool, reducing the need for cleaning and chemical treatments.</p>
      
      <h2>2. Invest in a Variable Speed Pump</h2>
      <p>Variable speed pumps use up to 90% less energy than single-speed pumps. While the initial investment is higher, the energy savings will pay for themselves within 1-2 years.</p>
      
      <h2>3. Optimize Your Filter Run Time</h2>
      <p>Many pools run their filtration systems longer than necessary. Calculate your pool's turnover rate and adjust accordingly. Most pools need only 6-8 hours of filtration per day.</p>
      
      <h2>4. Maintain Proper Water Chemistry</h2>
      <p>Balanced water is more efficient to heat and requires less chemical treatment. Properly balanced water also prevents equipment damage that could lead to energy waste.</p>
      
      <h2>5. Lower Your Pool Temperature</h2>
      <p>Even reducing your pool temperature by 2-3 degrees can result in significant energy savings. Many swimmers find 78-80°F perfectly comfortable.</p>
      
      <h2>6. Use LED Pool Lighting</h2>
      <p>LED lights use up to 80% less energy than traditional incandescent pool lights and last much longer, reducing both energy costs and maintenance.</p>
      
      <h2>7. Install a Solar Pool Heater</h2>
      <p>Solar heating systems use free energy from the sun. While installation costs vary, solar heaters can extend your swimming season with minimal ongoing costs.</p>
      
      <h2>8. Windbreaks and Landscaping</h2>
      <p>Strategic landscaping can reduce wind across your pool surface, minimizing heat loss and evaporation. Consider hedges, fences, or pergolas as attractive windbreaks.</p>
      
      <h2>9. Regular Equipment Maintenance</h2>
      <p>Clean, well-maintained equipment runs more efficiently. Keep pump baskets clean, maintain proper water levels, and service equipment according to manufacturer recommendations.</p>
      
      <h2>10. Consider Pool Automation</h2>
      <p>Automated systems can optimize pump run times, heating schedules, and chemical dosing based on actual pool conditions, maximizing efficiency and minimizing waste.</p>
      
      <p>Implementing even a few of these strategies can lead to significant energy savings. Start with the most cost-effective options like covers and proper maintenance, then consider larger investments like variable speed pumps as part of your long-term pool care strategy.</p>
    `,
  },
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <div className="post-not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="container">
        <article className="blog-post">
          <div className="post-header">
            <Link to="/blog" className="back-link">
              ← Back to Blog
            </Link>
            <div className="post-meta">
              <span className="category">{post.category}</span>
              <span className="date">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-author">By {post.author}</div>
          </div>

          <div className="post-image">
            <div className="placeholder-image large">{post.image}</div>
          </div>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <div className="post-footer">
          <Link to="/blog" className="btn btn-secondary">
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

// (ensure the file starts with a valid import so tests transform correctly)
export default BlogPost;
