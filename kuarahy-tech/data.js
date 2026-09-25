/* Datos compartidos entre la tienda y el panel. Todo se guarda en este navegador (localStorage):
   es una demo, no hay servidor. En un proyecto real esto vive en una base de datos. */
const KT = (() => {
  const SEED_PRODUCTS = [
    { id: 1, name: 'Celular Nova X12 128 GB', brand: 'Nova', cat: 'Celulares', price: 2190000, old: 0, stock: 4, img: 'img/nova-x12.jpg', desc: 'Pantalla de 6,4", cámara triple de 48 MP y batería para todo el día. Incluye cargador rápido.', sold: 58 },
    { id: 2, name: 'Celular Nova X12 256 GB', brand: 'Nova', cat: 'Celulares', price: 2590000, old: 0, stock: 0, img: 'img/nova-x12.jpg', desc: 'La misma Nova X12, con el doble de espacio para fotos y videos.', sold: 21 },
    { id: 3, name: 'Celular Onda Lite 64 GB', brand: 'Onda', cat: 'Celulares', price: 1290000, old: 1450000, stock: 9, img: 'img/onda-lite.jpg', desc: 'Liviano y rendidor. Ideal como primer celular o para trabajo.', sold: 40 },
    { id: 4, name: 'Auriculares inalámbricos Sonar', brand: 'Sonar', cat: 'Auriculares', price: 390000, old: 0, stock: 12, img: 'img/sonar-inalambricos.jpg', desc: 'Bluetooth 5.3, 30 horas de batería y micrófono para llamadas.', sold: 74 },
    { id: 5, name: 'Auriculares Sonar Studio', brand: 'Sonar', cat: 'Auriculares', price: 780000, old: 890000, stock: 6, img: 'img/sonar-studio.jpg', desc: 'Cancelación de ruido activa, estuche rígido y sonido de estudio.', sold: 33 },
    { id: 6, name: 'Notebook Aura 14" 16 GB', brand: 'Aura', cat: 'Notebooks', price: 5450000, old: 0, stock: 2, img: 'img/aura-14.jpg', desc: 'Procesador de 8 núcleos, 16 GB de RAM y 512 GB SSD. Pesa 1,3 kg.', sold: 12 },
    { id: 7, name: 'Notebook Aura 15" 8 GB', brand: 'Aura', cat: 'Notebooks', price: 3990000, old: 0, stock: 5, img: 'img/aura-14.jpg', desc: 'Pantalla grande para estudiar y trabajar. 8 GB de RAM y 256 GB SSD.', sold: 18 },
    { id: 8, name: 'Reloj inteligente Pulse', brand: 'Pulse', cat: 'Relojes', price: 620000, old: 0, stock: 7, img: 'img/pulse.jpg', desc: 'Pasos, ritmo cardíaco, sueño y notificaciones del celular.', sold: 29 },
    { id: 9, name: 'Reloj Pulse Sport', brand: 'Pulse', cat: 'Relojes', price: 490000, old: 590000, stock: 3, img: 'img/pulse.jpg', desc: 'Resistente al agua y con GPS para correr o andar en bici.', sold: 15 }
  ];
  const today = new Date().toISOString().slice(0, 10);
  const SEED_ORDERS = [
    { n: 1048, name: 'Laura G.', phone: '0981 000 111', items: [{ id: 1, q: 1 }], total: 2190000, pay: 'Tarjeta', ship: 'Retiro en el local', status: 'Pagado', date: today },
    { n: 1047, name: 'Marcos R.', phone: '0982 000 222', items: [{ id: 4, q: 1 }, { id: 8, q: 1 }], total: 1010000, pay: 'Transferencia', ship: 'Envío en Villarrica', status: 'Para enviar', date: today },
    { n: 1046, name: 'Ana B.', phone: '0971 000 333', items: [{ id: 6, q: 1 }], total: 5450000, pay: 'Transferencia', ship: 'Retiro en el local', status: 'Pagado', date: today },
    { n: 1045, name: 'Diego F.', phone: '0991 000 444', items: [{ id: 3, q: 1 }], total: 1290000, pay: 'Efectivo al retirar', ship: 'Retiro en el local', status: 'Entregado', date: today }
  ];
  const get = (k, seed) => { try { const v = JSON.parse(localStorage.getItem(k)); if (v) return v; } catch (e) {} return JSON.parse(JSON.stringify(seed)); };
  const set = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const gs = n => 'Gs. ' + Math.round(n).toLocaleString('es-PY').replace(/,/g, '.');
  return {
    WHATSAPP: '595993485179', // número de la tienda (en la demo, el de Pyahu Labs)
    SHIPPING: 15000,
    gs,
    products: () => get('kt_products', SEED_PRODUCTS),
    saveProducts: p => set('kt_products', p),
    orders: () => get('kt_orders', SEED_ORDERS),
    saveOrders: o => set('kt_orders', o),
    cart: () => get('kt_cart', []),
    saveCart: c => set('kt_cart', c),
    reset: () => { ['kt_products', 'kt_orders', 'kt_cart'].forEach(k => { try { localStorage.removeItem(k); } catch (e) {} }); }
  };
})();
