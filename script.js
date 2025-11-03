// Products data embedded directly to avoid CORS issues
const productsData = [
  {
    "kategori": "Sunnet",
    "urunler": [
      {
        "urun_kodu": "1001",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1002",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1003",
        "fiyat": "238, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1004",
        "fiyat": "398, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1005",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1006",
        "fiyat": "338, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1007",
        "fiyat": "538, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1008",
        "fiyat": "538, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "1009",
        "fiyat": "698, 00 TL  (100 Adet)"
      },
      {
        "urun_kodu": "80901",
        "fiyat": "1.006,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80902",
        "fiyat": "810,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80903",
        "fiyat": "881,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80904",
        "fiyat": "1.009,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80905",
        "fiyat": "981,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80906",
        "fiyat": "2.248,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80907",
        "fiyat": "981,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80908",
        "fiyat": "911,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80909",
        "fiyat": "1.068,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80911",
        "fiyat": "11.662,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80912",
        "fiyat": "1.316,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80913",
        "fiyat": "12.555,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80914",
        "fiyat": "1.062,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80915",
        "fiyat": "1.209,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80916",
        "fiyat": "7.828,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80917",
        "fiyat": "9.098,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80918",
        "fiyat": "899,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80919",
        "fiyat": "1.153,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80921",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80922",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80923",
        "fiyat": "861,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80924",
        "fiyat": "1.020,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80925",
        "fiyat": "8.829,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80926",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80927",
        "fiyat": "11.439,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80928",
        "fiyat": "8.829,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80929",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80931",
        "fiyat": "1.261,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80932",
        "fiyat": "861,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80933",
        "fiyat": "911,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80934",
        "fiyat": "1.283,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80935",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80936",
        "fiyat": "861,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80938",
        "fiyat": "911,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80939",
        "fiyat": "798,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80941",
        "fiyat": "798,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80942",
        "fiyat": "861,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80943",
        "fiyat": "1.209,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80944",
        "fiyat": "1.209,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80945",
        "fiyat": "1.209,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80946",
        "fiyat": "1.248,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80947",
        "fiyat": "812,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80948",
        "fiyat": "1.891,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80949",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80951",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80952",
        "fiyat": "1.675,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80953",
        "fiyat": "970,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80954",
        "fiyat": "650,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80955",
        "fiyat": "1.109,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80957",
        "fiyat": "11.238,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80958",
        "fiyat": "11.110,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80959",
        "fiyat": "874,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80962",
        "fiyat": "874,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80964",
        "fiyat": "2.955,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80965",
        "fiyat": "8.230,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80967",
        "fiyat": "981,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80971",
        "fiyat": "6.248,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80972",
        "fiyat": "5.926,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80973",
        "fiyat": "1.621,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80974",
        "fiyat": "1.020,00 TL (100 Adet)"
      },
      {
        "urun_kodu": "80975",
        "fiyat": "1.020,00 TL (100 Adet)"
      }

    ]
  }
];

console.log('Products data loaded:', productsData);

// Global variables
let currentCategory = '';

// Make functions globally available
window.searchProducts = searchProductsGlobal;

// Test function for WhatsApp button
window.testWhatsApp = function(productCode) {
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(productCode)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    window.open(whatsappLink, '_blank');
};

// Test function
window.testSearch = function() {
    console.log('Test search called');
    console.log('Keywords data length:', keywordsData.length);
    searchProductsGlobal('beyaz');
};

// DOM Elements
let menuToggle, dropdownMenu, catalogSection, productsSection, productDetailSection;
let productsGrid, productsTitle;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Get DOM elements
    menuToggle = document.getElementById('menu-toggle');
    dropdownMenu = document.getElementById('dropdown-menu');
    catalogSection = document.getElementById('catalog');
    productsSection = document.getElementById('products');
    productDetailSection = document.getElementById('product-detail');
    productsGrid = document.getElementById('products-grid');
    productsTitle = document.getElementById('products-title');
    
    console.log('Elements found:', {
        menuToggle: !!menuToggle,
        dropdownMenu: !!dropdownMenu,
        catalogSection: !!catalogSection,
        productsSection: !!productsSection,
        productDetailSection: !!productDetailSection,
        productsGrid: !!productsGrid
    });
    
    // Initialize menu
    initializeMenu();
    

    
    // Initialize navigation buttons
    initializeNavigationButtons();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize header scroll effect
    initializeHeaderScroll();
    

    
    // Initialize search functionality
    initializeSearch();
    loadKeywordsData();
    
    // Initialize mobile optimizations
    initializeMobileOptimizations();
    
    // Initialize splash screen
    initializeSplashScreen();
    
    // Initialize showcase gallery
    initializeShowcaseGallery();

});

