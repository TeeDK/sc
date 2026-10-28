// DỮ LIỆU SẢN PHẨM (HƠN 20 MÓN ĂN THỰC TẾ & MÓN CHAY THẬT)
const products = [
    // --- ĐỒ ĂN CHAY ---
    {
        id: 1,
        name: "Cơm Chiên Dừa Hạt Sen Chay",
        category: "chay",
        price: 55000,
        rating: 4.9,
        prepTime: "15-20 phút",
        calories: "380 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        description: "Cơm chiên hạt sen thơm dẻo, kết hợp cùng dừa tươi, củ dền, củ cải đường và nấm đông cô thanh mát."
    },
    {
        id: 2,
        name: "Lẩu Nấm Chay Thanh Vị",
        category: "chay",
        price: 120000,
        rating: 5.0,
        prepTime: "25 phút",
        calories: "420 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        description: "Nước dùng lẩu hầm từ củ quả ngọt thanh nhiên, kèm 5 loại nấm tươi (nấm kim针, nấm đùi gà, nấm bào ngư), đậu hũ non và rau xanh."
    },
    {
        id: 3,
        name: "Phở Chay Nam Bộ",
        category: "chay",
        price: 48000,
        rating: 4.8,
        prepTime: "15 phút",
        calories: "350 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80",
        description: "Bánh phở mềm dẻo hòa quyện nước hầm củ quả thơm mùi quế hồi, chả chay, đậu hũ chiên giòn và rau thơm."
    },
    {
        id: 4,
        name: "Bún Chả Giò Chay Tươi",
        category: "chay",
        price: 42000,
        rating: 4.7,
        prepTime: "15 phút",
        calories: "390 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
        description: "Chả giò chay chiên giòn rụm nhân khoai môn nấm mèo, ăn kèm bún tươi, rau sống và nước mắm chay chua ngọt."
    },
    {
        id: 5,
        name: "Salad Bơ Quinoa Healthy Chay",
        category: "chay",
        price: 65000,
        rating: 4.9,
        prepTime: "10 phút",
        calories: "290 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        description: "Bơ dáp ngậy, hạt Quinoa giàu đạm, cà chua bi, xà lách thủy canh trộn xốt chanh dây thanh mát."
    },
    {
        id: 6,
        name: "Cà Rê Rau Củ Chay",
        category: "chay",
        price: 52000,
        rating: 4.8,
        prepTime: "20 phút",
        calories: "410 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
        description: "Cà rê khoai tây, khoai mật, đậu hũ đậm đà béo ngậy nước cốt dừa, ăn kèm bánh mì giòn xốp."
    },

    // --- CƠM & MÌ ---
    {
        id: 7,
        name: "Cơm Tấm Sườn Bì Chả Đặc Biệt",
        category: "main",
        price: 58000,
        rating: 4.9,
        prepTime: "15 phút",
        calories: "650 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        description: "Sườn nướng mật chiên vàng ươm, bì sần sật, chả trứng hấp béo ngậy ăn kèm mỡ hành thơm nức."
    },
    {
        id: 8,
        name: "Cơm Gà Hải Nam Chuẩn Vị",
        category: "main",
        price: 55000,
        rating: 4.8,
        prepTime: "15 phút",
        calories: "580 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        description: "Thịt gà luộc da giòn thịt mềm, cơm nấu nước luộc gà thơm dẻo cùng xốt gừng ớt đặc trưng."
    },
    {
        id: 9,
        name: "Mì Xào Hải Sản Hoàng Gia",
        category: "main",
        price: 68000,
        rating: 4.7,
        prepTime: "20 phút",
        calories: "520 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        description: "Tôm tươi, mực giòn xào cùng mì trứng dai ngon, cải thìa và xốt dầu hàu đậm đà."
    },
    {
        id: 10,
        name: "Cơm Bò Lúc Lắc Măng Tây",
        category: "main",
        price: 75000,
        rating: 4.9,
        prepTime: "18 phút",
        calories: "610 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        description: "Thịt bò Úc xào mềm ngấm gia vị, măng tây giòn ngọt, ăn kèm cơm trắng nóng hổi."
    },

    // --- BÚN & PHỞ ---
    {
        id: 11,
        name: "Phở Bò Tái Nạm Hà Nội",
        category: "soup",
        price: 55000,
        rating: 5.0,
        prepTime: "12 phút",
        calories: "480 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80",
        description: "Nước dùng phở ninh từ xương ống 24 giờ thơm nức quế hồi, thịt bò tái nạm mềm ngọt."
    },
    {
        id: 12,
        name: "Bún Bò Huế Cổ Truyền",
        category: "soup",
        price: 60000,
        rating: 4.9,
        prepTime: "15 phút",
        calories: "530 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        description: "Nước dùng đậm đà vị mắm ruốc Cố đô, nạm bò, chả cua, giò heo giòn sần sật."
    },
    {
        id: 13,
        name: "Bún Thái Hải Sản Chua Cay",
        category: "soup",
        price: 65000,
        rating: 4.8,
        prepTime: "15 phút",
        calories: "490 kcal",
        isVegan: false,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
        description: "Nước lẩu TomYum chua cay bùng vị, tôm sú, mực tươi, chả cá và rau muống giòn."
    },

    // --- ĐỒ UỐNG & TRÁNG MIỆNG ---
    {
        id: 14,
        name: "Trà Trái Cây Nhiệt Đới",
        category: "drink",
        price: 32000,
        rating: 4.8,
        prepTime: "5 phút",
        calories: "140 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        description: "Trà oolong kết hợp dâu tây, cam tươi, chanh dây thanh mát giải nhiệt."
    },
    {
        id: 15,
        name: "Sinh Tố Bơ Dừa Béo Ngậy",
        category: "drink",
        price: 38000,
        rating: 4.9,
        prepTime: "8 phút",
        calories: "220 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
        description: "Bơ sáp béo dẻo xay cùng sữa dừa nguyên chất, không hóa chất ngọt lịm tự nhiên."
    },
    {
        id: 16,
        name: "Chè Dừa Dầm Hải Phòng",
        category: "drink",
        price: 30000,
        rating: 4.7,
        prepTime: "5 phút",
        calories: "180 kcal",
        isVegan: true,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
        description: "Cơm dừa non, thạch dừa giòn, hạt sương sa cùng nước cốt dừa béo thơm."
    }
];

