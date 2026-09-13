/**
 * Gozic Apps - Internationalization (i18n)
 * Supports English (Default) and Vietnamese
 */

(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      // Document metadata
      site_title: "Gozic Apps - Intelligent Mobile Application Ecosystem",
      site_desc: "Discover the top 3 flagship mobile apps by Gozic: Note Everything (Notepad & OCR Scanner), My Kiddy (Family Education) and POS Sales & Inventory on Android and iOS.",
      
      // Navigation
      nav_home: "Home",
      nav_apps: "Apps",
      nav_features: "Features",
      nav_legal: "Legal & Terms ▾",
      nav_terms: "Terms of Use",
      nav_privacy: "Privacy Policy",
      nav_eula: "EULA Agreement",
      nav_contact: "Contact",
      nav_cta: "Explore Apps",
      back_to_home: "Back to Home",
      legal_policies: "Legal Policies",

      // Hero Section
      hero_badge: "Intelligent & Productive App Ecosystem",
      hero_title: "Groundbreaking Mobile Apps For <br><span class=\"gradient-text\">Your Life & Work</span>",
      hero_desc: "Experience the trusted trio of mobile applications empowering hundreds of thousands of users worldwide: Smart note-taking & OCR scanner, child development space, and lightning-fast POS & warehouse management on iOS & Android.",
      hero_btn_apps: "Explore Our Apps",
      hero_btn_legal: "Terms & Policies",
      stat_downloads: "Global Downloads",
      stat_rating: "Average Rating",
      stat_privacy: "Privacy & Secure",
      stat_uptime: "Available Anytime",

      // Apps Section
      section_tag_apps: "Featured Products",
      section_title_apps: "Discover Our Flagship Apps",
      section_desc_apps: "Crafted with precision, unmatched performance, intuitive interface, and rich features designed to meet all your needs.",

      // App 1: Note Everything
      app1_cat: "Productivity & Notes",
      app1_name: "Note Everything - Multimedia Notepad & OCR Scanner",
      app1_desc: "Rich multimedia notes, instant OCR text extraction, versatile file conversion, and biometric security for complete peace of mind.",
      app1_f1: "Advanced OCR scanner for handwritten & printed text",
      app1_f2: "Seamless file converter: PDF to Word, Excel, PowerPoint",
      app1_f3: "Biometric security: Face ID, Fingerprint & custom PIN",
      app1_f4: "Secure cloud sync: Google Drive, iCloud, Wi-Fi P2P",

      // App 2: My Kiddy
      app2_cat: "Education & Family",
      app2_name: "My Kiddy - Learn, Play & Grow Joyfully",
      app2_desc: "Wholesome educational playground fostering creative thinking, memory training, and meaningful family bonding.",
      app2_f1: "Brain puzzles, logic games, color & shape recognition",
      app2_f2: "100% child-safe environment, zero harmful ads",
      app2_f3: "Family accounts & smart screen-time management",
      app2_f4: "Vibrant visuals, cheerful sounds & engaging animations",

      // App 3: POS Sales & Inventory
      app3_cat: "Sales & Inventory POS",
      app3_name: "Smart POS & Warehouse Inventory Manager",
      app3_desc: "Complete warehouse inventory management, rapid Barcode/QR scanning, and wireless retail receipt printing on mobile.",
      app3_f1: "Real-time stock in/out & inventory balance tracking",
      app3_f2: "Ultra-fast Barcode & QR Code camera scanning",
      app3_f3: "Order creation & wireless receipt printing (Bluetooth / Wi-Fi)",
      app3_f4: "Low stock alerts, revenue analytics & Excel export",

      // Common Store & Legal
      download_on: "Download on",
      app_terms: "Terms",
      app_privacy: "Privacy",
      app_eula: "EULA",

      // Why Choose Us
      section_tag_features: "Quality Commitment",
      section_title_features: "Why Thousands of Users Choose Us?",
      section_desc_features: "Every product is crafted with passion for user experience, data privacy, and long-term stability.",
      feat1_title: "Blazing Speed & Stability",
      feat1_desc: "Instant launch, buttery-smooth offline capability, and low battery consumption.",
      feat2_title: "Privacy & Data Protection",
      feat2_desc: "Secure local-first storage, robust encryption, and zero third-party data tracking.",
      feat3_title: "Modern Intuitive UI/UX",
      feat3_desc: "Thoughtfully designed interfaces accessible to everyone, from young kids to warehouse managers.",
      feat4_title: "Continuous Evolution",
      feat4_desc: "Actively listening to user feedback to release periodic improvements and cutting-edge features.",

      // Legal Banner
      legal_banner_tag: "Transparency & Trust",
      legal_banner_title: "Privacy Policy & Terms of Service",
      legal_banner_desc: "We respect and protect your rights at all times. All terms and privacy policies are fully disclosed in accordance with international standards.",
      legal_btn_terms: "Terms of Use",
      legal_btn_privacy: "Privacy Policy",
      legal_btn_eula: "EULA Agreement",

      // Contact
      contact_tag: "Customer Support",
      contact_title: "Need Help or Have Feedback?",
      contact_desc: "Our development team is always here to listen and assist you promptly.",
      contact_email: "Email: ziczacgroup@gmail.com",
      breadcrumb_home: "Home",
      breadcrumb_legal: "Legal Policies",

      // Footer
      footer_brand_desc: "Intelligent utility application ecosystem: multimedia notepad & OCR scanner, child development space, and professional mobile POS inventory management.",
      footer_title_apps: "Mobile Apps",
      footer_title_legal: "Legal & Policies",
      footer_title_contact: "Contact Info",
      footer_location: "Hanoi, Vietnam",
      footer_copyright: "© 2026 Gozic Apps. All rights reserved.",
      footer_sub: "Modern web experience built with high-quality standards.",

      // Legal Pages UI Shell
      doc_lang_label: "Document Language:",
      terms_title: "Terms and Conditions of Use",
      terms_meta_title: "Terms and Conditions of Use - Gozic Apps",
      privacy_title: "Privacy Policy",
      privacy_meta_title: "Privacy Policy - Gozic Apps",
      eula_title: "Licensed Application End User License Agreement (EULA)",
      eula_meta_title: "Licensed Application End User License Agreement (EULA) - Gozic Apps",
      legal_meta_updated: "Last updated:",
      legal_meta_reading: "Estimated reading: ~8 min",
      legal_meta_coverage: "Worldwide coverage (iOS & Android)",
      toc_title: "Table of Contents",
      legal_support: "Legal Support",
      legal_notice: "Important Notice: By downloading, installing, or continuing to use any application within the Gozic Apps ecosystem, you acknowledge that you have read, understood, and agreed to be bound by all the terms specified herein.",
      copy_link: "Copy Link",
      link_copied: "✓ Link copied!",
      back_to_top: "Back to Top"
    },
    vi: {
      // Document metadata
      site_title: "Gozic Apps - Hệ Sinh Thái Ứng Dụng Di Động Thông Minh",
      site_desc: "Khám phá bộ 3 ứng dụng di động hàng đầu của Gozic: Note Everything (Ghi chú & Scanner), My Kiddy (Giáo dục gia đình) và POS Bán Hàng & Kho trên Android và iOS.",
      
      // Navigation
      nav_home: "Trang chủ",
      nav_apps: "Ứng dụng",
      nav_features: "Ưu điểm",
      nav_legal: "Pháp lý & Điều khoản ▾",
      nav_terms: "Điều khoản sử dụng",
      nav_privacy: "Chính sách bảo mật",
      nav_eula: "Thỏa thuận EULA",
      nav_contact: "Liên hệ",
      nav_cta: "Khám phá ngay",
      back_to_home: "Về Trang Chủ",
      legal_policies: "Chính sách pháp lý",

      // Hero Section
      hero_badge: "Hệ sinh thái ứng dụng tiện ích & thông minh",
      hero_title: "Ứng Dụng Di Động Đột Phá Cho <br><span class=\"gradient-text\">Cuộc Sống & Công Việc</span> Của Bạn",
      hero_desc: "Trải nghiệm bộ ba ứng dụng mạnh mẽ được hàng trăm nghìn người dùng tin tưởng: Ghi chú & quét tài liệu thông minh, không gian giáo dục phát triển cho trẻ, và giải pháp bán hàng quản lý kho siêu tốc trên cả iOS & Android.",
      hero_btn_apps: "Xem Danh Sách Ứng Dụng",
      hero_btn_legal: "Chính Sách & Điều Khoản",
      stat_downloads: "Lượt Tải Toàn Cầu",
      stat_rating: "Đánh Giá Trung Bình",
      stat_privacy: "Bảo Mật Dữ Liệu",
      stat_uptime: "Sẵn Sàng Sử Dụng",

      // Apps Section
      section_tag_apps: "Sản phẩm nổi bật",
      section_title_apps: "Khám Phá Các Ứng Dụng Hàng Đầu",
      section_desc_apps: "Được phát triển tỉ mỉ với hiệu năng vượt trội, giao diện tinh tế và đầy đủ tính năng đáp ứng mọi nhu cầu của bạn.",

      // App 1: Note Everything
      app1_cat: "Năng Suất & Ghi Chú",
      app1_name: "Note Everything - Sổ Tay & Quét Tài Liệu Đa Năng",
      app1_desc: "Ghi chú đa phương tiện, quét tài liệu OCR trích xuất văn bản tức thì, chuyển đổi file linh hoạt và bảo mật tuyệt đối với sinh trắc học.",
      app1_f1: "Quét tài liệu OCR trích xuất chữ viết tay & in ấn",
      app1_f2: "Chuyển đổi file: PDF sang Word, Excel, PPT",
      app1_f3: "Khóa bảo mật Face ID, Vân tay & Mã PIN riêng biệt",
      app1_f4: "Đồng bộ an toàn: Google Drive, iCloud, Wi-Fi P2P",

      // App 2: My Kiddy
      app2_cat: "Giáo Dục & Gia Đình",
      app2_name: "My Kiddy - Đồng Hành Cùng Bé Vui Học & Khôn Lớn",
      app2_desc: "Không gian vui chơi giải trí lành mạnh, kích thích tư duy sáng tạo, rèn luyện trí nhớ và kết nối tình cảm gia đình trọn vẹn.",
      app2_f1: "Trò chơi trí tuệ, logic và nhận biết màu sắc, hình khối",
      app2_f2: "Môi trường an toàn 100%, không quảng cáo độc hại",
      app2_f3: "Quản lý tài khoản gia đình và thời gian sử dụng của bé",
      app2_f4: "Giao diện tươi sáng, âm thanh vui nhộn cuốn hút",

      // App 3: POS Bán Hàng & Kho
      app3_cat: "Quản Trị Bán Hàng & Kho",
      app3_name: "POS Bán Hàng & Kho - Kiểm Kho Hàng Thông Minh",
      app3_desc: "Giải pháp quản lý xuất nhập tồn hàng hóa, quét mã vạch Barcode / QR và xuất hóa đơn bán lẻ siêu tốc ngay trên điện thoại di động.",
      app3_f1: "Quản lý xuất - nhập - tồn hàng hóa theo thời gian thực",
      app3_f2: "Quét mã vạch Barcode & QR Code siêu nhạy bằng camera",
      app3_f3: "Tạo đơn hàng, in hóa đơn không dây (Bluetooth / Wi-Fi)",
      app3_f4: "Cảnh báo hàng sắp hết, báo cáo doanh thu & xuất file Excel",

      // Common Store & Legal
      download_on: "Tải về trên",
      app_terms: "Điều khoản",
      app_privacy: "Bảo mật",
      app_eula: "EULA",

      // Why Choose Us
      section_tag_features: "Cam kết chất lượng",
      section_title_features: "Vì Sao Hàng Nghìn Người Dùng Chọn Chúng Tôi?",
      section_desc_features: "Chúng tôi xây dựng từng sản phẩm với tâm huyết cao nhất về trải nghiệm, tính bảo mật và sự ổn định lâu dài.",
      feat1_title: "Tốc Độ & Ổn Định",
      feat1_desc: "Khởi động tức thì, hoạt động mượt mà ngay cả khi không có kết nối internet và tối ưu pin thiết bị.",
      feat2_title: "Bảo Mật Quyền Riêng Tư",
      feat2_desc: "Dữ liệu được lưu trữ cục bộ an toàn, mã hóa chặt chẽ và tuyệt đối không chia sẻ thông tin cho bên thứ ba.",
      feat3_title: "Giao Diện Hiện Đại (UI/UX)",
      feat3_desc: "Thiết kế trực quan, dễ thao tác cho mọi lứa tuổi từ trẻ nhỏ đến chủ doanh nghiệp quản lý kho.",
      feat4_title: "Cập Nhật Liên Tục",
      feat4_desc: "Luôn lắng nghe phản hồi của người dùng để cập nhật tính năng mới và cải tiến trải nghiệm định kỳ.",

      // Legal Banner
      legal_banner_tag: "Minh bạch & Rõ ràng",
      legal_banner_title: "Chính Sách Quyền Riêng Tư & Điều Khoản Sử Dụng",
      legal_banner_desc: "Chúng tôi luôn tôn trọng và bảo vệ quyền lợi của người dùng. Mọi điều khoản và chính sách bảo mật đều được công khai đầy đủ và tuân thủ các quy định quốc tế.",
      legal_btn_terms: "Điều Khoản Sử Dụng",
      legal_btn_privacy: "Chính Sách Bảo Mật",
      legal_btn_eula: "Thỏa Thuận EULA",

      // Contact
      contact_tag: "Hỗ trợ người dùng",
      contact_title: "Bạn Cần Trợ Giúp Hoặc Có Góp Ý?",
      contact_desc: "Đội ngũ phát triển luôn sẵn lòng lắng nghe và hỗ trợ giải quyết mọi thắc mắc của bạn nhanh chóng.",
      contact_email: "Email: ziczacgroup@gmail.com",
      breadcrumb_home: "Trang chủ",
      breadcrumb_legal: "Chính sách pháp lý",

      // Footer
      footer_brand_desc: "Hệ sinh thái ứng dụng tiện ích thông minh, sổ tay ghi chú & quét tài liệu, giáo dục phát triển trẻ thơ và giải pháp quản lý bán hàng tồn kho chuyên nghiệp trên di động.",
      footer_title_apps: "Ứng Dụng Di Động",
      footer_title_legal: "Pháp Lý & Chính Sách",
      footer_title_contact: "Thông Tin Liên Hệ",
      footer_location: "Hà Nội, Việt Nam",
      footer_copyright: "© 2026 Gozic Apps. Toàn bộ bản quyền được bảo lưu.",
      footer_sub: "Thiết kế hiện đại với công nghệ Web chuẩn mực.",

      // Legal Pages UI Shell
      doc_lang_label: "Ngôn ngữ văn bản:",
      terms_title: "Điều Khoản và Điều Kiện Sử Dụng",
      terms_meta_title: "Điều Khoản và Điều Kiện Sử Dụng - Gozic Apps",
      privacy_title: "Chính Sách Quyền Riêng Tư",
      privacy_meta_title: "Chính Sách Quyền Riêng Tư - Gozic Apps",
      eula_title: "Thỏa Thuận Cấp Phép Người Dùng Cuối (EULA)",
      eula_meta_title: "Thỏa Thuận Cấp Phép Người Dùng Cuối (EULA) - Gozic Apps",
      legal_meta_updated: "Cập nhật lần cuối:",
      legal_meta_reading: "Thời gian đọc ước tính: ~8 phút",
      legal_meta_coverage: "Áp dụng toàn cầu (iOS & Android)",
      toc_title: "Mục lục tài liệu",
      legal_support: "Hỗ trợ pháp lý",
      legal_notice: "Thông báo quan trọng: Bằng việc tải về, cài đặt hoặc tiếp tục sử dụng bất kỳ ứng dụng nào trong hệ sinh thái Gozic Apps, bạn xác nhận đã đọc, hiểu rõ và đồng ý tuân thủ toàn bộ các điều khoản được quy định dưới đây.",
      copy_link: "Sao chép liên kết",
      link_copied: "✓ Đã sao chép liên kết",
      back_to_top: "Lên đầu trang"
    }
  };

  const STORAGE_KEY = 'gozic_lang';
  const DEFAULT_LANG = 'en';

  /**
   * Get current language from localStorage or default to 'en'
   */
  function getCurrentLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'vi' || saved === 'en') {
        return saved;
      }
    } catch (e) {
      console.warn('localStorage not accessible:', e);
    }
    return DEFAULT_LANG;
  }

  /**
   * Apply translations to all matching elements on the page
   */
  function applyLanguage(lang) {
    if (!TRANSLATIONS[lang]) {
      lang = DEFAULT_LANG;
    }

    const dict = TRANSLATIONS[lang];
    document.documentElement.lang = lang;

    // Update text elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update document title if specified
    const pageTitleKey = document.querySelector('meta[name="title-i18n"]')?.getAttribute('content');
    if (pageTitleKey && dict[pageTitleKey]) {
      document.title = dict[pageTitleKey];
    }

    // Update active state on language switcher buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update legal document panes if present on legal pages
    const docPaneEn = document.getElementById('doc-en');
    const docPaneVi = document.getElementById('doc-vi');
    const tocEn = document.getElementById('toc-en');
    const tocVi = document.getElementById('toc-vi');
    const docTabs = document.querySelectorAll('.doc-tab-btn');

    if (docPaneEn && docPaneVi) {
      if (lang === 'vi') {
        docPaneEn.style.display = 'none';
        docPaneVi.style.display = 'block';
        if (tocEn) tocEn.style.display = 'none';
        if (tocVi) tocVi.style.display = 'flex';
      } else {
        docPaneEn.style.display = 'block';
        docPaneVi.style.display = 'none';
        if (tocEn) tocEn.style.display = 'flex';
        if (tocVi) tocVi.style.display = 'none';
      }

      docTabs.forEach((tab) => {
        if (tab.getAttribute('data-doc-lang') === lang) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }

    // Save choice
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Unable to save to localStorage:', e);
    }

    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('gozicLanguageChange', { detail: { lang } }));
  }

  /**
   * Set language explicitly and persist
   */
  window.setLanguage = function (lang) {
    applyLanguage(lang);
  };

  window.getCurrentLanguage = getCurrentLanguage;

  /**
   * Initialize i18n
   */
  function init() {
    const current = getCurrentLanguage();
    applyLanguage(current);

    // Global listener for navbar / drawer language buttons
    document.addEventListener('click', (e) => {
      const langBtn = e.target.closest('.lang-btn');
      if (langBtn) {
        e.preventDefault();
        const targetLang = langBtn.getAttribute('data-lang');
        if (targetLang) {
          applyLanguage(targetLang);
        }
        return;
      }

      // Legal document internal tab switcher
      const docTabBtn = e.target.closest('.doc-tab-btn');
      if (docTabBtn) {
        e.preventDefault();
        const docLang = docTabBtn.getAttribute('data-doc-lang');
        if (docLang) {
          applyLanguage(docLang);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
