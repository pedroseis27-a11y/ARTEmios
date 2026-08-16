# ARTEmios
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ARTEmios — Tu espacio para crear</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Georgia, "Times New Roman", serif;
      background: #f5f0e6;
      color: #3f3a32;
      line-height: 1.6;
    }

    header {
      background: #fffdf8;
      border-bottom: 1px solid #ddd5c7;
      padding: 22px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .logo {
      font-size: 28px;
      letter-spacing: 1px;
      font-weight: bold;
      color: #756246;
    }

    nav a {
      color: #5d5548;
      text-decoration: none;
      margin-left: 25px;
      font-size: 15px;
    }

    nav a:hover {
      color: #9b8050;
    }

    .hero {
      min-height: 72vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 60px 20px;
    }

    .hero-content {
      max-width: 750px;
    }

    .hero h1 {
      font-size: clamp(55px, 12vw, 110px);
      letter-spacing: 5px;
      color: #756246;
      margin-bottom: 15px;
    }

    .hero p {
      font-size: 21px;
      color: #777064;
      margin-bottom: 35px;
    }

    .button {
      display: inline-block;
      padding: 13px 28px;
      background: #756246;
      color: white;
      text-decoration: none;
      border-radius: 30px;
      transition: 0.25s;
    }

    .button:hover {
      background: #5e503b;
      transform: translateY(-2px);
    }

    section {
      padding: 80px 7%;
    }

    .section-title {
      text-align: center;
      font-size: 38px;
      color: #756246;
      margin-bottom: 45px;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 22px;
      max-width: 1200px;
      margin: auto;
    }

    .art-card {
      background: #fffdf8;
      border: 1px solid #ded7ca;
      border-radius: 14px;
      overflow: hidden;
      transition: 0.3s;
    }

    .art-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(70, 60, 45, 0.12);
    }

    .art-placeholder {
      height: 280px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ebe4d7;
      color: #928775;
      font-size: 18px;
    }

    .art-info {
      padding: 18px;
    }

    .art-info h3 {
      color: #625541;
      margin-bottom: 4px;
    }

    .art-info p {
      color: #8a8377;
      font-size: 14px;
    }

    .about {
      background: #fffdf8;
      text-align: center;
    }

    .about-content {
      max-width: 700px;
      margin: auto;
      color: #716b61;
      font-size: 17px;
    }

    footer {
      text-align: center;
      padding: 35px 20px;
      color: #8b8376;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      header {
        padding: 18px 5%;
      }

      nav a {
        margin-left: 10px;
        font-size: 13px;
      }

      .hero {
        min-height: 65vh;
      }

      section {
        padding: 60px 5%;
      }
    }
  </style>
</head>

<body>

  <header>
    <div class="logo">ARTEmios</div>

    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#galeria">Galería</a>
      <a href="#sobre">Sobre nosotros</a>
    </nav>
  </header>

  <main>

    <section class="hero" id="inicio">
      <div class="hero-content">
        <h1>ARTEmios</h1>

        <p>
          Un espacio para crear, compartir y disfrutar del arte.
        </p>

        <a href="#galeria" class="button">
          Explorar galería
        </a>
      </div>
    </section>


    <section id="galeria">

      <h2 class="section-title">
        Galería
      </h2>

      <div class="gallery">

        <article class="art-card">
          <div class="art-placeholder">
            Tu dibujo aquí
          </div>

          <div class="art-info">
            <h3>Obra 01</h3>
            <p>Por ARTEmios</p>
          </div>
        </article>


        <article class="art-card">
          <div class="art-placeholder">
            Tu dibujo aquí
          </div>

          <div class="art-info">
            <h3>Obra 02</h3>
            <p>Por ARTEmios</p>
          </div>
        </article>


        <article class="art-card">
          <div class="art-placeholder">
            Tu dibujo aquí
          </div>

          <div class="art-info">
            <h3>Obra 03</h3>
            <p>Por ARTEmios</p>
          </div>
        </article>


        <article class="art-card">
          <div class="art-placeholder">
            Tu dibujo aquí
          </div>

          <div class="art-info">
            <h3>Obra 04</h3>
            <p>Por ARTEmios</p>
          </div>
        </article>

      </div>
    </section>


    <section class="about" id="sobre">

      <h2 class="section-title">
        Sobre ARTEmios
      </h2>

      <div class="about-content">
        <p>
          ARTEmios nace como un espacio para todas aquellas personas
          que encuentran en el arte una forma de expresarse.
        </p>

        <br>

        <p>
          Dibujar, pintar, experimentar o simplemente disfrutar
          de una obra: aquí todo tiene un lugar.
        </p>
      </div>

    </section>

  </main>


  <footer>
    © 2026 ARTEmios · Un espacio para el arte
  </footer>

</body>
</html>
