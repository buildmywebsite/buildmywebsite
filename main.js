const DEMOURL = 'https://demo.buildmywebsite.site'

const pricingFeatures = {
    basicA: [
        'Fully responsive static website with up to 5 beautifully designed pages',
        'Includes 1 design revision and lightning-fast 1-week delivery',
        'Free custom domain + hosting setup and SSL certificate for security',
        'Basic SEO optimization to help your site rank on search engines',
        '1 year free support (Only for minor changes)'
    ],
    basicB: [
        '✨ Perfect for startups, personal brands, small businesses',
        '✨ Designed for speed, clarity, and conversion',
        '✨ Built with clean, scalable code — easy to expand in the future',
    ],
    standardA: [
        'Fully dynamic website with up to 10 feature-rich pages, + Admin panel',
        'Includes 2 design revisions',
        'Ideal for growing businesses needing interactive features',
        'Includes database integration, user authentication, payment gateway, and secure API integration',
    ],
    premiumA: [
        'Highly customized website with up to 20 pages',
        'Includes 3 design revisions',
        'Designed for enterprise-grade businesses and complex systems',
        'Cross-platform compatibility (desktop, mobile, tablet)',
    ]
}

const demoSites = [
    {
        "name": "Photographer Portfolio",
        "url": "https://buildmywebsite.github.io/demo-photographer-portfolio",
        "fname": "photographer.png",
        "description": "A visually striking portfolio website for photographers, built with vanilla HTML and CSS. It showcases high-resolution images, a sleek gallery layout, and responsive design."
    },
    {
        "name": "Salon Website",
        "url": "https://buildmywebsite.github.io/demo-salon",
        "fname": "salon.png",
        "description": "A stylish and functional salon website crafted using vanilla HTML and CSS. It features service listings, booking information, and an elegant design to attract customers."
    },
    {
        "name": "Job Portal",
        "url": "https://jobhuntp.netlify.app",
        "fname": "jobhunt.png",
        "description": "A dynamic job portal application built with latest Angular. It provides users with job postings, filtering capabilities, provides employer with dashboard, and an intuitive user interface for easy navigation."
    },
    {
        "name": "E-commerce",
        "url": "https://demo-ecommerce-bmws.netlify.app",
        "fname": "ecommerce.png",
        "description": "A modern e-commerce platform developed using React. It includes product listings, a shopping cart functionality, and a seamless checkout experience for online shoppers."
    }
]

onload = () => {
    addData();
    addDemoSites();
    smoothScroll();

    const getStartedBtn = document.getElementById('getstarted');
    getStartedBtn.addEventListener('click', () => {
        const email = document.getElementById('getstartedemail')?.value;
        document.getElementById('email').value = email;
    });
    
}

const addData = () => {
    const pricingList = document.getElementById('pricing-listA');
    pricingList.innerHTML = pricingFeatures.basicA
    .map(feature => `
        <div class="text-[13px] font-normal leading-normal flex gap-3 text-white">
            <div class="text-white" data-icon="Check" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                </svg>
            </div>
            ${feature}
        </div>
    `)
    .join('');

    const pricingListB = document.getElementById('pricing-listB');
    pricingListB.innerHTML = pricingFeatures.standardA
    .map(feature => `
        <div class="text-[13px] font-normal leading-normal flex gap-3 text-white">
            <div class="text-white" data-icon="Check" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                </svg>
            </div>
            ${feature}
        </div>
    `)
    .join('');

    const pricingListC = document.getElementById('pricing-listC');
    pricingListC.innerHTML = pricingFeatures.premiumA
    .map(feature => `
        <div class="text-[13px] font-normal leading-normal flex gap-3 text-white">
            <div class="text-white" data-icon="Check" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                </svg>
            </div>
            ${feature}
        </div>
    `)
    .join('');

}

const addDemoSites = () => {
    const demoWork = document.getElementById('demo-work')
    demoWork.innerHTML = demoSites.map(e => `
            <div class="py-2">
                <a href="${DEMOURL}?site=${e.url}" target="_blank">
                    <div class="overflow-hidden">
                    <img class="scale-100 hover:scale-125 transition-transform duration-300 ease-in-out" src="assets/${e.fname}" alt="${e.name}" >
                    </div>
                    <div class="text-white text-[22px] py-2">${e.name}</div>
                    <div class="text-stone-300 text-[12px]">${e.description}</div>
                </a>
            </div>
        `).join('');
}

const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("open");
}