// Initialize menu functionality
function initializeMenu() {
    if (!menuToggle || !dropdownMenu) {
        console.error('Menu elements not found');
        return;
    }
    
    // Menu toggle click
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Menu toggle clicked');
        dropdownMenu.classList.toggle('active');
        console.log('Menu is now:', dropdownMenu.classList.contains('active') ? 'open' : 'closed');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
    
    // Direct category links - no submenu toggle needed

    // Submenu links
    const submenuLinks = document.querySelectorAll('.submenu-link');
    submenuLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            console.log('Category link clicked:', category);
            showProducts(category);
            dropdownMenu.classList.remove('active');
        });
    });
    
    console.log('Menu initialized successfully');
}



// Initialize navigation buttons
function initializeNavigationButtons() {
    // Back to catalog button
    const backToCatalogBtn = document.getElementById('back-to-catalog');
    if (backToCatalogBtn) {
        backToCatalogBtn.addEventListener('click', function() {
            showCatalog();
        });
    }
    
    // Back to products button
    const backToProductsBtn = document.getElementById('back-to-products');
    if (backToProductsBtn) {
        backToProductsBtn.addEventListener('click', function() {
            showProducts(currentCategory);
        });
    }
    
    // Back to home button
    const backToHomeBtn = document.getElementById('back-to-home');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            showMainPage();
        });
    }
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]:not(.submenu-link)');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // If clicking logo or home link, show main page
            if (targetId === '#home') {
                showMainPage();
                return;
            }
            
            // If clicking price list link, show price list page
            if (targetId === '#price-list') {
                showPriceList();
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close dropdown menu
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
            }
        });
    });
}

// Show main page function
function showMainPage() {
    // Hide product sections
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Hide price list section
    const priceListSection = document.getElementById('price-list');
    if (priceListSection) priceListSection.style.display = 'none';
    
    // Show catalog section
    if (catalogSection) catalogSection.style.display = 'block';
    
    // Show main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'block';
    });
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Close dropdown menu
    if (dropdownMenu) {
        dropdownMenu.classList.remove('active');
    }
}

