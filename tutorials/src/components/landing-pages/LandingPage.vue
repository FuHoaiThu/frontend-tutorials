<template>
  <section class="page">
    <header>
      <div class="page-header__content">
        <h3 class="page-header__content--title">Onyra</h3>
        <p class="page-header__content--link">
          <a href="" target="_blank">GET STARTED</a>
        </p>
      </div>
    </header>
    <div class="page-content">
      <p>
        HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the
        meaning and structure of web content. Other technologies besides HTML are generally used to
        describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
      </p>
      <p>
        Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a
        document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS
        describes how elements should be rendered on screen, on paper, in speech, or on other media.
      </p>
      <p>
        JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language
        with first-class functions. While it is most well-known as the scripting language for Web
        pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe
        Acrobat. JavaScript is a prototype-based, garbage-collected, dynamic language, supporting
        multiple paradigms such as imperative, functional, and object-oriented.
      </p>
    </div>
  </section>
</template>
<style lang="css" scoped>
.page {
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  header {
    width: 100%;
    height: 100%;
    background: url('../../assets/images/bg1.jpg') no-repeat 50% 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    .page-header__content {
      max-width: 500px;
      margin: auto;
      text-align: center;
      .page-header__content--title {
        color: #f9f3f4;
        font-size: 500%;
        text-shadow: 0 0 300px #000;
      }
      .page-header__content--link {
        border-radius: 9px;
        border: 3px solid #f9f3f4;
        padding: 7px 13px;
        margin-top: 50px;
        cursor: pointer;
        a {
          color: #f9f3f4;
          text-decoration: none;
          font-weight: 700;
        }
        &:hover {
          border-color: #2196f3;
          a {
            color: #2196f3;
          }
        }
      }
    }
  }
  .page-content {
    font-size: 160%;
    line-height: 200%;
    padding: 32px 24px;
    text-align: justify;
    font-family: sans-serif;
    p {
      margin-bottom: 16px;
    }
  }
}
</style>
