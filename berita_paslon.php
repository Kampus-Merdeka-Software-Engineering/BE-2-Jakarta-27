<?php
$id = strval($_GET["id"]);
$judul = strval($_GET["judul"]);

$conn = mysqli_connect("localhost","root" ,"", "berita_capres");
$query = "select * from isu_paslon where id_paslon = '$id'   && title_isu = '$judul'";
$result = mysqli_query($conn, $query);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Berita (isi judul)</title>

    <!-- Fav icons -->
    <script src="https://kit.fontawesome.com/46b7ceee20.js" crossorigin="anonymous"></script>
    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet">
    <!-- CSS --> 
    <link href="../css/berita.css" rel="stylesheet" />
    <link href="../css/nav-end.css" rel="stylesheet" />
</head>
<body>
    <!-- Navbar / Header -->
    <div class="navcontainer" id="navcontainer">
      <div class="nav">
          <input type="checkbox" id="nav-check">
          <div class="nav-header">
              <img src="..\img\logo-pilpreskini.png" alt="logo-portal" width="75%">
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div> 
          <div class="nav-links">
              <a href="..\index.php" target="_self">Home</a>
              <a class="navactive" href="..\isu.php" target="_self">Isu</a>
              <a href="..\pilpres.php" target="_self">Pilpres</a>
              <a href="..\about.html" target="_self">About</a>
              <img src="..\img\logo-km.png" alt="logo-km" width="12%" style="margin-right: 4px;">
              <img src="..\img\logo-revou.png" alt="logo-revou" width="8%">             
          </div>
      </div>
  </div>

    <!--isi berita-->
    <div class="grid-container" id="page">
      <div class="site-content">
        <div class="news">
          <header>
            <div class="container">
              <nav>
                <ul>
                  <li><a href="isu.html">Isu ></a></li> 
                  <li>Seputar Annies - Amin</li>
                </ul>
              </nav>
            </div>
          </header>
          <main>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
              <?php echo $row["title_isu"];?>
            <div class="container">
              <article class="article">
                <h1 class="article-title"><?php echo $row["title_isu"];?></h1>
                <p class="article-date"><?php echo $row["upload_date"];?></p>
                <div class="article-image">
                  <img src="<?php echo $row["gambar_isu"]; ?>">
                  <p class="caption">Anies Baswedan dan Muhaimin Iskandar mendapat nomor urut 1 (satu)(Liputan6.com/Faizal Fanani)</p>
                </div>
                <div class="article-content">
                  <p>
                  <?php echo $row["isu"];?>
                  
                 </p>
                </div>
              </article>
              <?php endwhile; ?>
            </div>
          </main>
        </div>
        <div class="widget">
            <aside id="widget-title">
              <h4>Berita Terbaru Lainnya</h4>
            </aside>
            <aside id="widget-content">
              <a href="#" class="cardcover">
                  <div class="card"></div>
                  <div class="card-content"><p>Anies Ingiin Pimipnan KPK Teken Komitmen Mundur Bila Langgar Kode Etik.</p></div>
              </a>
              <a href="#" class="cardcover">
                <div class="card"></div>
                <div class="card-content"><p>Anies Bicara Anak Muda Sulit Dapat Rumah karena KPR Rumit, Janjikan Perubahan.</p></div>
              </a>
              <a href="#" class="cardcover">
                <div class="card"></div>
                <div class="card-content"><p>Anies Sentil IKN: Bangun Kota di Tengah Hutan Menimbulkan Ketimpangan Baru.</p></div>
              </a>
              <a href="#" class="cardcover">
                <div class="card"></div>
                <div class="card-content"><p>Anies: Capres Ada 3, Tinggal Pilih yang Melanjutkan atau Perubahan.</p></div>
              </a>
            </aside>
        </div>
      </div>
    </div>
 
    <!-- Footer -->
    <footer class="footer">
      <div class="footercontainer">
        <div class="footer-content">
          <img src="..\img\logo-pilpreskini.png" alt="logo-portal" width="120">
          <p style="text-align: start">PilpresKini is a news portal will provide up-to-date coverage of the
            indonesian  presidential  election, as well as in-depth analysis for each candidate</p>
        </div>
        <div class="footer-bottom">
            <div class="footer-social">
              <ul class="social-icons">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
            <p style="text-align: end">copyright © 2023 PilpresKini</p>
        </div>
      </div>
    </footer>
</body>
</html>

<script type="text/javascript" src="js/scriptnav.js"></script>