// Show price list function
function showPriceList() {
    console.log('Showing price list');
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Show price list section
    const priceListSection = document.getElementById('price-list');
    if (priceListSection) {
        priceListSection.style.display = 'block';
        priceListSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close dropdown menu
    if (dropdownMenu) {
        dropdownMenu.classList.remove('active');
    }
}

// Initialize header scroll effect
function initializeHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'white';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Show catalog section
function showCatalog() {
    console.log('Showing catalog');
    
    if (catalogSection) catalogSection.style.display = 'block';
    if (productsSection) productsSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    
    // Show main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'block';
    });
    
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show products for category
function showProducts(category) {
    console.log('Showing products for category:', category);
    currentCategory = category;
    
    if (!productsSection || !productsGrid || !productsTitle) {
        console.error('Products elements not found');
        return;
    }
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Update title
    const categoryNames = {
        'Sunnet': 'Sünnet Davetiyesi'
    };
    productsTitle.textContent = categoryNames[category] || 'Ürünler';
    
    // Clear previous products
    productsGrid.innerHTML = '';
    
    // Find category data
    const categoryData = productsData.find(function(cat) {
        return cat.kategori === category;
    });
    
    console.log('Category data found:', categoryData);
    
    if (categoryData && categoryData.urunler) {
        console.log('Loading', categoryData.urunler.length, 'products');
        categoryData.urunler.forEach(function(product) {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
    } else {
        console.error('No products found for category:', category);
        productsGrid.innerHTML = '<p style="text-align: center; padding: 2rem;">Bu kategoride ürün bulunamadı.</p>';
    }
    
    // Scroll to products section
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(product.urun_kodu)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    
    // Determine image path - check if it's a new product (80xxx series)
    const isNewProduct = product.urun_kodu.startsWith('80');
    const imagePath = isNewProduct ? `yenifotolar/${product.urun_kodu}.jpg` : `fotos/${product.urun_kodu}.jpg`;
    const fallbackPath = isNewProduct ? `fotos/${product.urun_kodu}.jpg` : `yenifotolar/${product.urun_kodu}.jpg`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${imagePath}" 
                 alt="Ürün ${product.urun_kodu}" 
                 onerror="this.onerror=null; this.src='${fallbackPath}'; this.onerror=function(){this.src='https://via.placeholder.com/300x300?text=Ürün+${product.urun_kodu}'};">
            <div class="product-overlay">
                <button class="detail-btn" onclick="showProductDetail('${product.urun_kodu}', '${product.fiyat.replace(/'/g, "\\'")}')">
                    <i class="fas fa-eye"></i> Detayları Gör
                </button>
                <a href="${whatsappLink}" target="_blank" class="order-btn">
                    <i class="fab fa-whatsapp"></i> Hemen Sipariş Ver
                </a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-code">Ürün Kodu: ${product.urun_kodu}</div>
            <div class="product-price">${product.fiyat}</div>
        </div>
    `;
    
    return card;
}

// Show product detail
function showProductDetail(productCode, productPrice) {
    console.log('Showing product detail:', productCode);
    
    if (!productDetailSection) {
        console.error('Product detail section not found');
        return;
    }
    
    // Hide other sections
    if (productsSection) productsSection.style.display = 'none';
    if (catalogSection) catalogSection.style.display = 'none';
    productDetailSection.style.display = 'block';
    
    // Update detail page content
    const detailImage = document.getElementById('detail-product-image');
    const detailTitle = document.getElementById('detail-product-title');
    const detailCode = document.getElementById('detail-product-code');
    const detailPrice = document.getElementById('detail-product-price');
    const detailOrderBtn = document.getElementById('detail-order-btn');
    
    if (detailImage) {
        // Determine image path - check if it's a new product (80xxx series)
        const isNewProduct = productCode.startsWith('80');
        const imagePath = isNewProduct ? `yenifotolar/${productCode}.jpg` : `fotos/${productCode}.jpg`;
        const fallbackPath = isNewProduct ? `fotos/${productCode}.jpg` : `yenifotolar/${productCode}.jpg`;
        
        detailImage.src = imagePath;
        detailImage.alt = `Ürün ${productCode}`;
        detailImage.onerror = function() {
            this.onerror = null;
            this.src = fallbackPath;
            this.onerror = function() {
                this.src = `https://via.placeholder.com/600x600?text=Ürün+${productCode}`;
            };
        };
    }
    
    if (detailTitle) detailTitle.textContent = `Davetiye - ${productCode}`;
    if (detailCode) detailCode.textContent = productCode;
    if (detailPrice) detailPrice.textContent = productPrice;
    
    // Update WhatsApp link
    if (detailOrderBtn) {
        const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(productCode)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
        detailOrderBtn.href = whatsappLink;
        
        // Also add onclick event as backup
        detailOrderBtn.onclick = function(e) {
            e.preventDefault();
            window.open(whatsappLink, '_blank');
        };
        
        console.log('WhatsApp link updated:', whatsappLink);
    } else {
        console.error('Detail order button not found');
    }
    
    // Scroll to top
    productDetailSection.scrollIntoView({ behavior: 'smooth' });
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Search functionality
let keywordsData = [];

