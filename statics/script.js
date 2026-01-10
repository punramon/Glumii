// ฟังก์ชันตรวจจับการ Scroll เพื่อแสดง Effect Fade-in
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        // ถ้าองค์ประกอบเลื่อนขึ้นมาอยู่ในระยะสายตา ให้เติม class 'active'
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } 
        // ถ้าต้องการให้ Fade out ตอนเลื่อนกลับไป ให้เอาคอมเมนต์บรรทัดล่างออก
        // else {
        //     reveals[i].classList.remove('active');
        // }
    }
}