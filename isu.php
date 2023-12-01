<?php
$conn = mysqli_connect("localhost","root" ,"", "berita_capres");
$query = "SELECT * FROM paslon LEFT JOIN isu_paslon ON paslon.id = isu_paslon.id_paslon";

$query2 = "select *  from isu_paslon";
$result = mysqli_query($conn, $query);
$result2 = mysqli_query($conn, $query2);

$rows2 = [];
while ($row2 = mysqli_fetch_assoc($result2)) {
    $rows2[] = $row2;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/isu.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <title>isu</title>
    <script>
      // JavaScript untuk toggle menu responsif
      document.addEventListener("DOMContentLoaded", function () {
          const navCheckbox = document.getElementById("nav-check");
          const navLinks = document.querySelector(".nav-links");

          navCheckbox.addEventListener("change", function () {
              navLinks.style.display = navCheckbox.checked ? "block" : "none";
          });
      });

      // JavaScript untuk memperbarui tahun di footer
      document.addEventListener("DOMContentLoaded", function () {
          const currentYear = new Date().getFullYear();
          const footerYear = document.querySelector(".footer-bottom p");

          footerYear.textContent = `copyright © ${currentYear} PilpresKini`;
      });
  </script>
</head>
<body>
    
<!-- Header -->
<div class="navcontainer" id="navcontainer">
  <div class="nav">
      <input type="checkbox" id="nav-check">
      <div class="nav-header">
          <img src="img\logo-pilpreskini.png" alt="logo-portal" width="75%">
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div> 
      <div class="nav-links">
          <a href="index.php" target="_self">Home</a>
          <a class="navactive" href="isu.php" target="_self">Isu</a>
          <a href="pilpres.php" target="_self">Pilpres</a>
          <a href="about.html" target="_self">About</a>
          <img src="img\logo-km.png" alt="logo-km" width="12%" style="margin-right: 4px;">
          <img src="img\logo-revou.png" alt="logo-revou" width="8%">             
      </div>
  </div>
</div>
<!-- header -->

<!-- Judul -->
<div class="container2">
  <h1>Isu - Isu Ter<span>kini</span></h1>
  <p>Rangkuman Isu -Isu dirangkum secara komprehensif dan informatif untuk</p>
  <p>memudahkan melihat progres masing-masing calon presiden dan wakil</p> 
  <p>presiden 2024</p>
</div>
<!-- judul -->




<!-- konten --> 
<?php while ($row = mysqli_fetch_assoc($result)): ?>
    <div class="container3">
        <div class="subcontainer3">
            <h1>Seputar <span><?php echo $row["nama"] ?></span></h1>
            <a href="">lihat lebih banyak</a>
        </div>
        <div class="continerberita">
            <?php
            foreach ($rows2 as $row2):
            if ($row2["id_paslon"] == $row["id"]): ?>
                    <div class="berita">
                        <div class="card"><a href=""><img src="<?= $row['gambar_isu'];?>" alt="anies"></a></div>
                        <div class="konten">
                            <a href="berita_paslon.php/?id=<?= $row['id'];?>&judul=<?= $row['title_isu'];?>">
                                <h1> <?php echo $row2["title_isu"]?> </h1>
                                <p><?php echo $row2["title_isu"] ?></p>
                            </a>
                        </div>
                    </div>
            <?php endif; endforeach;?>
        </div>
    </div>
<?php endwhile; ?>
</body>
<!-- konten -->

<!-- Fotter -->
<footer class="footer">
  <div class="footercontainer">
    <div class="footer-content">
      <img src="img\logo-pilpreskini.png" alt="logo-portal" width="120">
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
</div>
</footer>
</html>
