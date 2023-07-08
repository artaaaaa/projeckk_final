
    // Mendapatkan elemen-elemen yang diperluk
    const counterMinusBtn = document.querySelector('.counter-minus');
const counterPlusBtn = document.querySelector('.counter-plus');
const number2Input = document.getElementById('number2');

// Menambahkan event listener untuk tombol minus
counterMinusBtn.addEventListener('click', function () {
    let currentValue = parseInt(number2Input.value);
    if (currentValue > 1) {
        currentValue -= 1;
        number2Input.value = currentValue;
    }
});

// Menambahkan event listener untuk tombol plus
counterPlusBtn.addEventListener('click', function () {
    let currentValue = parseInt(number2Input.value);
    currentValue += 1;
    number2Input.value = currentValue;
}); 

 // Inisialisasi Flatpickr pada elemen dengan class 'range'
 flatpickr('.range', {
    dateFormat: 'Y-m-d', // Format tanggal yang diinginkan
    minDate: 'today', // Hanya tanggal hari ini dan setelahnya yang dapat dipilih
    enableTime: false, // Tidak memperbolehkan waktu dipilih
    altInput: true, // Menampilkan input alternatif dengan format yang mudah dibaca
    altFormat: 'F j, Y', // Format input alternatif
    altInputClass: 'flatpickr-alt', // Class untuk input alternatif
    onClose: function(selectedDates, dateStr, instance) {
        console.log('Selected date: ' + dateStr);
        // Tambahkan kode lain yang ingin Anda jalankan saat tanggal dipilih
    }
});
