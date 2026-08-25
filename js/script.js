// ============ PRODUCTOS DE MUESTRA ============
const productos = [
  { id: 1,  nombre: "Vestido Floral Elegante",   precio: 45.99, categoria: "vestidos",    tag: "Nuevo",    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80" },
  { id: 2,  nombre: "Vestido Largo de Verano",   precio: 52.00, categoria: "vestidos",    tag: "",         img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80" },
  { id: 3,  nombre: "Vestido Negro de Fiesta",   precio: 68.50, categoria: "vestidos",    tag: "Top",      img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80" },
  { id: 4,  nombre: "Blusa Seda Champán",        precio: 28.99, categoria: "blusas",      tag: "",         img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&q=80" },
  { id: 5,  nombre: "Blusa Blanca Clásica",      precio: 24.50, categoria: "blusas",      tag: "Oferta",   img: "img/blusa-blanca.jpg" },
  { id: 6,  nombre: "Blusa Manga Abullonada",    precio: 31.00, categoria: "blusas",      tag: "",         img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&q=80" },
  { id: 7,  nombre: "Pantalón Palazzo Negro",    precio: 38.00, categoria: "pantalones",  tag: "",         img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&q=80" },
  { id: 8,  nombre: "Jeans Ajuste Perfecto",     precio: 42.99, categoria: "pantalones",  tag: "Top",      img: "img/jeans.jpg" },
  { id: 9,  nombre: "Pantalón Tela Lino",        precio: 35.50, categoria: "pantalones",  tag: "",         img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=500&q=80" },
  { id: 10, nombre: "Bolso Cuero Elegante",      precio: 49.99, categoria: "accesorios",  tag: "Nuevo",    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80" },
  { id: 11, nombre: "Aretes Dorados Premium",    precio: 15.00, categoria: "accesorios",  tag: "",         img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80" },
  { id: 12, nombre: "Cinturón Hebilla Dorada",   precio: 12.99, categoria: "accesorios",  tag: "Oferta",   img: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80" },
];

// ============ MOSTRAR PRODUCTOS ============
const grid = document.getElementById("productsGrid");

function mostrarProductos(filtro = "todos") {
  grid.innerHTML = "";
  productos
    .filter(p => filtro === "todos" || p.categoria === filtro)
    .forEach(p => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <div class="product-img">
          ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
          <img src="${p.img}" alt="${p.nombre}" loading="lazy">
        </div>
        <div class="product-info">
          <span class="product-category">${p.categoria}</span>
          <h3 class="product-name">${p.nombre}</h3>
          <span class="product-price">$${p.precio.toFixed(2)}</span>
          <button class="btn-add" data-id="${p.id}">Agregar al carrito 🛒</button>
        </div>`;
      grid.appendChild(card);
    });
}

mostrarProductos();

// ============ FILTROS ============
document.getElementById("filters").addEventListener("click", e => {
  if (!e.target.classList.contains("filter-btn")) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  mostrarProductos(e.target.dataset.filter);
});

// ============ CARRITO (contador) ============
let carrito = 0;
const cartCount = document.getElementById("cartCount");

grid.addEventListener("click", e => {
  if (!e.target.classList.contains("btn-add")) return;
  carrito++;
  cartCount.textContent = carrito;
  const btn = e.target;
  btn.textContent = "¡Agregado! ✔";
  setTimeout(() => (btn.textContent = "Agregar al carrito 🛒"), 1200);
});

// ============ MENÚ MÓVIL ============
const nav = document.getElementById("nav");
document.getElementById("btnMenu").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// ============ FORMULARIO DE CONTACTO ============
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("¡Gracias por tu mensaje! Te responderemos muy pronto. 💖");
  e.target.reset();
});
