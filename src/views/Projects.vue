<template>
  <div class="projects-wrapper">
    <h1>Projects</h1>
    <div class="projects">
      <div class="project">
        
      </div>
      <div class="project">
        
      </div>
      <div class="project">
        
      </div>
      <div class="project">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
  .projects-wrapper {
    width: 60%;
    margin: auto;
  }

  .projects {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-column-gap: 6%;
    grid-row-gap: 10%;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-bottom: 100px;
  }

  .project {
    background: #C4C4C4;
    height: 300px;
    width: 100%;
  }

  h1 {
    padding-top: 100px;
  }
</style>
