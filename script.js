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

// ========================
// 🌗 暗黑模式点击切换逻辑（全新修复版）
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            // 获取当前实际的主题状态，如果没有则默认为 light
            const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
            const newTheme = currentTheme === "light" ? "dark" : "light";

            // 切换全局属性并保存到本地，供跨页面读取
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }
});