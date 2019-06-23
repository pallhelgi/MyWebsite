<template>
  <div>
    <h4>Experience</h4>
    <div class="experience-container">
      <div class="experience">
        <h5>Scrum Master</h5>
        <p>During my final project in Computer Science I served my team as a scrum master</p>
      </div>
      <div class="experience">
        <h5>Data Collector</h5>
        <p>I worked breifly as a data collector at Statistic Iceland at the beginning of 2018</p>
      </div>
      <div class="experience">
        <h5>Technical Service Representative</h5>
        <p>From the year 2008 to the year 2016 I worked as a technical service respresentative at the icelandic telecomunication company Siminn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.experience {
  border: 5px solid lightgray;
  margin: 5px;
  padding: 15px;
}

.experience-container {
  display: grid;
  grid-template-columns: 33.333% 33.333% 33.333%;
  padding-top: 15px 0 15px 0;
}
</style>
