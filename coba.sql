-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Nov 2023 pada 14.22
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
-- Database: `coba`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `berita`
--

CREATE TABLE `berita` (
  `id_berita` int(5) NOT NULL,
  `title` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `link_gambar` varchar(255) NOT NULL,
  `id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `berita`
--

INSERT INTO `berita` (`id_berita`, `title`, `link`, `link_gambar`, `id`) VALUES
(2, 'Dewan Adat Dayak Dukung Ganjar-Mahfud dan Titip 3 Aspirasi', 'https://nasional.sindonews.com/read/1261361/12/dewan-adat-dayak-dukung-ganjar-mahfud-dan-titip-3-aspirasi-1701000666', 'https://pict.sindonews.net/webp/240/pena/news/2023/11/26/12/1261361/dewan-adat-dayak-dukung-ganjarmahfud-dan-titip-3-aspirasi-ucy.webp', 3),
(3, 'muzani yakin prabowo gibran menang 1 putaran minta tak termakan survei', 'https://news.detik.com/pemilu/d-7055346/muzani-yakin-prabowo-gibran-menang-1-putaran-minta-tak-termakan-survei?_ga=2.192927338.1198234638.1700998841-2078881872.1698214992', 'https://akcdn.detik.net.id/community/media/visual/2023/11/24/sekjen-gerindra-ahmad-muzani_169.jpeg?w=700&q=90', 2),
(4, 'prabowo nyaman di muhammadiyah sebut nama zulhas buya syafii hingga din', 'https://news.detik.com/pemilu/d-7054196/prabowo-nyaman-di-muhammadiyah-sebut-nama-zulhas-buya-syafii-hingga-din', 'https://akcdn.detik.net.id/community/media/visual/2023/11/24/prabowo-subianto-di-umsurabaya_169.jpeg?w=700&q=90', 2),
(5, 'Anies Dekati Gibran, PDIP: Pasti Ada Udang di Balik Batu', 'https://www.liputan6.com/news/read/5126024/anies-dekati-gibran-pdip-pasti-ada-udang-di-balik-batu', 'https://cdn0-production-images-kly.akamaized.net/AUmefAZWrJJI7wIJRsIsqbxf9Wc=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4226619/original/043537900_1668483082-gibran_dan_anies-101651.jpg', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `paslon`
--

CREATE TABLE `paslon` (
  `id` int(5) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `paslon`
--

INSERT INTO `paslon` (`id`, `nama`) VALUES
(3, 'ganjarmahfud'),
(2, 'prabowowgibran'),
(1, 'aniesamien');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id_berita`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `berita`
--
ALTER TABLE `berita`
  MODIFY `id_berita` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
