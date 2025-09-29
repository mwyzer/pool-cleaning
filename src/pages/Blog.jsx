import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BlogPage() {
  const location = useLocation();

  useEffect(() => {
    // prefer state, fallback to hash
    const idFromState = location.state?.scrollTo;
    const idFromHash = location.hash ? location.hash.replace(/^#/, "") : null;
    const id = idFromState || idFromHash;
    if (!id) return;

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        setTimeout(tryScroll, 150);
      }
    };

    // small delay to allow render/layout (images, async content)
    setTimeout(tryScroll, 50);
  }, [location]);

  return (
    <main>
      {/* Pastikan elemen target menggunakan id="blog-page" */}
      <section id="blog-page">
        <h2>Pool Care Blog</h2>
        {/* daftar posting */}
      </section>

      {/* bagian lain halaman blog */}
    </main>
  );
}

export default BlogPage;
