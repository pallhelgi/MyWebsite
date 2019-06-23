<template>
  <div>
    <h4>Interests</h4>
    <div class="interests-container">
      <div class="interests">
        <img src="../assets/frisbee.png" alt="interest1">
      </div>
      <div class="interests">
        <img src="../assets/weightlifting.png" alt="interest2">
      </div>
      <div class="interests">
        <img src="../assets/icon.png" alt="interest3">
      </div>
      <div class="interests">
        <img src="../assets/dices.png" alt="interest4">
      </div>
      <div class="interests">
        <img src="../assets/open-book.png" alt="interest5">
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.interests {
  border: 5px solid lightgray;
  margin: 5px;
  padding: 15px;
}

.interests-container {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
}
</style>
