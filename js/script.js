// Menu mobile
const menu=document.getElementById('menu'),nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')})}

// Formulaires (démo : pas d'envoi réel)
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{
e.preventDefault();f.reset();const m=f.querySelector('.ok');if(m)m.style.display='block'}));

// Page Filières : onglets par UFR
const UFR={
st:{nom:'Sciences et Techniques',cls:'',f:['Réseaux Informatiques et Télécommunications','Systèmes Informatiques et Logiciels','Systèmes Industriels','Biotechnologie','Génie Électrique et Énergie Renouvelables','Sécurité Informatique','Informatique Industrielle et Maintenance','Froid et Climatisation']},
ag:{nom:'Sciences Agronomiques',cls:'c-agro',f:['Production Animale','Production Végétale','Agro-Économie']},
ju:{nom:'Sciences Juridiques et Politiques',cls:'c-jur',f:['Science Juridique','Communication et Relations Internationales']},
ge:{nom:'Sciences de Gestion',cls:'c-ges',f:['Marketing Communication et Commerce','Finance Comptabilité et Audit','Banque Finance et Assurance','Management des Ressources Humaines','Transport et Logistique','Entrepreneuriat et Gestion de Projets','Marketing Digital','Techniques de Ventes et Négociations']}};
const grid=document.getElementById('filieres'),tabs=document.getElementById('tabs');
if(grid){
const show=k=>{
tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===k));
grid.innerHTML=Object.entries(UFR).filter(([id])=>k==='all'||id===k).flatMap(([,u])=>u.f.map(n=>
`<article class="card ${u.cls}"><h3>${n}</h3><p>${u.nom}</p><small>Licence 3 ans · Master 5 ans</small></article>`)).join('')};
tabs.innerHTML='<button data-k="all">Toutes</button>'+Object.entries(UFR).map(([k,u])=>`<button data-k="${k}">${u.nom}</button>`).join('');
tabs.addEventListener('click',e=>{if(e.target.dataset.k)show(e.target.dataset.k)});
show(location.hash.slice(1) in UFR?location.hash.slice(1):'all')}