// Embedded keywords data as fallback
const embeddedKeywordsData = [
    {"urun_kodu": "1001", "anahtar_kelimeler": ["sünnet", "davetiye", "erkek", "çocuk", "mavi", "modern", "şık"]},
    {"urun_kodu": "1002", "anahtar_kelimeler": ["sünnet", "davetiye", "klasik", "geleneksel", "beyaz", "altın", "elegant"]},
    {"urun_kodu": "1003", "anahtar_kelimeler": ["sünnet", "davetiye", "renkli", "eğlenceli", "çocuk", "modern", "neşeli"]},
    {"urun_kodu": "1004", "anahtar_kelimeler": ["sünnet", "davetiye", "premium", "lüks", "özel", "altın", "şık"]},
    {"urun_kodu": "1005", "anahtar_kelimeler": ["sünnet", "davetiye", "minimalist", "sade", "modern", "beyaz", "temiz"]},
    {"urun_kodu": "1006", "anahtar_kelimeler": ["sünnet", "davetiye", "çiçekli", "doğal", "yeşil", "elegant", "şık"]},
    {"urun_kodu": "1007", "anahtar_kelimeler": ["sünnet", "davetiye", "özel", "tasarım", "lüks", "premium", "altın"]},
    {"urun_kodu": "1008", "anahtar_kelimeler": ["sünnet", "davetiye", "modern", "geometrik", "çağdaş", "şık", "mavi"]},
    {"urun_kodu": "1009", "anahtar_kelimeler": ["sünnet", "davetiye", "lüks", "premium", "özel", "altın", "elegant"]}
];

// Load keywords data
async function loadKeywordsData() {
    // First use embedded data immediately
    keywordsData = embeddedKeywordsData;
    console.log('Using embedded keywords data:', keywordsData.length, 'products');
    generatePopularKeywords();
    
    // Then try to load from file to get full data
    try {
        console.log('Attempting to load full keywords data...');
        const response = await fetch('./anahtar_kelimeler.json');
        if (response.ok) {
            const data = await response.json();
            keywordsData = data;
            console.log('Full keywords data loaded successfully:', keywordsData.length, 'products');
            generatePopularKeywords();
        }
    } catch (error) {
        console.log('Could not load full keywords data, using embedded data:', error.message);
    }
}

// Show default suggestions if data loading fails
function showDefaultSuggestions() {
    const defaultKeywords = ['sünnet', 'davetiye', 'modern', 'şık', 'elegant', 'lüks', 'premium', 'altın'];
    const suggestionsList = document.getElementById('suggestions-list');
    if (suggestionsList) {
        suggestionsList.innerHTML = defaultKeywords
            .map(keyword => `<span class="suggestion-tag" onclick="searchProductsGlobal('${keyword}')">${keyword}</span>`)
            .join('');
    }
}

// Generate popular keywords from the data
function generatePopularKeywords() {
    const keywordCount = {};
    
    // Count all keywords
    keywordsData.forEach(product => {
        product.anahtar_kelimeler.forEach(keyword => {
            keywordCount[keyword] = (keywordCount[keyword] || 0) + 1;
        });
    });
    
    // Sort by frequency and get top 12
    const popularKeywords = Object.entries(keywordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12)
        .map(([keyword]) => keyword);
    
    console.log('Popular keywords:', popularKeywords);
    
    // Display in suggestions
    const suggestionsList = document.getElementById('suggestions-list');
    if (suggestionsList) {
        suggestionsList.innerHTML = popularKeywords
            .map(keyword => `<span class="suggestion-tag" onclick="searchProductsGlobal('${keyword}')">${keyword}</span>`)
            .join('');
    }
}

// Initialize search functionality
function initializeSearch() {
    console.log('Initializing search functionality...');
    
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchSuggestions = document.getElementById('search-suggestions');
    
    console.log('Search elements found:', {
        searchInput: !!searchInput,
        searchBtn: !!searchBtn,
        searchSuggestions: !!searchSuggestions
    });
    
    if (!searchInput || !searchBtn || !searchSuggestions) {
        console.error('Search elements not found');
        return;
    }
    
    // Show suggestions on focus
    searchInput.addEventListener('focus', (e) => {
        console.log('Search input focused');
        searchSuggestions.style.display = 'block';
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchSuggestions.style.display = 'none';
        }
    });
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        console.log('Key pressed:', e.key);
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            console.log('Enter pressed, query:', query);
            if (query) {
                searchProductsInternal(query);
                searchSuggestions.style.display = 'none';
            }
        }
    });
    
    // Search on button click
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        console.log('Search button clicked, query:', query);
        if (query) {
            searchProductsInternal(query);
            searchSuggestions.style.display = 'none';
        }
    });
    
    console.log('Search functionality initialized successfully');
}

