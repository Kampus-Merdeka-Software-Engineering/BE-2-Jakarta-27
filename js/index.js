const express = require("express")
const cors = require('cors')
const path = require('path')
const db = require('./db')
const sequelize = require("sequelize")

// init express
const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors())

// const bodyParser = require("body-parser")
// const db = require("./connection")
// const response = require("./response")
// const router = ("./routers/router")
// app.use(bodyParser.json())

const router = express.Router()
router.get('/', function (req, res, next) {
    res.redirect('https://nodejs-production-176d.up.railway.app/static/index.html') 
    // contoh railway kak bintang ini kita harus buat railway sendiri nanti
});

// Home Route
router.get("/home",(req, res) => {
    response(200, "ini data", "ini message", res)
})

// Isu Route
router.get("/isu",(req, res) => {
    response(200, "Berhasil","Berita terupdate capres cawapres", res)
})

// Pilpres Route
router.get("/pilpress",(req, res) => {
    const id_paslon = req.params.id_paslon
    response(200, "Ganjar", `ambil by id ${id_paslon}`, res)
})

// About Route
router.get("/about", (req, res) => {
    response(200, "ketua tim", "BE", res)
})
router.post("/berita",(req, res) => {
    response(200, "Ini berita Pilpres", res)
})

router.put("/berita",(req, res) => {
    response(200, "Update Data", res)
})

router.delete("/berita",(req, res) => {
    response(200, "Delete data", res)
}) 

router.listen(port, () => {
    console.log("Server run well") 
})
 
// Contact route
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});
 
// export default router
export default router;

// http router
app.use('/static', express.static(path.join(__dirname, 'static')))
app.use("/", router);

const port = 3000
app.listen(port, function () {
    db.conn.authenticate()
        .then(function () {
            console.log("Database terhubung")
        })
        .catch(function (err) {
            console.log("Database gagal terhubung karena:", err)
        })
    console.log("server start on", port)
})

// Home page
export const Home = (req, res) => {
    res.send('Welcome to Home Page');
}
 
// About Page
export const About = (req, res) => {
    res.send('Welcome to About Page');
}
 
// Contact page
export const Contact = (req, res) => {
    res.send('Welcome to Contact Page');
}

// Pilpres page
const swiperContainers = document.querySelectorAll('.swiper-container');

      swiperContainers.forEach((container, index) => {
        const accordionContainer = document.getElementById(`accordion-container-${index + 1}`);
        const descriptionElements = accordionContainer.querySelectorAll('.slide-description');
        const accordionContent = accordionContainer.querySelector('.accordion-content');

        const swiper = new Swiper(container, {
          effect: 'cards',
          pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
          },
          spaceBetween: 20,
          loop: true, 
          on: {
            slideChange: function () {
              const activeSlideIndex = this.realIndex;

              descriptionElements.forEach(element => {
                element.classList.remove('active');
              });

              accordionContent.querySelector(`[data-slide-index="${activeSlideIndex}"]`).classList.add('active');
            },
          },
        });
      });