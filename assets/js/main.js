/**
 * Gozic Apps - Main JavaScript
 * Lightweight, Vanilla JS for interactive features
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        mobileToggle.classList.remove('active');
      }
    });
  }

  // 2. Sticky Header elevation on scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  // 3. Reading Progress Bar (for legal pages)
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // 4. Table of Contents Active Link Highlight on Scroll
  const tocLinks = document.querySelectorAll('.toc-list a');
  if (tocLinks.length > 0) {
    const headings = Array.from(document.querySelectorAll('.legal-content h2, .legal-content h3'));

    window.addEventListener('scroll', () => {
      let currentId = '';
      headings.forEach(heading => {
        const top = heading.getBoundingClientRect().top;
        if (top <= 140) {
          currentId = heading.getAttribute('id');
        }
      });

      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // 5. Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 6. Copy Page URL
  const copyBtns = document.querySelectorAll('.btn-copy-url');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        const originalText = btn.innerHTML;
        const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'en';
        btn.innerHTML = currentLang === 'vi' ? '✓ Đã sao chép liên kết' : '✓ Link copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Could not copy text: ', err);
      }
    });
  });
});
