function moveNoBtn() {
  const noBtn = document.getElementById('noBtn');
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 150) - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function startLoveMeter() {
  document.getElementById('questionCard').classList.add('hidden');
  document.getElementById('meterCard').classList.remove('hidden');

  let animationObj = { value: 0 };
  const targetValue = 1000;

  const display = document.getElementById('meterDisplay');
  const fill = document.getElementById('progressFill');
  const statusText = document.getElementById('statusText');

  gsap.to(animationObj, {
    value: targetValue,
    duration: 5,
    ease: 'power1.out',
    onUpdate: () => {
      let currentVal = Math.floor(animationObj.value);
      display.innerText = currentVal + '%';
      
      let percentWidth = (currentVal / 1000) * 100;
      fill.style.width = percentWidth + '%';

      if (currentVal > 700) {
        statusText.innerText = "OVERFLOWING WITH LOVE! 1000% 💖";
      } else if (currentVal > 400) {
        statusText.innerText = "Almost maximum capacity! 🎀✨";
      } else if (currentVal > 150) {
        statusText.innerText = "It's growing fast! 💕";
      }

      gsap.fromTo('#meterDisplay', { scale: 1.05 }, { scale: 1, duration: 0.1 });
    },
    onComplete: () => {
      setTimeout(() => {
        document.getElementById('meterCard').classList.add('hidden');
        document.getElementById('letterCard').classList.remove('hidden');
      }, 1000);
    }
  });
}

function openEnvelope() {
  document.getElementById('envelopeBox').classList.add('open');
}

function closeEnvelope() {
  document.getElementById('envelopeBox').classList.remove('open');
}
