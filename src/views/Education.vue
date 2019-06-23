<template>
  <div>
    <h4>Education</h4>
    <div class="education-container">
      <div class="education">
        <h5>Computer Science</h5>
        <p>I graduated from Computer Science in February 2019</p>
      </div>
      <div class="education">
        <h5>Business Management</h5>
        <p>I graduated from Computer Science in February 2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">

.education-container {
  display: grid;
  grid-template-columns: 50% 50%;
}
.education {
  border: 5px solid lightgray;
  margin: 5px;
  padding: 15px;
}
</style>
