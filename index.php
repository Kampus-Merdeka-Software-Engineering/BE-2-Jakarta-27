<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Home</title>

    <!-- Fav icons -->
    <script src="https://kit.fontawesome.com/46b7ceee20.js" crossorigin="anonymous"></script>
    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet">
    <!-- CSS --> 
    <link href="css/index.css" rel="stylesheet" />
    <link href="css/nav-end.css" rel="stylesheet" />
</head>

<body>
    <!-- Navbar / Header -->
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
              <a class="navactive" href="index.php" target="_self">Home</a>
              <a href="isu.php" target="_self">Isu</a>
              <a href="pilpres.php" target="_self">Pilpres</a>
              <a href="about.html" target="_self">About</a>
              <img src="img\logo-km.png" alt="logo-km" width="12%" style="margin-right: 4px;">
              <img src="img\logo-revou.png" alt="logo-revou" width="8%">             
          </div>
      </div>
  </div>

    <!--Landing page-->
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade">
        <img src="img/image-1.jpg" style="width:100%">
        <div class="text">Caption Text</div>
      </div> 
      <div class="mySlides fade">
        <img src="img/image-2.jpg" style="width:100%">
        <div class="text">Caption Two</div>
      </div>   
      <div class="mySlides fade">
        <img src="img/image-3.jpg" style="width:100%">
        <div class="text">Caption Three</div>
      </div>
      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      <!-- The dots/circles -->
      <div class="dotgroup">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div>
    </div>
    <br>
    <br>  
    <br>
    <br>
      
        <div class="content">
          <div>
          <h1>Berita ter<span style="color: #E23D2A;">Kini</span></h1>
          </div>
          <p>Update berita hari Selasa, 31 Oktober 2023</p>
          <p>Seputar Pilpres 2024</p>
        </div>
        <br>
        <br>
        <br>

        <section id="section1">
          <div class="bigcard">
            <div>
              <img src="img/jk.jpg" class="jk">
              <div class="jk-overlay"></div>
            </div>
            <div class="bigcard-text">
              <p>Hot News</p>
              <h4>Makan Siang Jokowi Bersama 3 Capres</h4>
            </div>
          </div>
          <article>
              <div class="baca">
                <h4>Baca Lainnya</h4>
              </div>
              <div class="card-container">
                <div id="forweb">
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Jokowi Ingatkan Netralitas ASN Jelang Pemilu 2024.</p>
                    </div>
                  </a>
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Paloh soal Jokowi Makan Bareng 3 Capres: Bagus, Itulah Fungsi Presiden.</p>
                    </div>
                  </a>
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Isu Jabatan Presiden 3 Periode Muncul Lagi, Hashim-Ganjar Ikut Tanggapi.</p>
                    </div>
                  </a>
                </div>
                <div id="formobile">
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Jokowi Ingatkan Netralitas ASN Jelang Pemilu 2024.</p>
                    </div>
                  </a>
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Paloh soal Jokowi Makan Bareng 3 Capres: Bagus, Itulah Fungsi Presiden.</p>
                    </div>
                  </a>
                  <a href="isu.html" class="card">
                    <img src="img/image-1.jpg" alt="Card Image">
                    <div class="card-content">
                      <p>Isu Jabatan Presiden 3 Periode Muncul Lagi, Hashim-Ganjar Ikut Tanggapi.</p>
                    </div>
                  </a>
                </div>
              </div>
          </article>
        </section> 
  <br>

  <button href="isu.html" class="more_btn">Selengkapnya</button>
    <br>
    <br>
    <br>
    <br>

   
    <section id="section2">
      <div class="sec2-container">
        <div class="sec2-title">
          <h1>Survey Pengunjung Pilpres<span style="color: #E23D2A;">Kini</span></h1>
          <p>Menurut-Mu siapa kandidat yang paling berpotensi memenangkan pemilihan presiden 2024?</p>
        </div>
        <form id="vote-form">
          <!-- <label for="candidate-input" style="color: #E23D2A;">Voting di sini:</label> -->
          <select id="candidate-input">
            <option value="Candidate A">Anies - Amin</option>
            <option value="Candidate B">Prabowo - Gibran</option>
            <option value="Candidate C">Ganjar - Mahfud</option>
          </select>
      
          <button id="submit" type="submit">Pilih</button>
        </form>
      
        <button id="results-button">Display Results</button>
      </div>
    </section>
 
    <!-- Footer -->
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
</body>
</html>

<script type="text/javascript" src="js/scriptnav.js"></script>
<script type="text/javascript" src="js/index.js"></script>

<script>
  const candidates = ["Candidate A", "Candidate B", "Candidate C"];
let votes = {
  "Candidate A": 0,
  "Candidate B": 0,
  "Candidate C": 0,
};

function castVote(candidate) {
  if (!candidates.includes(candidate)) {
    console.error("Invalid candidate:", candidate);
    return;
  }

  votes[candidate]++;
  console.log("Your vote has been cast for", candidate);
}

function displayResults() {
  for (const [candidate, voteCount] of Object.entries(votes)) {
    console.log(candidate, ":", voteCount, "votes");
  }
}

const voteForm = document.getElementById("vote-form");
voteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const candidateInput = document.getElementById("candidate-input");
  const selectedCandidate = candidateInput.value;

  castVote(selectedCandidate);

  candidateInput.value = "";
});

const resultsButton = document.getElementById("results-button");
resultsButton.addEventListener("click", () => {
  displayResults();
});
</script>
