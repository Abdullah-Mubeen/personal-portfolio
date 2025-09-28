// Enhanced theme toggle with smooth transitions
        function toggleTheme() {
            const body = document.body;
            const toggle = document.querySelector('.theme-toggle');
            
            // Add click animation
            toggle.style.transform = 'scale(0.95)';
            setTimeout(() => {
                toggle.style.transform = 'scale(1)';
            }, 150);
            
            // Toggle theme
            if (body.hasAttribute('data-theme')) {
                body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }

        // Load saved theme on page load
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                document.body.setAttribute('data-theme', 'light');
            }
            createNeuralNetwork();
            initializeEnhancements();
        });

        // Enhanced neural network with better performance
        function createNeuralNetwork() {
            const bg = document.getElementById('neural-bg');
            bg.innerHTML = ''; // Clear existing nodes
            const nodes = [];
            const nodeCount = window.innerWidth > 768 ? 25 : 15;

            // Create nodes with better distribution
            for (let i = 0; i < nodeCount; i++) {
                const node = document.createElement('div');
                node.className = 'node';
                
                // Better positioning algorithm
                const x = (Math.random() * 80) + 10; // Keep away from edges
                const y = (Math.random() * 80) + 10;
                
                node.style.left = x + '%';
                node.style.top = y + '%';
                node.style.animationDelay = Math.random() * 4 + 's';
                node.style.animationDuration = (3 + Math.random() * 2) + 's';
                
                bg.appendChild(node);
                nodes.push({
                    element: node,
                    x: x,
                    y: y
                });
            }

            // Create smarter connections
            nodes.forEach((nodeA, i) => {
                let connectionCount = 0;
                nodes.forEach((nodeB, j) => {
                    if (i !== j && connectionCount < 3) { // Limit connections per node
                        const distance = Math.sqrt(
                            Math.pow(nodeA.x - nodeB.x, 2) + 
                            Math.pow(nodeA.y - nodeB.y, 2)
                        );
                        
                        if (distance < 25) { // Reduced connection distance
                            const connection = document.createElement('div');
                            connection.className = 'connection';
                            connection.style.left = nodeA.x + '%';
                            connection.style.top = nodeA.y + '%';
                            connection.style.width = distance + 'vw';
                            
                            const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
                            connection.style.transform = `rotate(${angle}rad)`;
                            connection.style.animationDelay = Math.random() * 2 + 's';
                            
                            bg.appendChild(connection);
                            connectionCount++;
                        }
                    }
                });
            });
        }

        // Initialize additional enhancements
        function initializeEnhancements() {
            // Add floating effect to stats
            document.querySelectorAll('.stat-item').forEach((stat, index) => {
                stat.style.animationDelay = (index * 0.2) + 's';
                stat.addEventListener('mouseenter', () => {
                    stat.style.transform = 'translateY(-10px) scale(1.05)';
                });
                stat.addEventListener('mouseleave', () => {
                    stat.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Enhanced skill cell interactions
            document.querySelectorAll('.skill-cell').forEach(cell => {
                cell.addEventListener('mouseenter', () => {
                    cell.style.transform = 'scale(1.02)';
                    cell.style.zIndex = '10';
                });
                cell.addEventListener('mouseleave', () => {
                    cell.style.transform = 'scale(1)';
                    cell.style.zIndex = '1';
                });
            });

            // Project card enhancements
            document.querySelectorAll('.project').forEach((project, index) => {
                project.addEventListener('mouseenter', () => {
                    project.style.transform = 'translateX(20px)';
                    project.style.backgroundColor = 'var(--surface)';
                });
                project.addEventListener('mouseleave', () => {
                    project.style.transform = 'translateX(0)';
                    project.style.backgroundColor = 'transparent';
                });
            });
        }

        // Custom cursor
        const cursor = document.querySelector('.cursor');
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        function updateCursor() {
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        // Neural network background
        function createNeuralNetwork() {
            const bg = document.getElementById('neural-bg');
            const nodes = [];
            const nodeCount = 20;

            // Create nodes
            for (let i = 0; i < nodeCount; i++) {
                const node = document.createElement('div');
                node.className = 'node';
                node.style.left = Math.random() * 100 + '%';
                node.style.top = Math.random() * 100 + '%';
                node.style.animationDelay = Math.random() * 4 + 's';
                bg.appendChild(node);
                nodes.push({
                    element: node,
                    x: parseFloat(node.style.left),
                    y: parseFloat(node.style.top)
                });
            }

            // Create connections
            nodes.forEach((nodeA, i) => {
                nodes.forEach((nodeB, j) => {
                    if (i !== j) {
                        const distance = Math.sqrt(
                            Math.pow(nodeA.x - nodeB.x, 2) + 
                            Math.pow(nodeA.y - nodeB.y, 2)
                        );
                        
                        if (distance < 30) {
                            const connection = document.createElement('div');
                            connection.className = 'connection';
                            connection.style.left = nodeA.x + '%';
                            connection.style.top = nodeA.y + '%';
                            connection.style.width = distance + 'vw';
                            connection.style.transform = `rotate(${Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x)}rad)`;
                            bg.appendChild(connection);
                        }
                    }
                });
            });
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(item.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.skill-cell, .project, .contact-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            // Theme is already handled in the enhanced function above
        });

        // Parallax effect for section numbers
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.section-number').forEach(num => {
                const rate = scrolled * 0.5;
                num.style.transform = `translateY(${rate}px)`;
            });
        });

        // Scroll to top functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});