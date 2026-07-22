// ده عشان يتأكد الصفحة حملت اول
document.addEventListener('DOMContentLoaded', function() {

    // تجربة 1: رسالة اول ما الصفحة تفتح
    console.log("الجافا اشتغلت تمام ✅");
    alert("مرحبا بكم في English Hub");

    // تجربة 2: زر الدروس
    window.startLesson = function(num) {
        alert(`جاري فتح الدرس رقم ${num}...`);
    }

    // تجربة 3: فورم التواصل
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('تم إرسال رسالتك بنجاح!');
            this.reset();
        });
    }
});
