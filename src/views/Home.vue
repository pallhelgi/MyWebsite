<template>
  <div class="home-wrapper">
      <div class="home">
          <div class="name-title-wrapper">
              <div>
                <p class="name">
                    Páll <br>
                    Helgi <br>
                    Sigurðarson <br> 
                </p>
                <p class="title">Software Developer</p>
              </div>
              <div class="saying-wrapper">
                  <p class="saying">"All you need is a great <strong>team</strong> to create a great product!"</p>
              </div>
          </div>
          <div class="arrow-down">
              <img src="../assets/arrowdown.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    .home-wrapper {
        background: white;
    }
    .home {
        width: 60%;
        margin: 100px auto auto auto;
    }

    .name-title-wrapper {
        width: 100%;
        height: 750px;
        display: flex;
        align-items: center;
        font-family: sans-serif;
    }

    .name {
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
    }

    .title {
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
    }

    .saying-wrapper {
        float: right;
        width: 100%;
    }
    .saying {
        width: 50%;
        font-style: italic;
        font-weight: normal;
        font-size: 25px;
        float: right;
    }

    img {
        display: block;
        margin: auto;
        height: 40px;
        margin-bottom: 10px;
    }
</style>
