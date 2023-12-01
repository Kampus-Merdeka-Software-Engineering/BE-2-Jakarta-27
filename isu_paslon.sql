-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Nov 2023 pada 11.30
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `berita_capres`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `isu_paslon`
--

CREATE TABLE `isu_paslon` (
  `id_paslon` int(11) NOT NULL,
  `title_isu` text NOT NULL,
  `gambar_isu` text NOT NULL,
  `isu` text NOT NULL,
  `upload_date` varchar(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `isu_paslon`
--

INSERT INTO `isu_paslon` (`id_paslon`, `title_isu`, `gambar_isu`, `isu`, `upload_date`, `id`) VALUES
(1, 'Pasangan AMIN Dapat Nomor Urut Satu', 'https://cdn0-production-images-kly.akamaized.net/AUmefAZWrJJI7wIJRsIsqbxf9Wc=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4226619/original/043537900_1668483082-gibran_dan_anies-101651.jpg', 'PilpresKini, Jakarta - Calon Presiden (Capres) Anies Baswedan mengaku bersyukur usai mendapatkan nomor urut. Pasangan Anies-Muhaimin mendapatkan nomor urut satu pada Pilpres 2024. \"Kita semua bersyukur, satu bersyukur, dua bersyukur, tiga bersyukur. Alhamdulillah, semua pasti ada hikmahnya,\" kata Anies di KPU RI, Jakarta, Selasa 14 November 2023. Menurut dia, dengan telah mendapatkan nomor urut satu ini telah menjadi referensi untuk para pasangan capres-cawapres lainnya. \"Dan nomor satu ini, seperti tadi. Ketika ngasih sambutan langsung jadi referensi yang nomor dua, referensi nomor tiga. Referensinya siapa? Yang nomor pertama. Jadi selalu ada hikmahnya,\" ujarnya. Sementara itu, Muhaimin Iskandar alias Cak Imin mengaku, nomor urut satu yang didapatkannya ini sudah sesuai dengan yang diharapkannya. \"Alhamdulillah sesuai harapan dan doa semua, akhirnya pasangan Amin dapat nomor 1, nomor 1 tanda-tanda untuk menang juara 1, mohon doa restunya, moga-moga Pemilu ini lancar,\" ujar Gus Imin. Ketua Umum Partai Kebangkitan Bangsa (PKB) ini pun mengajak masyarakat untuk dapat ikut mengawal Pemilu 2024.\r\n\r\n\"Kalau ingin perubahan ayo kuatkan nomor 1, kalau kita ingin Pemilu jujur, adil, bebas mari kita kawal Pemilu dengann semangat untuk mengawasi, tidak boleh ada wasit merangkap pemain, tidak boleh ada kecurangan, bukan kepentingan Amin,\" ujar Cak Imin. \"Tapi Pemilu yang sehat, yang kuat akan menyelematkan dan memajukan demokrasi. Kalau demokrasi maju, pasti rakyat akan semakin makmur,\" sambung dia. Selain itu, Kapten Timnas Pemenangan Anies-Muhaimin, M Syaugi Alaydrus ingin agar dengan mendapatkan nomor urut satu bisa menang dalam satu putaran. \"Terdaftar nomor satu, ambil urutan nomor satu, dapat nomor satu insyaallah satu putaran, doa ini namanya doa kan,\" ujar Syaugi. Menurut dia, nomor urut satu sudah sesuai dengan harapan yang mereka inginkan. Apalagi, salah satu partai Koalisi Perubahan yakni PKB mendapatkan nomor satu. \"Ya pasti adalah harapannya, PKB salah satu partai kita pendukung nomor satu juga, dan mudah-mudahan nomor satu ini jadi pertanda baik. Mudah-mudahan pasangan Anies-Muhaimin ini satu kali gol,\" ucapnya. \"Ya sesuai (harapan) dong sesuai kan kita ingin yang pertama dong. Daftar saja pertama, urutan nomor pertama dapet juga insyaallah menang pertama,\" pungkasnya.', '15/11/2023', 1),
(2, 'prabowo nyaman di muhammadiyah sebut nama zulhas buya syafii hingga din', 'https://akcdn.detik.net.id/community/media/visual/2023/11/24/prabowo-subianto-di-umsurabaya_169.jpeg?w=700&q=90', 'PilpresKini, Jakarta - Calon Presiden (Capres) Anies Baswedan mengaku bersyukur usai mendapatkan nomor urut. Pasangan Anies-Muhaimin mendapatkan nomor urut satu pada Pilpres 2024. \"Kita semua bersyukur, satu bersyukur, dua bersyukur, tiga bersyukur. Alhamdulillah, semua pasti ada hikmahnya,\" kata Anies di KPU RI, Jakarta, Selasa 14 November 2023. Menurut dia, dengan telah mendapatkan nomor urut satu ini telah menjadi referensi untuk para pasangan capres-cawapres lainnya. \"Dan nomor satu ini, seperti tadi. Ketika ngasih sambutan langsung jadi referensi yang nomor dua, referensi nomor tiga. Referensinya siapa? Yang nomor pertama. Jadi selalu ada hikmahnya,\" ujarnya. Sementara itu, Muhaimin Iskandar alias Cak Imin mengaku, nomor urut satu yang didapatkannya ini sudah sesuai dengan yang diharapkannya. \"Alhamdulillah sesuai harapan dan doa semua, akhirnya pasangan Amin dapat nomor 1, nomor 1 tanda-tanda untuk menang juara 1, mohon doa restunya, moga-moga Pemilu ini lancar,\" ujar Gus Imin. Ketua Umum Partai Kebangkitan Bangsa (PKB) ini pun mengajak masyarakat untuk dapat ikut mengawal Pemilu 2024.\r\n\r\n\"Kalau ingin perubahan ayo kuatkan nomor 1, kalau kita ingin Pemilu jujur, adil, bebas mari kita kawal Pemilu dengann semangat untuk mengawasi, tidak boleh ada wasit merangkap pemain, tidak boleh ada kecurangan, bukan kepentingan Amin,\" ujar Cak Imin. \"Tapi Pemilu yang sehat, yang kuat akan menyelematkan dan memajukan demokrasi. Kalau demokrasi maju, pasti rakyat akan semakin makmur,\" sambung dia. Selain itu, Kapten Timnas Pemenangan Anies-Muhaimin, M Syaugi Alaydrus ingin agar dengan mendapatkan nomor urut satu bisa menang dalam satu putaran. \"Terdaftar nomor satu, ambil urutan nomor satu, dapat nomor satu insyaallah satu putaran, doa ini namanya doa kan,\" ujar Syaugi. Menurut dia, nomor urut satu sudah sesuai dengan harapan yang mereka inginkan. Apalagi, salah satu partai Koalisi Perubahan yakni PKB mendapatkan nomor satu. \"Ya pasti adalah harapannya, PKB salah satu partai kita pendukung nomor satu juga, dan mudah-mudahan nomor satu ini jadi pertanda baik. Mudah-mudahan pasangan Anies-Muhaimin ini satu kali gol,\" ucapnya. \"Ya sesuai (harapan) dong sesuai kan kita ingin yang pertama dong. Daftar saja pertama, urutan nomor pertama dapet juga insyaallah menang pertama,\" pungkasnya.', '16/11/2023', 2),
(3, 'Dewan Adat Dayak Dukung Ganjar-Mahfud dan Titip 3 Aspirasi', 'https://pict.sindonews.net/webp/240/pena/news/2023/11/26/12/1261361/dewan-adat-dayak-dukung-ganjarmahfud-dan-titip-3-aspirasi-ucy.webp', 'PilpresKini, Jakarta - Calon Presiden (Capres) Anies Baswedan mengaku bersyukur usai mendapatkan nomor urut. Pasangan Anies-Muhaimin mendapatkan nomor urut satu pada Pilpres 2024. \"Kita semua bersyukur, satu bersyukur, dua bersyukur, tiga bersyukur. Alhamdulillah, semua pasti ada hikmahnya,\" kata Anies di KPU RI, Jakarta, Selasa 14 November 2023. Menurut dia, dengan telah mendapatkan nomor urut satu ini telah menjadi referensi untuk para pasangan capres-cawapres lainnya. \"Dan nomor satu ini, seperti tadi. Ketika ngasih sambutan langsung jadi referensi yang nomor dua, referensi nomor tiga. Referensinya siapa? Yang nomor pertama. Jadi selalu ada hikmahnya,\" ujarnya. Sementara itu, Muhaimin Iskandar alias Cak Imin mengaku, nomor urut satu yang didapatkannya ini sudah sesuai dengan yang diharapkannya. \"Alhamdulillah sesuai harapan dan doa semua, akhirnya pasangan Amin dapat nomor 1, nomor 1 tanda-tanda untuk menang juara 1, mohon doa restunya, moga-moga Pemilu ini lancar,\" ujar Gus Imin. Ketua Umum Partai Kebangkitan Bangsa (PKB) ini pun mengajak masyarakat untuk dapat ikut mengawal Pemilu 2024.\r\n\r\n\"Kalau ingin perubahan ayo kuatkan nomor 1, kalau kita ingin Pemilu jujur, adil, bebas mari kita kawal Pemilu dengann semangat untuk mengawasi, tidak boleh ada wasit merangkap pemain, tidak boleh ada kecurangan, bukan kepentingan Amin,\" ujar Cak Imin. \"Tapi Pemilu yang sehat, yang kuat akan menyelematkan dan memajukan demokrasi. Kalau demokrasi maju, pasti rakyat akan semakin makmur,\" sambung dia. Selain itu, Kapten Timnas Pemenangan Anies-Muhaimin, M Syaugi Alaydrus ingin agar dengan mendapatkan nomor urut satu bisa menang dalam satu putaran. \"Terdaftar nomor satu, ambil urutan nomor satu, dapat nomor satu insyaallah satu putaran, doa ini namanya doa kan,\" ujar Syaugi. Menurut dia, nomor urut satu sudah sesuai dengan harapan yang mereka inginkan. Apalagi, salah satu partai Koalisi Perubahan yakni PKB mendapatkan nomor satu. \"Ya pasti adalah harapannya, PKB salah satu partai kita pendukung nomor satu juga, dan mudah-mudahan nomor satu ini jadi pertanda baik. Mudah-mudahan pasangan Anies-Muhaimin ini satu kali gol,\" ucapnya. \"Ya sesuai (harapan) dong sesuai kan kita ingin yang pertama dong. Daftar saja pertama, urutan nomor pertama dapet juga insyaallah menang pertama,\" pungkasnya.', '17/11/2023', 3);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `isu_paslon`
--
ALTER TABLE `isu_paslon`
  ADD PRIMARY KEY (`id_paslon`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `isu_paslon`
--
ALTER TABLE `isu_paslon`
  MODIFY `id_paslon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
