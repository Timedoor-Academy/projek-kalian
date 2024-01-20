<template>
  <div>
    <header>
      <app-header></app-header>
    </header>
    <main>
      <div class="container">
        <div class="title">
          <h1>NOW SHOWING IN CINEMAS</h1>
        </div>
        <div class="movies">
          <div class="movie-detail">
            <img src="./assets/movie1.jpg" alt="Movie">
            <p>INANG</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie2.jpg" alt="Movie">
            <p>KALIAN PANTAS MATI</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie3.jpg" alt="Movie">
            <p>HALLOWEEN ENDS</p>
          </div>
          <div class="movie-detail">
            <img src="./assets/movie4.jpg" alt="Movie">
            <p>PAMALI</p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-data">
              <h1>TIK.ET</h1>
              <p>
                Best App For Movie Lovers In Indonesia! Movie Entertainment
                Platform From Cinema To Online Movie Streaming Selections.
              </p>
            </div>
            <div class="footer-data">
              <ul type="none">
                <li><a href="#">HOME</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">CAREERS</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">TERMS & CONDITIONS</a></li>
              </ul>
            </div>
            <div class="footer-data">
              <div class="footer-socials-text">
                <p>TIK.ET SUPPORT</p>
                <p class="info-email">E-MAIL : HELP@TIK.ET</p>
              </div>
              <ul type="none" class="footer-socials">
                <li>
                  <a href="#">
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <p>2022 TIK.ET - PT MOVIE TIKET. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  
</script>

<style>
body {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

header {
  position: sticky;
  top: 0px;
  background-color: white;
}

.container {
  margin-left: 200px;
  margin-right: 200px;
}

/* Now Showing */
.movies {
  display: flex;
  justify-content: center;
}

.movie-detail img {
  border-radius: 20px;
  width: 230px;
  height: 350px;
}

.movie-detail {
  margin: 7px;
}

.movie-detail p {
  margin-top: 15px;
  font-weight: 1000;
}

.title h1 {
  font-size: 25px;
}

/* Footer */

.footer-copyright {
  padding-top: 8px;
  padding-bottom: 5px;
  background-color: #04009a;
}

.footer-copyright p {
  padding-bottom: 10px;
  margin-bottom: 0px;
  text-align: center;
}
.footer {
  background-color: #03045e;
  margin-bottom: 0px;
}

.footer,
.footer ul li a {
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer-content .footer-data {
  width: 30%;
}

.footer-data ul li {
  padding-top: 2px;
  padding-bottom: 2px;
}

.footer-socials {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
}

.footer-socials li {
  margin-right: 20px;
}

.footer-socials-text {
  padding: 20px;
}

.footer-socials-text p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.info-email {
  font-size: 13px;
}
</style>