// Global search function for onclick events
function searchProductsGlobal(query) {
    console.log('Global search called for:', query);
    searchProductsInternal(query);
}

// Search products function
function searchProductsInternal(query) {
    console.log('Searching for:', query);
    
    if (!keywordsData || keywordsData.length === 0) {
        console.error('Keywords data not available');
        showNoResults(query);
        return;
    }
    
    const searchQuery = query.toLowerCase().trim();
    const matchedProducts = [];
    
    console.log('Searching in', keywordsData.length, 'products for:', searchQuery);
    
    // Search in keywords and product codes
    keywordsData.forEach(product => {
        const productCode = product.urun_kodu.toLowerCase();
        const keywords = product.anahtar_kelimeler.map(k => k.toLowerCase());
        
        // Check if query matches product code or any keyword
        if (productCode.includes(searchQuery) || 
            keywords.some(keyword => keyword.includes(searchQuery))) {
            
            console.log('Match found:', product.urun_kodu);
            
            // Find the actual product data
            const productData = findProductInData(product.urun_kodu);
            if (productData) {
                matchedProducts.push({
                    ...productData,
                    keywords: product.anahtar_kelimeler
                });
            }
        }
    });
    
    console.log('Total matched products:', matchedProducts.length);
    
    if (matchedProducts.length > 0) {
        showSearchResults(matchedProducts, query);
    } else {
        showNoResults(query);
    }
    
    // Clear search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = '';
    }
}

// Find product in products data
function findProductInData(productCode) {
    for (const category of productsData) {
        const product = category.urunler.find(p => p.urun_kodu === productCode);
        if (product) {
            return {
                ...product,
                kategori: category.kategori
            };
        }
    }
    return null;
}

