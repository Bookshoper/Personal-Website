// 平滑滚动到指定锚点区域
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// 监听滚动：改变导航背景透明度 (为后续扩展保留)
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// 可选：滚动动画（元素可见时淡入，配合 CSS 中加入 .fade-in 使用）
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
        }
    });
}, { threshold: 0.1 });
sections.forEach(sec => observer.observe(sec));

// ========================
// 📱 移动端导航菜单逻辑
// ========================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu && navLinks) {
    // 点击汉堡按钮，展开/收起菜单
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('active');
    });

    // 点击任意导航链接后，自动收起菜单（提升移动端体验）
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-active');
            navLinks.classList.remove('active');
        });
    });
}

// 注：原先的 copyEmail 函数已移除，因为我们已将“找到我”改为了标准的 <a> 标签跳转（mailto 协议更规范）