// STATE QUẢN LÝ
let currentUser = JSON.parse(localStorage.getItem('foodflow_user')) || null;
let cart = JSON.parse(localStorage.getItem('foodflow_cart')) || [];
let currentCategory = 'all';

// KHỞI TẠO
document.addEventListener('DOMContentLoaded', () => {
    updateUserUI();
    renderProducts();
    updateCartUI();
});

// HIỂN THỊ DANH SÁCH SẢN PHẨM
function renderProducts(items = null) {
    const list = items || (currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory));
    const grid = document.getElementById('productGrid');

    if (list.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fa-solid fa-utensils text-4xl text-gray-300 mb-3"></i>
                <p class="text-gray-500 font-medium">Không tìm thấy món ăn phù hợp</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(p => `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col justify-between">
            <div>
                <div class="relative overflow-hidden group cursor-pointer" onclick="openDetailModal(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
                    ${p.isVegan ? `<span class="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center space-x-1"><i class="fa-solid fa-leaf text-xs"></i><span>Đồ Chay</span></span>` : ''}
                    <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-gray-800 text-xs font-bold px-2 py-1 rounded-lg shadow"><i class="fa-solid fa-clock text-amber-500 mr-1"></i>${p.prepTime}</span>
                </div>
                <div class="p-4">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-xs text-gray-400 font-medium">${p.calories}</span>
                        <div class="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                            <i class="fa-solid fa-star"></i>
                            <span class="text-gray-700">${p.rating}</span>
                        </div>
                    </div>
                    <h3 onclick="openDetailModal(${p.id})" class="font-bold text-gray-900 hover:text-emerald-600 transition cursor-pointer text-base line-clamp-1">${p.name}</h3>
                    <p class="text-gray-500 text-xs mt-1 line-clamp-2">${p.description}</p>
                </div>
            </div>
            <div class="p-4 pt-0 flex items-center justify-between border-t border-gray-50 mt-3">
                <span class="font-extrabold text-emerald-600 text-lg">${formatPrice(p.price)}</span>
                <button onclick="addToCart(${p.id})" class="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white p-2.5 rounded-xl transition flex items-center space-x-1 text-sm font-semibold">
                    <i class="fa-solid fa-plus"></i>
                    <span>Thêm</span>
                </button>
            </div>
        </div>
    `).join('');
}