// Show search results
function showSearchResults(products, query) {
    console.log('Showing search results for:', query);
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Update title
    if (productsTitle) {
        productsTitle.textContent = `"${query}" için ${products.length} sonuç bulundu`;
    }
    
    // Clear and populate products grid
    if (productsGrid) {
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = createSearchProductCard(product);
            productsGrid.appendChild(productCard);
        });
    }
    
    // Scroll to products section
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Create search product card (with keywords)
function createSearchProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(product.urun_kodu)}+kodlu+davetiyenizle+ilgileniyorum!+Bilgi+alabilir+miyim?`;
    
    // Keywords display
    const keywordsHtml = product.keywords ? 
        `<div class="product-keywords">
            ${product.keywords.slice(0, 4).map(keyword => 
                `<span class="keyword-tag">${keyword}</span>`
            ).join('')}
        </div>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.urun_kodu.startsWith('80') ? `yenifotolar/${product.urun_kodu}.jpg` : `fotos/${product.urun_kodu}.jpg`}" 
                 alt="Ürün ${product.urun_kodu}" 
                 onerror="this.onerror=null; this.src='${product.urun_kodu.startsWith('80') ? `fotos/${product.urun_kodu}.jpg` : `yenifotolar/${product.urun_kodu}.jpg`}'; this.onerror=function(){this.src='https://via.placeholder.com/300x300?text=Ürün+${product.urun_kodu}'};"
            <div class="product-overlay">
                <button class="detail-btn" onclick="showProductDetail('${product.urun_kodu}', '${product.fiyat.replace(/'/g, "\\'")}')">
                    <i class="fas fa-eye"></i> Detayları Gör
                </button>
                <a href="${whatsappLink}" target="_blank" class="order-btn">
                    <i class="fab fa-whatsapp"></i> Hemen Sipariş Ver
                </a>
            </div>
        </div>
        <div class="product-info">
            <div class="product-code">Ürün Kodu: ${product.urun_kodu}</div>
            <div class="product-price">${product.fiyat}</div>
            ${keywordsHtml}
        </div>
    `;
    
    return card;
}

// Show no results
function showNoResults(query) {
    console.log('No results found for:', query);
    
    // Hide other sections
    if (catalogSection) catalogSection.style.display = 'none';
    if (productDetailSection) productDetailSection.style.display = 'none';
    if (productsSection) productsSection.style.display = 'block';
    
    // Hide main page sections
    const mainPageSections = document.querySelectorAll('.main-page-only');
    mainPageSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Update title and show no results message
    if (productsTitle) {
        productsTitle.textContent = `"${query}" için sonuç bulunamadı`;
    }
    
    if (productsGrid) {
        productsGrid.innerHTML = `
            <div style="text-align: center; padding: 3rem; grid-column: 1 / -1;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: #666; margin-bottom: 1rem;">Aradığınız kriterlere uygun ürün bulunamadı</h3>
                <p style="color: #999; margin-bottom: 2rem;">Farklı anahtar kelimeler deneyebilir veya ürün kodunu kontrol edebilirsiniz.</p>
                <button class="btn btn-primary" onclick="showCatalog()">Tüm Ürünleri Görüntüle</button>
            </div>
        `;
    }
    
    // Scroll to products section
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}


// Mobile optimizations
function initializeMobileOptimizations() {
    // Touch event support for menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        // Add touch support
        menuToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });

        // Add keyboard support
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Improve touch scrolling
    document.body.style.webkitOverflowScrolling = 'touch';

    // Prevent zoom on input focus (iOS)
    const inputs = document.querySelectorAll('input[type="text"], input[type="search"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                }
            }
        });

        input.addEventListener('blur', function() {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
                }
            }
        });
    });



    // Optimize images for mobile
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
    });

    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn, .product-card');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });

        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }, { passive: true });

        button.addEventListener('touchcancel', function() {
            this.style.transform = '';
        }, { passive: true });
    });

    // Improve dropdown menu for mobile
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu) {
        // Close menu on swipe up
        let menuStartY = 0;
        dropdownMenu.addEventListener('touchstart', function(e) {
            menuStartY = e.touches[0].clientY;
        }, { passive: true });

        dropdownMenu.addEventListener('touchend', function(e) {
            const endY = e.changedTouches[0].clientY;
            const diffY = menuStartY - endY;

            if (diffY > 100) { // Swipe up to close
                this.classList.remove('active');
                // Close all submenus
                document.querySelectorAll('.has-submenu.active').forEach(function(activeLink) {
                    activeLink.classList.remove('active');
                    const submenu = activeLink.parentElement.querySelector('.submenu');
                    if (submenu) {
                        submenu.classList.remove('active');
                    }
                });
            }
        }, { passive: true });
    }

    // Add orientation change handler
    window.addEventListener('orientationchange', function() {

    });

    // Improve search suggestions for mobile
    const searchSuggestions = document.getElementById('search-suggestions');
    if (searchSuggestions) {
        // Close suggestions on scroll
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (window.innerWidth < 768) {
                    searchSuggestions.style.display = 'none';
                }
            }, 100);
        }, { passive: true });
    }
}



// Performance optimizations
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 16); // ~60fps
    }, { passive: true });

    // Lazy load images when they come into view
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize splash screen
function initializeSplashScreen() {
    // === PARTİKÜL SİSTEMİ ===
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.setProperty('--drift', `${(Math.random() - 0.5) * 200}px`);
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${15 + Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }

    // === YILDIZ TOZLARI SİSTEMİ ===
    const stardustContainer = document.getElementById('stardust');
    if (stardustContainer) {
        const starCount = 50;
        const starSymbols = ['✦', '✧', '⋆', '✩', '✪'];

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.animationDuration = `${2 + Math.random() * 2}s`;
            stardustContainer.appendChild(star);
        }
    }

    // === PERFORMANS OPTİMİZASYONU ===
    let frameCount = 0;
    let lastTime = performance.now();
    
    function checkPerformance() {
        frameCount++;
        const currentTime = performance.now();
        const elapsed = currentTime - lastTime;
        
        if (elapsed >= 1000) {
            const fps = Math.round((frameCount * 1000) / elapsed);
            
            // 30 FPS altındaysa partikül sayısını azalt
            if (fps < 30) {
                const particles = document.querySelectorAll('.particle');
                particles.forEach((p, i) => {
                    if (i > particleCount / 2) p.remove();
                });
            }
            
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(checkPerformance);
    }
    
    requestAnimationFrame(checkPerformance);
}

// Initialize showcase gallery
function initializeShowcaseGallery() {
    const galleryGrid = document.getElementById('showcase-gallery-grid');
    if (!galleryGrid) return;
    
    // Get Sunnet category products
    const sunnetCategory = productsData.find(cat => cat.kategori === 'Sunnet');
    if (!sunnetCategory || !sunnetCategory.urunler) return;
    
    // Shuffle and get random 6 products
    const shuffledProducts = [...sunnetCategory.urunler].sort(() => Math.random() - 0.5);
    const selectedProducts = shuffledProducts.slice(0, 6);
    
    // Create gallery items
    selectedProducts.forEach((product, index) => {
        const galleryItem = createGalleryItem(product, index);
        galleryGrid.appendChild(galleryItem);
    });
}

// Create gallery item
function createGalleryItem(product, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/905315244000?text=Merhaba,+${encodeURIComponent(product.urun_kodu)}+kodlu+sünnet+davetiyesi+hakkında+bilgi+almak+istiyorum!`;
    
    // Determine image path - check if it's a new product (80xxx series)
    const isNewProduct = product.urun_kodu.startsWith('80');
    const imagePath = isNewProduct ? `yenifotolar/${product.urun_kodu}.jpg` : `fotos/${product.urun_kodu}.jpg`;
    const fallbackPath = isNewProduct ? `fotos/${product.urun_kodu}.jpg` : `yenifotolar/${product.urun_kodu}.jpg`;
    
    item.innerHTML = `
        <img src="${imagePath}" 
             alt="Sünnet Davetiyesi ${product.urun_kodu}" 
             onerror="this.onerror=null; this.src='${fallbackPath}'; this.onerror=function(){this.src='https://via.placeholder.com/200x280/0F204C/D4AF37?text=Sünnet+Davetiyesi+${product.urun_kodu}'};">
        <div class="gallery-item-overlay">
            <div class="gallery-item-info">
                <div class="gallery-item-code">${product.urun_kodu}</div>
                <div class="gallery-item-price">${product.fiyat}</div>
            </div>
        </div>
    `;
    
    // Add click event to show product detail
    item.addEventListener('click', () => {
        showProductDetail(product.urun_kodu, product.fiyat);
    });
    
    return item;
}

