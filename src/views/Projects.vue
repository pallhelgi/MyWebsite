<template>
  <div class="projects-wrapper">
    <h1 class="title">Projects</h1>
    <div class="projects">
      <a href="https://skemman.is/handle/1946/32320"> 
      <div class="project-wrapper">
        <div class="project">
          <h1>B.sc project: Launaráður</h1>
          <p>Equal Pay Analysis Program</p>
        </div>
      </div>
      </a>
      <a href="https://github.com/pallhelgi/codecat">
        <div class="project-wrapper">
          <div class="project">
            <h1>CodeCat</h1>
            <p>Online collaborative coding program</p>
          </div>
        </div>
      </a>
      <a href="https://skemman.is/handle/1946/32099">
        <div class="project-wrapper">
          <div class="project">
            <h1>B.sc thesis: Scrum</h1>
            <img src="../assets/scrumframework.png" alt="">
          </div>
        </div>
      </a>
      <a href="https://github.com/pallhelgi/MyWebsite">
        <div class="project-wrapper">
          <div class="project">
            <h1>My Website</h1>
            <p>This Website</p>
            <p>Work in process</p>
          </div>
        </div>
      </a>
      <a v-on:click="$emit('toggleGroupToParent')">
        <div class="project-wrapper" >
          <div class="project">
            <h1>Supergroup</h1>
            <p>Site for my D&amp;D group</p>
            <p>Work in process</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      toggleGroupToParent(event) {
        this.$emit('toggleSupergroup')
      }
  }
}
</script>

<style scoped lang="scss">
  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .projects-wrapper {
    width: 60%;
    margin: auto;
  }

  .projects {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 33.3333% 33.3333% 33.3333%;
    grid-column-gap: 6%;
    grid-row-gap: 10%;
    margin-top: 50px;
    margin-bottom: 150px;
    padding-bottom: 100px;
  }

  .project-wrapper {
    background: #C4C4C4;
    height: 300px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .project-wrapper:hover {
    box-shadow: none;
  }

  .project {
    background: white;
    height: 300px;
    width: 80%;
    margin: auto;
    text-align: center;
    padding-top: 15px;
  }

  .title {
    padding-top: 100px;
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  p {
    font-size: 30px;
  }
</style>
