# Doraemonangis Store
Doremonangis, robot dari masa depan sedang mencoba untuk membuka suatu bisnis waralaba pada bidang F&B, yaitu membuat dorayaki kekinian (rasa pempek, rasa KFC, rasa nasi padang, dan lain-lain) di tahun 2021 ini. Mobita, teman baiknya membantunya untuk mendirikan usaha dorayakinya dengan menjadi Co-Founder sekaligus CTO dari usaha Doremonangis yang bernama “Stand with Dorayaki”. Selaku CTO, Mobita tentu dipekerjakan oleh Doremonangis untuk membuat sebuah sistem untuk memanajemen tokonya. Akan tetapi, karena Mobita adalah anak yang pemalas, toko Doremonangis sudah memiliki banyak cabang di berbagai tempat. Sehingga, sistem yang dibuat harus menyesuaikan kebutuhan bisnis dari tokonya.

Pembuatan Aplikasi berbasis Website untuk Toko Doraemonangis pada akhirnya di**bebankan** kepada Mahasiswa ITB karena perjanjian voucher dorayaki gratis selama 1 tahun. Meskipun, pada akhirnya kontrak ini dibatalkan karena tokonya mengalami kebangkrutan. Aplikasi berbasis Website ini dilirik oleh Asisten Lab Programming 2018 untuk dijadikan Tugas Besar Mata Kuliah IF3110 yang pertama.

# Daftar Requirement
1. Autentikasi Pengguna
2. Pengelolaan Varian Dorayaki
3. Manajemen Stok Dorayaki
4. Melihat Daftar Dorayaki
5. Riwayat Perubahan Stock Dorayaki
6. Pembelian Dorayaki
7. Riwayat Pembelian Dorayaki

# Cara Instalasi
1. Copy `.env.example` ke `.env`
2. Buat dan Copy API Key pada `https://api.imgbb.com`, harus melakukan login terlebih dahulu pada situs terkait. Hal ini digunakan untuk menyimpan gambar. Backend akan mengupload binary object pada third party dan third party akan mengembalikan link (Seperti imgur dan sebagainya, kali ini digunakan imgbb karena kemudahannya).
3. Copy API Key tersebut dan ganti pada `.env`

# Cara Menjalankan Server
1. Lakukan `docker-compose up`
2. Buka situs `localhost:8000`

# Screenshot

# Pembagian Tugas
Setiap anggota bertanggung jawab atas server-side dan client-side pada page yang bersangkutan.

| Fitur | NIM |
|-------|-----|
|Autentikasi|13519002|
|Pengelolaan Varian|13519002|
|Pengelolaan Stok|13519019|
|Riwayat Perubahan|13519019|
|Daftar Dorayaki|13519154|
|Informasi Detail Dorayaki|13519154|