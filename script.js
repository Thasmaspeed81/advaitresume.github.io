function goToPage(page) {
  window.location.href = page;
}

// typing effect
const text = ["Future Data Scientist 🚀", "AI Enthusiast 🤖", "Problem Solver 💡"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  document.getElementById("typing").textContent = current;

  if (!isDeleting && j < text[i].length) {
    current += text[i][j++];
  } else if (isDeleting && j > 0) {
    current = current.slice(0, --j);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
