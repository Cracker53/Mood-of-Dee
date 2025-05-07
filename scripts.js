<script>
    const moodSelector = document.getElementById('moodSelector');
    const toggleMusic = document.getElementById('toggleMusic');
    const moodMessage = document.getElementById('moodMessage');
    const audioPlayer = document.getElementById('audioPlayer');
    const body = document.body;

    const moods = {
      chill: {
        color: ['#0f2027', '#203a43', '#2c5364'],
        music: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3',
        text: "Time to chill and relax 🌙"
      },
      happy: {
        color: ['#f7971e', '#ffd200'],
        music: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
        text: "Feeling happy and bright! ☀️"
      },
      focus: {
        color: ['#283c86', '#45a247'],
        music: 'https://www.bensound.com/bensound-music/bensound-clearday.mp3',
        text: "Focus mode: ON 💡"
      },
      dreamy: {
        color: ['#654ea3', '#eaafc8'],
        music: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
        text: "Floating in a dreamy vibe ✨"
      }
    };

    moodSelector.addEventListener('change', () => {
      const mood = moodSelector.value;
      if (moods[mood]) {
        const gradient = `linear-gradient(135deg, ${moods[mood].color[0]}, ${moods[mood].color[1]})`;
        body.style.background = gradient;
        moodMessage.textContent = moods[mood].text;
        audioPlayer.src = moods[mood].music;
        toggleMusic.disabled = false;
        toggleMusic.textContent = 'Play Music';
        audioPlayer.pause();
      }
    });

    toggleMusic.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
        toggleMusic.textContent = 'Pause Music';
      } else {
        audioPlayer.pause();
        toggleMusic.textContent = 'Play Music';
      }
    });

    // Cool floating particles
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function createParticles() {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5
        });
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();
  </script>
