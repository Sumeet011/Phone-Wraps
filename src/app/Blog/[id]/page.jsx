"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Eye } from "lucide-react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/homeCards/Footer";
import axios from "axios";

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      if (!params.id) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `https://phone-wraps-backend.onrender.com/api/blogs/${params.id}`
        );
        if (response.data.success) {
          setBlog(response.data.blog);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-400">Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <p className="text-red-400 mb-4">{error || "Blog not found"}</p>
          <button
            onClick={() => router.push("/Blog")}
            className="text-[#9AE600] hover:underline"
          >
            Back to Blogs
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Sample blog data for fallback - keep original content structure
  const sampleContent = `
      <div class="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>Phone wraps are an excellent way to personalize and protect your device. However, to ensure they maintain their vibrant appearance and adhesive quality, proper care is essential. In this comprehensive guide, we'll walk you through everything you need to know about caring for your phone wraps.</p>
        
        <h2>Daily Maintenance Tips</h2>
        <p>Taking care of your phone wrap daily can significantly extend its lifespan. Here are some essential tips:</p>
        <ul>
          <li><strong>Gentle Cleaning:</strong> Use a soft, lint-free microfiber cloth to wipe your phone wrap daily. This removes dust, fingerprints, and minor smudges without damaging the surface.</li>
          <li><strong>Avoid Harsh Chemicals:</strong> Never use alcohol-based cleaners, acetone, or harsh solvents on your wrap. These can break down the adhesive and fade the design.</li>
          <li><strong>Keep It Dry:</strong> While phone wraps are water-resistant, prolonged exposure to moisture can weaken the adhesive. Wipe your phone dry if it gets wet.</li>
          <li><strong>Mind the Edges:</strong> Pay special attention to the edges of your wrap. If they start to lift, gently press them back down with your finger.</li>
        </ul>

        <h2>Deep Cleaning Your Phone Wrap</h2>
        <p>For a more thorough clean, follow these steps once a week:</p>
        <ol>
          <li>Mix a small amount of mild dish soap with warm water</li>
          <li>Dampen a microfiber cloth with the solution (don't soak it)</li>
          <li>Gently wipe the phone wrap in circular motions</li>
          <li>Use a dry microfiber cloth to remove any moisture</li>
          <li>Let your phone air dry for a few minutes before use</li>
        </ol>

        <h2>What to Avoid</h2>
        <p>To keep your phone wrap in pristine condition, avoid these common mistakes:</p>
        <ul>
          <li><strong>Extreme Temperatures:</strong> Don't leave your phone in direct sunlight or extreme cold for extended periods. This can cause the wrap to expand, contract, or fade.</li>
          <li><strong>Abrasive Materials:</strong> Avoid cleaning with paper towels, rough fabrics, or scouring pads that can scratch the surface.</li>
          <li><strong>Excessive Force:</strong> Don't bend or twist your phone excessively, as this can cause the wrap to crack or peel.</li>
          <li><strong>Chemical Exposure:</strong> Keep your phone away from lotions, perfumes, and other cosmetics that might stain or damage the wrap.</li>
        </ul>

        <h2>Troubleshooting Common Issues</h2>
        <p><strong>Bubbles Under the Wrap:</strong> If you notice small bubbles, use a credit card wrapped in a soft cloth to gently push them toward the nearest edge.</p>
        <p><strong>Lifting Corners:</strong> Apply gentle heat with a hairdryer on low setting, then press the corner firmly for 10-15 seconds.</p>
        <p><strong>Fading Colors:</strong> To prevent fading, avoid prolonged direct sunlight exposure and consider using a phone case for added protection.</p>

        <h2>When to Replace Your Phone Wrap</h2>
        <p>Even with the best care, phone wraps don't last forever. Consider replacing your wrap if:</p>
        <ul>
          <li>The edges are significantly lifted and won't stay down</li>
          <li>There are visible tears or cracks in the material</li>
          <li>The colors have faded substantially</li>
          <li>The adhesive is no longer holding properly</li>
          <li>You simply want a fresh new look!</li>
        </ul>

        <h2>Conclusion</h2>
        <p>With proper care and maintenance, your phone wrap can look great for months. Remember to clean it regularly, avoid harsh chemicals and extreme conditions, and address any issues promptly. By following these guidelines, you'll keep your phone looking stylish and protected for the long haul.</p>
        
        <p>Have questions about phone wrap care? Check out our collection of premium wraps and reach out to our customer support team for personalized advice!</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Top 10 Gaming-Themed Phone Wraps of 2024",
    excerpt: "Discover the most popular gaming designs that are dominating the phone wrap scene this year.",
    image: "/images/blog2.jpg",
    date: "December 10, 2024",
    author: "Gaming Collection Team",
    content: `
      <div class="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>Gaming culture has never been more vibrant, and phone wraps are the perfect way to showcase your passion for your favorite games. In 2024, we've seen incredible designs inspired by everything from classic retro games to the latest AAA releases. Let's dive into the top 10 gaming-themed phone wraps that are taking the community by storm.</p>

        <h2>1. Cyberpunk Neon Cityscape</h2>
        <p>Inspired by futuristic RPGs, this wrap features stunning neon-lit skyscrapers and holographic effects. The vibrant purples, blues, and pinks create a mesmerizing cyberpunk aesthetic that looks incredible in any lighting condition.</p>
        <p><strong>Why it's popular:</strong> Perfect for fans of cyberpunk games and futuristic aesthetics. The design is bold yet sophisticated.</p>

        <h2>2. Retro 8-Bit Pixel Art</h2>
        <p>Nostalgia meets modern design with this pixelated masterpiece. Featuring iconic gaming elements like power-ups, coins, and classic characters, this wrap is a love letter to the golden age of gaming.</p>
        <p><strong>Why it's popular:</strong> Appeals to gamers of all ages and sparks conversations about favorite childhood games.</p>

        <h2>3. Fantasy RPG Map</h2>
        <p>This detailed wrap showcases an intricate fantasy map complete with kingdoms, dungeons, and mythical creatures. It's like carrying an entire game world in your pocket.</p>
        <p><strong>Why it's popular:</strong> Perfect for RPG enthusiasts and D&D players. The level of detail is extraordinary.</p>

        <h2>4. Battle Royale Drop Zone</h2>
        <p>Featuring aerial views of iconic battle royale maps with drop markers and supply crates, this wrap captures the adrenaline of competitive gaming.</p>
        <p><strong>Why it's popular:</strong> Resonates with the massive battle royale gaming community and features recognizable landmarks.</p>

        <h2>5. Minimalist Gaming Controller</h2>
        <p>A sleek, minimalist design featuring clean lines and button layouts of iconic gaming controllers. Available in multiple color schemes including classic black and white, vibrant neon, and gradient editions.</p>
        <p><strong>Why it's popular:</strong> Subtle yet unmistakably gaming-related, perfect for professional settings.</p>

        <h2>6. Anime Fighting Game Edition</h2>
        <p>Dynamic action poses and energy effects inspired by popular fighting games. This wrap features bold character silhouettes and explosive color gradients.</p>
        <p><strong>Why it's popular:</strong> Combines anime art style with fighting game aesthetics, appealing to both communities.</p>

        <h2>7. Space Exploration Simulator</h2>
        <p>Stunning cosmic vistas with spaceships, planets, and nebulae. This wrap is inspired by space simulation games and features incredible depth and detail.</p>
        <p><strong>Why it's popular:</strong> Beautiful and inspiring, perfect for fans of space exploration games and sci-fi.</p>

        <h2>8. Horror Survival Aesthetic</h2>
        <p>Dark, moody design with subtle horror elements. Features fog, silhouettes, and eerie lighting that creates an unsettling yet captivating look.</p>
        <p><strong>Why it's popular:</strong> Unique and bold, perfect for horror game enthusiasts who want something different.</p>

        <h2>9. Racing Stripes & Speedlines</h2>
        <p>High-octane design featuring racing stripes, checkered flags, and motion blur effects. Perfect for racing game fans who live life in the fast lane.</p>
        <p><strong>Why it's popular:</strong> Dynamic and energetic, captures the thrill of racing games.</p>

        <h2>10. MOBA Championship Edition</h2>
        <p>Inspired by competitive MOBA tournaments, this wrap features team colors, champion silhouettes, and championship trophies with a premium metallic finish.</p>
        <p><strong>Why it's popular:</strong> Celebrates the competitive gaming scene and esports culture.</p>

        <h2>Honorable Mentions</h2>
        <p>Several other designs deserve recognition:</p>
        <ul>
          <li><strong>Stealth Camo Pattern:</strong> Military tactical game-inspired camouflage</li>
          <li><strong>Puzzle Game Blocks:</strong> Colorful falling block designs</li>
          <li><strong>Open World Adventure:</strong> Scenic landscapes from exploration games</li>
          <li><strong>Fighting Game Health Bars:</strong> Retro health and energy bar designs</li>
        </ul>

        <h2>Choosing the Right Gaming Wrap</h2>
        <p>When selecting a gaming-themed phone wrap, consider:</p>
        <ul>
          <li><strong>Your Favorite Genre:</strong> Choose a design that represents the games you love most</li>
          <li><strong>Color Preferences:</strong> Decide between bold, vibrant colors or subtle, minimalist designs</li>
          <li><strong>Conversation Starter:</strong> Some designs are instantly recognizable and great for connecting with fellow gamers</li>
          <li><strong>Professional Settings:</strong> Consider how bold you want to go if you use your phone at work</li>
        </ul>

        <h2>Conclusion</h2>
        <p>2024 has been an incredible year for gaming-themed phone wraps. Whether you're into retro classics, modern AAA titles, or competitive esports, there's a perfect wrap waiting for you. These designs not only protect your phone but also let you express your gaming passion wherever you go.</p>
        
        <p>Check out our full gaming collection to find your perfect match, and don't forget to join our community to share your setup and connect with fellow gaming enthusiasts!</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "Custom Phone Wraps: Design Your Own Masterpiece",
    excerpt: "Step-by-step guide to creating personalized phone wraps that truly reflect your style.",
    image: "/images/blog3.jpg",
    date: "December 5, 2024",
    author: "Design Team",
    content: `
      <div class="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>In a world where personalization is key, why settle for generic phone accessories? Custom phone wraps offer the perfect opportunity to transform your device into a unique expression of your personality, brand, or creative vision. This comprehensive guide will walk you through everything you need to know about creating your own custom phone wrap masterpiece.</p>

        <h2>Why Choose Custom Phone Wraps?</h2>
        <p>Custom phone wraps offer several advantages over standard designs:</p>
        <ul>
          <li><strong>Unique Identity:</strong> Stand out with a design that's entirely yours</li>
          <li><strong>Personal Expression:</strong> Showcase your artwork, photos, or favorite quotes</li>
          <li><strong>Brand Promotion:</strong> Perfect for businesses and content creators</li>
          <li><strong>Gift Giving:</strong> Create memorable, personalized gifts for loved ones</li>
          <li><strong>Commemorative Designs:</strong> Celebrate special moments and memories</li>
        </ul>

        <h2>Design Fundamentals</h2>
        <p>Before you start creating, understand these basic principles:</p>
        
        <h3>Resolution and Quality</h3>
        <p>For the best results, your design should be high resolution (at least 300 DPI). Low-resolution images will appear pixelated and unprofessional on the final product.</p>

        <h3>Color Considerations</h3>
        <p>Colors may appear slightly different when printed on vinyl compared to on-screen. Consider:</p>
        <ul>
          <li>Using CMYK color mode for accurate printing</li>
          <li>Avoiding extremely light colors that may not show up well</li>
          <li>Testing color combinations for visibility and contrast</li>
          <li>Considering how colors look in different lighting conditions</li>
        </ul>

        <h3>Safe Zones and Bleed Areas</h3>
        <p>Important design elements should stay within the "safe zone" (at least 3mm from edges) to avoid being cut off during production. Always include a bleed area for edge-to-edge designs.</p>

        <h2>Step-by-Step Design Process</h2>
        
        <h3>Step 1: Choose Your Design Concept</h3>
        <p>Start by brainstorming ideas:</p>
        <ul>
          <li><strong>Personal Photos:</strong> Family, pets, travel memories, or special moments</li>
          <li><strong>Artistic Designs:</strong> Abstract art, illustrations, or patterns</li>
          <li><strong>Typography:</strong> Favorite quotes, lyrics, or motivational text</li>
          <li><strong>Branding:</strong> Company logos, business cards, or promotional designs</li>
          <li><strong>Collages:</strong> Multiple images or elements combined creatively</li>
        </ul>

        <h3>Step 2: Gather Your Assets</h3>
        <p>Collect all the elements you'll need:</p>
        <ul>
          <li>High-resolution images (preferably RAW or TIFF format)</li>
          <li>Fonts (ensure you have proper licensing)</li>
          <li>Logos and graphics in vector format when possible</li>
          <li>Color palettes and style references</li>
        </ul>

        <h3>Step 3: Design Software Options</h3>
        <p>Choose the right tool for your skill level:</p>
        <ul>
          <li><strong>Adobe Photoshop:</strong> Industry standard, best for photo-based designs</li>
          <li><strong>Adobe Illustrator:</strong> Perfect for vector graphics and logos</li>
          <li><strong>Canva:</strong> User-friendly option for beginners with templates</li>
          <li><strong>GIMP:</strong> Free alternative to Photoshop</li>
          <li><strong>Inkscape:</strong> Free vector graphics editor</li>
        </ul>

        <h3>Step 4: Template Download</h3>
        <p>Always use our official phone model templates to ensure perfect fit. Templates include:</p>
        <ul>
          <li>Exact phone dimensions</li>
          <li>Camera cutout locations</li>
          <li>Button placements</li>
          <li>Safe zones and bleed areas</li>
          <li>Guidelines for optimal design placement</li>
        </ul>

        <h3>Step 5: Create Your Design</h3>
        <p>Now for the fun part! Keep these tips in mind:</p>
        <ul>
          <li><strong>Camera Cutouts:</strong> Design around the camera area creatively rather than ignoring it</li>
          <li><strong>Balance:</strong> Distribute visual weight evenly across the design</li>
          <li><strong>Contrast:</strong> Ensure text is readable and important elements stand out</li>
          <li><strong>Symmetry:</strong> Consider whether you want a balanced or asymmetrical design</li>
          <li><strong>White Space:</strong> Don't overcrowd—sometimes less is more</li>
        </ul>

        <h3>Step 6: Review and Refine</h3>
        <p>Before finalizing:</p>
        <ul>
          <li>Check spelling and grammar on text elements</li>
          <li>Verify all images are high resolution</li>
          <li>Test your design at actual size (print a paper template)</li>
          <li>Get feedback from friends or family</li>
          <li>Ensure all elements are within safe zones</li>
        </ul>

        <h2>Design Ideas and Inspiration</h2>
        
        <h3>For Personal Use</h3>
        <ul>
          <li><strong>Photo Collage:</strong> Multiple memories in a creative layout</li>
          <li><strong>Minimalist Quote:</strong> Simple text on a solid or gradient background</li>
          <li><strong>Pet Portrait:</strong> Professional or artistic rendering of your pet</li>
          <li><strong>Travel Map:</strong> Places you've been or dream of visiting</li>
        </ul>

        <h3>For Business</h3>
        <ul>
          <li><strong>Logo Showcase:</strong> Clean presentation of your company branding</li>
          <li><strong>Contact Info:</strong> Business card-style design with QR code</li>
          <li><strong>Product Display:</strong> Showcase your products or services</li>
          <li><strong>Brand Pattern:</strong> Repeating pattern using brand elements</li>
        </ul>

        <h3>For Gifts</h3>
        <ul>
          <li><strong>Anniversary Date:</strong> Special date with romantic imagery</li>
          <li><strong>Inside Joke:</strong> Personal humor that resonates with the recipient</li>
          <li><strong>Achievement Celebration:</strong> Commemorate graduations, promotions, etc.</li>
          <li><strong>Fan Art:</strong> Custom art of their favorite character or franchise</li>
        </ul>

        <h2>Technical Specifications</h2>
        <p>For best results, follow these specifications:</p>
        <ul>
          <li><strong>File Format:</strong> PDF, PNG, or TIFF (with transparency if needed)</li>
          <li><strong>Resolution:</strong> 300 DPI minimum</li>
          <li><strong>Color Mode:</strong> CMYK for print accuracy</li>
          <li><strong>File Size:</strong> Under 50MB for smooth upload</li>
          <li><strong>Bleed:</strong> 3mm on all sides</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Low Resolution Images:</strong> Always use high-quality source files</li>
          <li><strong>Copyright Infringement:</strong> Only use images and graphics you own or have licensed</li>
          <li><strong>Ignoring Camera Cutouts:</strong> Design with camera placement in mind</li>
          <li><strong>Poor Text Readability:</strong> Ensure adequate contrast and appropriate font sizes</li>
          <li><strong>Overcomplicated Designs:</strong> Sometimes simpler designs are more effective</li>
          <li><strong>Not Testing:</strong> Always preview your design at actual size before ordering</li>
        </ul>

        <h2>The Ordering Process</h2>
        <p>Once your design is ready:</p>
        <ol>
          <li><strong>Upload Your Design:</strong> Use our easy upload tool on the custom design page</li>
          <li><strong>Select Your Phone Model:</strong> Ensure you choose the correct device</li>
          <li><strong>Preview:</strong> Review the digital mockup carefully</li>
          <li><strong>Request Proof:</strong> We can send a preview before production</li>
          <li><strong>Approve and Order:</strong> Finalize your order and we'll begin production</li>
        </ol>

        <h2>Care and Maintenance</h2>
        <p>Custom wraps require the same care as our pre-designed options:</p>
        <ul>
          <li>Clean gently with a microfiber cloth</li>
          <li>Avoid harsh chemicals and abrasive materials</li>
          <li>Keep away from extreme temperatures</li>
          <li>Press down lifted edges promptly</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Creating a custom phone wrap is an exciting opportunity to showcase your creativity and personality. Whether you're designing for yourself, your business, or as a gift, the possibilities are endless. Take your time with the design process, follow our guidelines, and don't hesitate to reach out to our design team if you need assistance.</p>
        
        <p>Ready to start creating? Head to our custom design page and bring your vision to life. We can't wait to see what you create!</p>

        <h2>Need Help?</h2>
        <p>Our design team is here to assist you:</p>
        <ul>
          <li><strong>Design Consultation:</strong> Free advice on creating your perfect wrap</li>
          <li><strong>File Preparation:</strong> We can help optimize your files for printing</li>
          <li><strong>Custom Quotes:</strong> Bulk orders and special requests</li>
          <li><strong>Technical Support:</strong> Help with templates and software questions</li>
        </ul>
        
        <p>Contact us anytime—we're excited to help you create something amazing!</p>
      </div>
    `,
  },
];

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = parseInt(params.id);

  // Find the blog post by ID
  const post = blogPosts.find((p) => p.id === postId);

  // If post not found, show 404 message
  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/Blog")}
            className="px-6 py-3 bg-[#9AE600] text-black rounded-lg hover:bg-[#8BD600] transition-colors"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] min-h-[400px] max-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.push("/Blog")}
          className="flex items-center gap-2 text-[#9AE600] hover:text-[#8BD600] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </button>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{blog.views} views</span>
            </div>
          </div>

          {/* Category Badge */}
          {blog.category && (
            <div className="mb-8">
              <span className="inline-block bg-[#9AE600] text-black px-4 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#9AE600] to-transparent mb-12" />

          {/* Article Content */}
          <div className="blog-content text-gray-300 leading-relaxed">
            {/* Render rich content blocks if available */}
            {blog.contentBlocks && blog.contentBlocks.length > 0 ? (
              blog.contentBlocks.map((block, index) => {
                switch (block.type) {
                  case 'heading':
                    const HeadingTag = `h${block.level}`;
                    return (
                      <HeadingTag key={index} className={`heading-${block.level}`}>
                        {block.content}
                      </HeadingTag>
                    );
                  
                  case 'paragraph':
                    return (
                      <p key={index} className="paragraph-block">
                        {block.content}
                      </p>
                    );
                  
                  case 'image':
                    return (
                      <div key={index} className="image-block">
                        <img
                          src={block.content}
                          alt={block.alt || 'Blog image'}
                          className="w-full rounded-lg"
                        />
                        {block.caption && (
                          <p className="image-caption">{block.caption}</p>
                        )}
                      </div>
                    );
                  
                  case 'list':
                    return (
                      <ul key={index} className="list-block">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    );
                  
                  case 'quote':
                    return (
                      <blockquote key={index} className="quote-block">
                        {block.content}
                      </blockquote>
                    );
                  
                  default:
                    return null;
                }
              })
            ) : (
              // Fallback to plain content for backward compatibility
              <div className="whitespace-pre-wrap">{blog.content}</div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />

          {/* Share Section */}
          <div className="bg-[#131313] rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Share This Article</h3>
            <p className="text-gray-400 mb-6">
              Found this helpful? Share it with your friends!
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#9AE600] text-black rounded-lg hover:bg-[#8BD600] transition-colors font-medium">
                Share on Twitter
              </button>
              <button className="px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Copy Link
              </button>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
            <p className="text-gray-400 mb-6">
              Check out our other articles and guides
            </p>
            <button
              onClick={() => router.push("/Blog")}
              className="px-8 py-3 bg-[#9AE600] text-black rounded-lg hover:bg-[#8BD600] transition-colors font-medium"
            >
              View All Articles
            </button>
          </div>
        </article>
      </div>

      <Footer />

      {/* Custom Styles for Blog Content */}
      <style jsx global>{`
        .blog-content .heading-1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #9ae600;
          line-height: 1.2;
        }

        .blog-content .heading-2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          color: #9ae600;
          line-height: 1.3;
        }

        .blog-content .heading-3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
          line-height: 1.4;
        }

        .blog-content .heading-4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
          line-height: 1.4;
        }

        .blog-content .paragraph-block {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #d1d5db;
          font-size: 1.05rem;
        }

        .blog-content .image-block {
          margin: 2.5rem 0;
        }

        .blog-content .image-block img {
          width: 100%;
          border-radius: 0.75rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .blog-content .image-caption {
          text-align: center;
          margin-top: 0.75rem;
          font-size: 0.9rem;
          color: #9ca3af;
          font-style: italic;
        }

        .blog-content .list-block {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }

        .blog-content .list-block li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          color: #d1d5db;
        }

        .blog-content .list-block li::marker {
          color: #9ae600;
        }

        .blog-content .quote-block {
          border-left: 4px solid #9ae600;
          padding-left: 1.5rem;
          padding-right: 1rem;
          margin: 2.5rem 0;
          font-style: italic;
          color: #9ca3af;
          font-size: 1.1rem;
          background-color: rgba(154, 230, 0, 0.05);
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-radius: 0 0.5rem 0.5rem 0;
        }

        .blog-content h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #9ae600;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #d1d5db;
        }

        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
          color: #d1d5db;
        }

        .blog-content ul li::marker {
          color: #9ae600;
        }

        .blog-content ol li::marker {
          color: #9ae600;
          font-weight: 600;
        }

        .blog-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .blog-content a {
          color: #9ae600;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .blog-content a:hover {
          color: #8bd600;
        }

        .blog-content code {
          background-color: #1f1f1f;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.9em;
          color: #9ae600;
        }

        .blog-content blockquote {
          border-left: 4px solid #9ae600;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
