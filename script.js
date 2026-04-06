function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Typing animation
const roles = ["Data Scientist 🚀","AI Developer 🤖","Problem Solver 💡"];
let i=0,j=0,text='',del=false;
function type(){
 document.getElementById('typing').textContent=text;
 if(!del && j<roles[i].length) text+=roles[i][j++];
 else if(del && j>0) text=text.slice(0,--j);
 else{del=!del;if(!del)i=(i+1)%roles.length;}
 setTimeout(type,del?50:100);
}
type();

// Scroll reveal
window.addEventListener('scroll',()=>{
 document.querySelectorAll('.reveal').forEach(el=>{
  const top=el.getBoundingClientRect().top;
  if(top<window.innerHeight-100) el.classList.add('active');
 });
});