// LỌC SẢN PHẨM THEO DANH MỤC
function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-cat-${cat}`);
    if (activeBtn) activeBtn.classList.add('active');
    renderProducts();
}

// TÌM KIẾM MON ÁN
function handleSearch() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    if (!q) {
        renderProducts();
        return;
    }
    const filtered = products.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    renderProducts(filtered);
}

// LƯU TRỮ VÀ CẬP NHẬT GIỎ HÀNG
function addToCart(productId) {
    // YÊU CẦU BẮT BUỘC ĐĂNG NHẬP
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để thêm món vào giỏ hàng!', 'error');
        openAuthModal('login');
        return;
    }

    const product = products.find(p => p.id === productId);
    const existIndex = cart.findIndex(item => item.id === productId);

    if (existIndex > -1) {
        cart[existIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`Đã thêm "${product.name}" vào giỏ!`);
}

function updateQuantity(id, delta) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('foodflow_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.innerText = totalItems;

    const list = document.getElementById('cartItemsList');
    if (cart.length === 0) {
        list.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-gray-200"></i>
                <p>Giỏ hàng chưa có món nào</p>
            </div>
        `;
        document.getElementById('cartSubtotal').innerText = '0đ';
        document.getElementById('cartTotal').innerText = '0đ';
        return;
    }

    list.innerHTML = cart.map(item => `
        <div class="flex items-center space-x-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
            <img src="${item.image}" class="w-16 h-16 object-cover rounded-xl">
            <div class="flex-1">
                <h4 class="font-bold text-sm text-gray-800 line-clamp-1">${item.name}</h4>
                <span class="text-xs text-emerald-600 font-bold">${formatPrice(item.price)}</span>
                <div class="flex items-center space-x-2 mt-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-lg bg-white border flex items-center justify-center text-xs font-bold hover:bg-gray-100">-</button>
                    <span class="text-xs font-bold">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-lg bg-white border flex items-center justify-center text-xs font-bold hover:bg-gray-100">+</button>
                </div>
            </div>
            <span class="font-bold text-sm text-gray-800">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 15000 : 0;
    document.getElementById('cartSubtotal').innerText = formatPrice(subtotal);
    document.getElementById('cartTotal').innerText = formatPrice(subtotal + shipping);
}

function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    drawer.classList.toggle('translate-x-full');
}

// ĐẶT HÀNG
function checkout() {
    if (!currentUser) {
        showToast('Vui lòng đăng nhập để tiến hành đặt hàng!', 'error');
        openAuthModal('login');
        return;
    }

    if (cart.length === 0) {
        showToast('Giỏ hàng của bạn đang trống!', 'error');
        return;
    }

    alert(`🎉 Đặt hàng thành công!\nCảm ơn ${currentUser.name} đã mua hàng tại FoodFlow.\nĐơn hàng sẽ được giao tới bạn trong 20 phút!`);
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// AUTHENTICATION LOGIC (ĐĂNG NHẬP / ĐĂNG KÝ)
function openAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    const content = document.getElementById('authContent');

    if (mode === 'login') {
        content.innerHTML = `
            <h2 class="text-2xl font-black text-gray-900 text-center mb-2">Đăng Nhập</h2>
            <p class="text-xs text-gray-500 text-center mb-6">Đăng nhập để đặt món và trải nghiệm đầy đủ dịch vụ</p>
            <form onsubmit="handleLogin(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                    <input type="email" id="loginEmail" required placeholder="nhapemail@gmail.com" class="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Mật khẩu</label>
                    <input type="password" id="loginPass" required placeholder="••••••••" class="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none text-sm">
                </div>
                <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg">Đăng Nhập Ngay</button>
            </form>
            <p class="text-xs text-center text-gray-500 mt-6">
                Chưa có tài khoản? <a href="#" onclick="openAuthModal('register')" class="text-emerald-600 font-bold hover:underline">Tạo tài khoản mới</a>
            </p>
        `;
    } else {
        content.innerHTML = `
            <h2 class="text-2xl font-black text-gray-900 text-center mb-2">Tạo Tài Khoản</h2>
            <p class="text-xs text-gray-500 text-center mb-6">Tạo tài khoản nhanh gọn chỉ trong 30 giây</p>
            <form onsubmit="handleRegister(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Họ và Tên</label>
                    <input type="text" id="regName" required placeholder="Nguyễn Văn A" class="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                    <input type="email" id="regEmail" required placeholder="nhapemail@gmail.com" class="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none text-sm">
                </div>
                <div>
                    <label class="block text-xs font-bold text-gray-700 uppercase mb-1">Mật khẩu</label>
                    <input type="password" id="regPass" required placeholder="••••••••" class="w-full px-4 py-3 bg-gray-50 border rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none text-sm">
                </div>
                <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg">Đăng Ký Tài Khoản</button>
            </form>
            <p class="text-xs text-center text-gray-500 mt-6">
                Đã có tài khoản? <a href="#" onclick="openAuthModal('login')" class="text-emerald-600 font-bold hover:underline">Đăng nhập</a>
            </p>
        `;
    }
    modal.classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    currentUser = { name: email.split('@')[0], email: email };
    localStorage.setItem('foodflow_user', JSON.stringify(currentUser));
    updateUserUI();
    closeAuthModal();
    showToast(`Chào mừng ${currentUser.name} trở lại!`);
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    currentUser = { name: name, email: email };
    localStorage.setItem('foodflow_user', JSON.stringify(currentUser));
    updateUserUI();
    closeAuthModal();
    showToast(`Đăng ký thành công! Chào mừng ${currentUser.name}`);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('foodflow_user');
    updateUserUI();
    showToast('Đã đăng xuất tài khoản!');
}

function updateUserUI() {
    const sec = document.getElementById('userSection');
    if (currentUser) {
        sec.innerHTML = `
            <div class="flex items-center space-x-3 bg-gray-100 pl-3 pr-2 py-1.5 rounded-xl">
                <span class="text-sm font-bold text-gray-800">${currentUser.name}</span>
                <button onclick="logout()" title="Đăng xuất" class="text-gray-400 hover:text-red-500 p-1">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </button>
            </div>
        `;
    } else {
        sec.innerHTML = `
            <button onclick="openAuthModal('login')" class="flex items-center space-x-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-xl transition">
                <i class="fa-regular fa-circle-user text-lg"></i>
                <span>Đăng nhập</span>
            </button>
        `;
    }
}

// DETAIL MODAL
function openDetailModal(id) {
    const p = products.find(item => item.id === id);
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('detailContent');

    content.innerHTML = `
        <img src="${p.image}" class="w-full h-64 object-cover">
        <div class="p-6">
            <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">${p.category === 'chay' ? 'Món Chay Thanh Tịnh' : 'Món Ăn Thường'}</span>
                <span class="text-xs text-gray-400"><i class="fa-solid fa-fire mr-1 text-amber-500"></i>${p.calories}</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mt-2">${p.name}</h2>
            <p class="text-gray-600 text-sm mt-3 leading-relaxed">${p.description}</p>
            <div class="mt-6 flex items-center justify-between pt-4 border-t">
                <div>
                    <span class="text-xs text-gray-400 block">Đơn giá</span>
                    <span class="text-2xl font-black text-emerald-600">${formatPrice(p.price)}</span>
                </div>
                <button onclick="addToCart(${p.id}); closeDetailModal();" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg flex items-center space-x-2">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <span>Thêm Vào Giỏ</span>
                </button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.add('hidden');
}

// UTILS & TOAST
function formatPrice(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
}

function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = document.getElementById('toastIcon');
    const text = document.getElementById('toastMsg');

    text.innerText = msg;
    if (type === 'error') {
        icon.className = 'fa-solid fa-circle-exclamation text-red-400 text-xl';
    } else {
        icon.className = 'fa-solid fa-circle-check text-emerald-400 text-xl';
    }

    toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    }, 3000);
}