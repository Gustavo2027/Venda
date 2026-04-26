// DESENVOLVIDO POR GUSTAVO SILVANO const SVGS = { 'chef-hat': ` `, 'heart': 
``, 'glass': ``, 'beer': ``, 'wine': ``, 'food': ``, 'coffee': `` }; const MENU_DATA = [ { 
type: 'cover', title: 'MENU BAR', subtitle: 'AFPESP' }, { type: 'image', url: 
'https://images.unsplash.com/photo-1514362545857 
3bc16c4c7d1b?q=80&w=1000', caption: 'Bebidas Selecionadas' }, { type: 'content', 
sections: [ { title: 'Doses', icon: 'glass', items: [ { n: 'Pinga_51', p: '4,00' }, { n: 
'Velho_Barreiro', p: '4,00' }, { n: 'Sagatiba', p: '5,00' }, { n: 'Saquê', p: '6,00' }, { n: 
'Vodka_Caipiroska', p: '5,00' }, { n: 'Campari', p: '7,00' } ] }, { title: 'Caipirinhas', icon: 
'glass', items: [ { n: 'Pinga 51', p: '20,00' }, { n: 'Velho_Barreiro', p: '15,00' }, { n: 
'Sagatiba', p: '25,00' }, { n: 'Saquê', p: '18,00' }, { n: 'Vodka(Caipiroska)', p: '25' } ] } ] }, { 
type: 'image', url: 'https://images.unsplash.com/photo-1535958636474 
b021ee887b13?q=80&w=1000', caption: 'Cervejas e Chopp' }, { type: 'content', 
sections: [ { title: 'Cervejas', icon: 'beer', items: [ { n: 'Skol', p: '7,00' }, { n: 'Brahma', 
p: '7,00' }, { n: 'Brahma_Malzbier', p: '9,00' }, { n: 'Heineken', p: '10,00' }, { n: 
'Heineken(zero)', p: '10,00' } ] }, { title: 'Chopp', icon: 'beer', items: [ { n: 
'Claro_330ml', p: '9,00' }, { n: 'Claro_500ml', p: '13,50' }, { n: 'Escuro_Garrafa(1L)', p: 
'30,00' } ] } ] }, { type: 'image', url: 'https://images.unsplash.com/photo
1510812431401 41d2bd2722f3?q=80&w=1000', caption: 'Vinhos e Momentos' }, { 
type: 'content', sections: [ { title: 'Vinhos', icon: 'wine', items: [ { n: 'Tinto_Seco', p: 
'8,00' }, { n: 'Tinto_Suave', p: '8,00' }, { n: 'Concha_Toro', p: '50,00' }, { n: 'Periquita', p: 
'90,00' }, { n: 'Santa_Helena', p: '52,00' } ] } ] }, { type: 'image', url: 
'https://images.unsplash.com/photo-1551024709 8f23befc6f87?q=80&w=1000', 
caption: 'Bebidas Geladas' }, { type: 'content', sections: [ { title: 'Não Alcoólicas', 
icon: 'glass', items: [ { n: 'Água_com_gás', p: '5,00' }, { n: 'Água_sem_gás', p: '5,00' }, { 
n: 'Coca_Cola', p: '7,00' }, { n: 'Coca_Cola(Zero)', p: '7,00' }, { n: 'Guaraná', p: '6,00' }, 
{ n: 'Guaraná(Zero)', p: '6,00' }, { n: 'Schweppes', p: '7,00' }, { n: 'Água_tônica', p: 
'6,00' }, { n: 'H2O_Limão', p: '7,00' }, { n: 'Pacote_Gelo(3kg)', p: '6,00' }, { n: 'Pacote de 
Gelo 3kg', p: '6,00' }, { n: 'Pacote de Gelo 3kg', p: '6,00' }, { n: 'Pacote de Gelo 3kg', p: 
'6,00' }, { n: 'Pacote de Gelo 3kg', p: '6,00' }, { n: 'Pacote de Gelo 3kg', p: '6,00' }, { n: 
'Pacote de Gelo 3kg', p: '6,00' } ] } ] }, { type: 'image', url: 
'https://i.ibb.co/HLz8zbFd/Design-sem-nome-24.webp', caption: 'Sucos Naturais' 
}, { type: 'content', sections: [ { title: 'Sucos Naturais', icon: 'glass', items: [ { n: 
'Laranja(Copo)', p: '10,00' }, { n: 'Melancia(Copo)', p: '10,00' }, { n: 'Limão(Jarra)', p: 
'18,00' }, { n: 'Melancia(Jarra)', p: '18,00' } ] }, { title: 'Sucos (Del_Valle)', icon: 'glass', 
items: [ { n: 'Suco_Uva', p: '8,00' }, { n: 'Suco_Pêssego', p: '8,00' } ] } ] }, { type: 'image', 
url: 'https://images.unsplash.com/photo-1495474472287 
4d71bcdd2085?q=80&w=1000', caption: 'Especiais e Lanches' }, { type: 'content', 
sections: [ { title: 'Especiais', icon: 'coffee', items: [ { n: 'Copo_de_Leite', p: '5,00' }, { 
n: 'Café_Expresso Pequeno', p: '5,00' }, { n: 'Especial_Peruíbe_II', p: '8,00' } ] }, { title: 
'Lanches', icon: 'food', items: [ { n: 'Misto_Quente', p: '7,00' }, { n: 'Misto_Frio', p: 
'10,00' }, { n: 'Queijo_Quente', p: '10,00' } ] } ] }, { type: 'image', url: 
'https://i.ibb.co/99h3wM28/porcao-de-camarao-frito.jpg', caption: 'Petiscos e 
Pratos' }, { type: 'content', sections: [ { title: 'Porções', icon: 'food', items: [ { n: 
'Batata_Frita(400g)', p: '20,00' }, { n: 'Camarão(250g)', p: '40,00' }, { n: 
'Isca_Peixe(500g)', p: '45,00' }, { n: 'Calabresa Acebolada_400g', p: '18,00' } ] }, { title: 
'Pratos Extras', icon: 'food', items: [ { n: 'Omelete(Simples)', p: '4,00' }, { n: 
'Ovo(Cozido)', p: '2,00' }, { n: 'Filé_Frango', p: '5,00' }, { n: 'Bife_Grelhado', p: '9,00' } ] } 
] }, { type: 'back', title: 'VOLTE SEMPRE', subtitle: 'Bar AFPESP' } ]; let book; let 
container; let indicator; let startX = 0; let startY = 0; let isScrolling = false; let 
currentSheet = 0; let isAnimating = false; const sheets = []; function initBook() { 
book.innerHTML = ''; sheets.length = 0; for (let i = 0; i < MENU_DATA.length; i += 2) { 
const sheet = document.createElement('div'); sheet.className = 'sheet'; const z = 
Math.floor((MENU_DATA.length - i) / 2); sheet.style.zIndex = z; 
sheet.dataset.originalZ = z; const front = document.createElement('div'); 
front.className = 'face front'; setupFace(front, MENU_DATA[i]); const back = 
document.createElement('div'); back.className = 'face back'; setupFace(back, 
MENU_DATA[i+1]); sheet.appendChild(front); sheet.appendChild(back); 
book.appendChild(sheet); sheets.push(sheet); } updateIndicator(); setTimeout(() 
=> { container.style.opacity = '1'; }, 200); } function setupFace(faceEl, data) { if 
(!data) { faceEl.classList.add('bg-leather'); return; } if (data.type === 'cover' || 
data.type === 'back') { faceEl.classList.add('bg-leather'); const svgKey = data.type 
=== 'cover' ? 'chef-hat' : 'heart'; faceEl.innerHTML = `  
${SVGS[svgKey]} 
${data.title} 
${data.subtitle} 
`; } else if (data.type === 'image') { faceEl.innerHTML = `  
${data.caption} 
`; } else { const content = data.sections.map(s => `  
${SVGS[s.icon] || ''} ${s.title} 
${s.items.map(item => `  
${item.n}  
R$ ${item.p}  
`).join('')}  
`).join(''); faceEl.innerHTML = ` 
${content} 
`; } } // Função para tratar o clique direto no livro function handleBookClick(e) { if 
(isAnimating || isScrolling) return; const rect = container.getBoundingClientRect(); 
const clickX = e.clientX - rect.left; if (clickX < rect.width / 2) { prevPage(); } else { 
nextPage(); } } function nextPage() { if (currentSheet < sheets.length && 
!isAnimating) { isAnimating = true; const sheet = sheets[currentSheet]; 
sheet.classList.add('flipped'); sheet.style.zIndex = 100 + currentSheet; 
currentSheet++; updateIndicator(); setTimeout(() => { isAnimating = false; }, 800); } } 
function prevPage() { if (currentSheet > 0 && !isAnimating) { isAnimating = true; 
currentSheet--; const sheet = sheets[currentSheet]; // z-index alto para a 
animação de retorno ser limpa sheet.style.zIndex = 200; 
sheet.classList.remove('flipped'); updateIndicator(); setTimeout(() => { 
sheet.style.zIndex = sheet.dataset.originalZ; isAnimating = false; }, 800); } } function 
updateIndicator() { indicator.innerText = `${currentSheet + 1} / ${sheets.length}`; } 
document.addEventListener("DOMContentLoaded", () => { book = 
document.getElementById('book'); container = document.getElementById('book
container'); indicator = document.getElementById('page-indicator'); 
container.addEventListener("click", handleBookClick); 
container.addEventListener("touchstart", (e) => { const touch = e.touches[0]; startX 
= touch.clientX; startY = touch.clientY; isScrolling = false; }); 
container.addEventListener("touchmove", (e) => { const touch = e.touches[0]; 
const diffX = Math.abs(touch.clientX - startX); const diffY = Math.abs(touch.clientY - startY); // Se o movimento vertical for maior que o horizontal e maior que um 
pequeno threshold if (diffY > diffX && diffY > 5) { isScrolling = true; } }, { passive: true 
}); container.addEventListener("touchend", () => { setTimeout(() => { isScrolling = 
false; }, 50); }); initBook(); }); window.nextPage = nextPage; window.prevPage = 
prevPage; 
