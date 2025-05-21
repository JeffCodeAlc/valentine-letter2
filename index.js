        const question = document.getElementById('question');
        const cardContainer = document.getElementById('cardContainer');
        const card = document.getElementById('card');
        const sadMessage = document.getElementById('sadMessage');
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        
        // Colors for animated background
        const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#ffecd2', '#fcb69f'];
        let colorIndex = 0;
        
        // Change background colors
        function changeBackground() {
            document.body.style.background = `linear-gradient(135deg, ${colors[colorIndex]} 0%, ${colors[(colorIndex + 1) % colors.length]} 100%)`;
            colorIndex = (colorIndex + 1) % colors.length;
            setTimeout(changeBackground, 3000);
        }
        
        // Show letter
        yesBtn.addEventListener('click', function() {
            question.classList.add('hidden');
            cardContainer.classList.remove('hidden');
            
            // Activate letter animation after a short delay
            setTimeout(() => {
                card.classList.add('active');
                changeBackground();
                createConfetti();
                
                // Load Tenor script for GIFs
                loadTenorScript();
            }, 100);
        });
        
        // "Not now" option
        noBtn.addEventListener('click', function() {
            question.classList.add('hidden');
            sadMessage.classList.remove('hidden');
            sadMessage.classList.add('fade-in');
            
            // Broken heart effect
            setTimeout(() => {
                createBrokenEffect();
                // Load Tenor script for GIFs
                loadTenorScript();
            }, 500);
        });
        
        // Open letter
        function openCard() {
            if (card.classList.contains('active')) {
                card.classList.add('open');
                createConfetti();
            }
        }
        
        // Reset everything
        function resetCard() {
            question.classList.remove('hidden');
            cardContainer.classList.add('hidden');
            sadMessage.classList.add('hidden');
            card.classList.remove('active', 'open');
            sadMessage.classList.remove('fade-in');
        }
        
        // Load Tenor script for GIFs
        function loadTenorScript() {
            const script = document.createElement('script');
            script.src = 'https://tenor.com/embed.js';
            document.body.appendChild(script);
        }
        
        // Create confetti effect
        function createConfetti() {
            const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ff00ff', '#ff6347'];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = -20 + 'px';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                document.body.appendChild(confetti);
                
                // Animation
                const animation = confetti.animate([
                    { top: -20 + 'px', opacity: 1 },
                    { top: window.innerHeight + 'px', opacity: 0 }
                ], {
                    duration: 2000 + Math.random() * 3000,
                    easing: 'cubic-bezier(0.1, 0.2, 0.8, 1)'
                });
                
                animation.onfinish = () => confetti.remove();
            }
        }
        
        // Broken heart effect
        function createBrokenEffect() {
            for (let i = 0; i < 20; i++) {
                const piece = document.createElement('div');
                piece.innerHTML = '❤️';
                piece.style.position = 'absolute';
                piece.style.left = window.innerWidth/2 + 'px';
                piece.style.top = window.innerHeight/2 + 'px';
                piece.style.fontSize = (20 + Math.random() * 30) + 'px';
                piece.style.opacity = 1;
                piece.style.transform = `rotate(${Math.random() * 360}deg)`;
                document.body.appendChild(piece);
                
                // Animation
                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 100;
                const duration = 1000 + Math.random() * 1000;
                
                piece.animate([
                    { 
                        left: window.innerWidth/2 + 'px',
                        top: window.innerHeight/2 + 'px',
                        opacity: 1 
                    },
                    { 
                        left: window.innerWidth/2 + Math.cos(angle) * distance + 'px',
                        top: window.innerHeight/2 + Math.sin(angle) * distance + 'px',
                        opacity: 0 
                    }
                ], {
                    duration: duration,
                    easing: 'ease-out'
                });
                
                setTimeout(() => piece.remove(), duration);
            }
        }
        
        // Load Tenor script at start for first GIF
        loadTenorScript();