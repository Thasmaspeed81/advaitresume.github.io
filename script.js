function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const roles = ["Data Scientist 🚀", "AI Developer 🤖", "Problem Solver 💡"];
let i = 0, j = 0, text = '', deleting = false;

function type() {
  document.getElementById('typing').textContent = text;
  if (!deleting && j < roles[i].length) {
    text += roles[i][j++];
  } else if (deleting && j > 0) {
    text = text.slice(0, --j);
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % roles.length;
  }
  setTimeout(type, deleting ? 50 : 100);
}

type();
