<template>
  <div class="about-wrapper">
    <div class="about">
      <div class="about-image-text">
        <h1>About me</h1>
        <div class="image-text-grid">
          <div class="image">
            <img src="../assets/pall_helgi_sigurdarson_litur_1.jpg" alt="picture" width="200" height="266">
          </div>
          <div class="text">
            <p>My name is Páll. I graduated with degrees in Computer Science from Reykjavík University and Business Management from University of Iceland in 2019. I’m currently looking for new opportunities as a Software Developer with backend focus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
  .about-wrapper {
    background: #F0F0F0;
  }

  .about {
    width: 60%;
    margin: auto;
  }

  .about-image-text {
    font-family: sans-serif;
    padding-top: 250px;
    padding-bottom: 250px;
  }

  .image-text-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 6%;
  }
  
  h1 {
    margin: 0 0 15px 0;
  }

  img {
    margin-top: 13px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
  }
</style>
