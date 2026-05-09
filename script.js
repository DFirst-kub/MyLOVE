function showContent(view) {
    // ซ่อนหน้าเมนูหลัก
    document.getElementById('main-menu').style.display = 'none';
    
    // ซ่อนทุกหน้า Content ก่อน
    document.querySelectorAll('.content-view').forEach(el => {
        el.style.display = 'none';
    });
    
    // แสดงหน้าความทรงจำที่เลือก
    document.getElementById('view-' + view).style.display = 'block';
}

function goHome() {
    // ซ่อนทุกหน้า Content
    document.querySelectorAll('.content-view').forEach(el => {
        el.style.display = 'none';
    });
    
    // แสดงหน้าเมนูหลัก
    document.getElementById('main-menu').style.display = 'block';
}