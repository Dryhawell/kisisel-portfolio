// Menüde aktif link vurgulama
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('aktif'));
        this.classList.add('aktif');
    });
});

// İletişim formu gönderimini engelle ve kullanıcıya mesaj göster
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mesajınız başarıyla gönderildi! Teşekkürler.');
        form.reset();
    });
}

// Küçük bir fade-in animasyonu
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);
}); 