// Scroll to showcase function
function scrollToShowcase() {
    const showcaseSection = document.getElementById('showcase-gallery');
    if (showcaseSection) {
        showcaseSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Mouse Trail Effect
class MouseTrailEffect {
    constructor() {
        this.trails = [];
        this.maxTrails = 15;
        this.cursor = null;
        this.init();
    }

    init() {
        // Only initialize on desktop
        if (window.innerWidth <= 768) return;

        // Create custom cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        document.body.appendChild(this.cursor);

        // Mouse move event
        document.addEventListener('mousemove', (e) => {
            this.updateCursor(e);
            this.createTrail(e);
        });

        // Mouse click events
        document.addEventListener('mousedown', () => {
            if (this.cursor) this.cursor.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            if (this.cursor) this.cursor.classList.remove('clicking');
        });

        // Clean up trails periodically
        setInterval(() => this.cleanupTrails(), 100);
    }

    updateCursor(e) {
        if (!this.cursor) return;
        
        this.cursor.style.left = e.clientX - 10 + 'px';
        this.cursor.style.top = e.clientY - 10 + 'px';
    }

    createTrail(e) {
        // Limit trail creation frequency
        if (Math.random() > 0.7) return;

        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX - 4 + 'px';
        trail.style.top = e.clientY - 4 + 'px';
        
        // Add some randomness to position
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        trail.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        document.body.appendChild(trail);
        this.trails.push(trail);

        // Remove trail after animation
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
            this.trails = this.trails.filter(t => t !== trail);
        }, 800);

        // Limit number of trails
        if (this.trails.length > this.maxTrails) {
            const oldTrail = this.trails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    }

    cleanupTrails() {
        this.trails = this.trails.filter(trail => {
            if (!trail.parentNode) {
                return false;
            }
            return true;
        });
    }
}

// Initialize mouse trail effect
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure everything is loaded
    setTimeout(() => {
        new MouseTrailEffect();
    }, 500);
});