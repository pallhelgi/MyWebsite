<template>
  <div class="portfolio-container">
    <h1>Portfolio</h1>
    <div class="portfolios">
      <div class="portfolio">
        <img src="../assets/CodeCat.png" alt="Portfolio1">
      </div>
      <div class="portfolio">
        <img src="../assets/launaradur.png" alt="Portfolio2">
      </div>
      <div class="portfolio">
        <img src="#" alt="Portfolio3">
      </div>
      <div class="portfolio">
        <img src="#" alt="Portfolio4">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.portfolio-container {
  padding: 15px 200px 50px 200px;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(32, 32, 32);
  color: lightgray;
}

.portfolio {
  border: 5px solid lightgray;
  margin: 5px;
  padding: 15px;
  height: 500px;
}

.portfolios {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 100%;
  height: auto;
}
</style>


