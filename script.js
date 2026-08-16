function startLoveMeter() {
  let animationObj = { value: 0 };
  // ၁၀၀% မှ ၁၀၀၀% အထိ Random တွက်ပေးခြင်း
  const targetValue = Math.floor(Math.random() * 900) + 100;

  const display = document.getElementById('meterDisplay');
  const fill = document.getElementById('progressFill');

  gsap.to(animationObj, {
    value: targetValue,
    duration: 3,
    ease: 'power1.out',
    onUpdate: () => {
      let currentVal = Math.floor(animationObj.value);
      display.innerText = currentVal + '%';
      
      // Progress bar ကို အချိုးကျ တိုးစေခြင်း
      let percentWidth = (currentVal / 1000) * 100;
      fill.style.width = percentWidth + '%';

      // စာသား တုန်သွားအောင် Animation ထည့်ခြင်း
      gsap.fromTo('#meterDisplay', { scale: 1.08 }, { scale: 1, duration: 0.1 });
    }
  });
}