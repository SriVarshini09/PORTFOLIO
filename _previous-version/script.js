
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("in");
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  ".project-card, .flow-list li, .research-list article, .timeline article, .education-grid article, .about-layout, .archive-list a"
).forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

const orbit = document.querySelector(".orbit");
window.addEventListener("mousemove", (event) => {
  if (!orbit || window.innerWidth < 1000) return;
  const dx = (event.clientX / window.innerWidth - 0.5) * 6;
  const dy = (event.clientY / window.innerHeight - 0.5) * 6;
  orbit.style.transform = `translate(${dx}px, ${dy}px)`;
});
