<template>
  <div id="about" class="about-container">
    <h1>About me</h1>
    <div class="about-me">
      <div class="image">
        <img src="../assets/pall_helgi_sigurdarson_litur_1.jpg">
      </div>
      <div class="about-me-text">
        <p>Programmer, Agile enthusiast, positive, people person, organized, ultimate Frisbee player, board game player, book reader.</p>
        <p>I am a Computer Scientist and Business Administrator with focus on management and leadership who is currently hyped on software development using Agile methodologies. All you need to make a great product is a great team!</p>
        <p>Experienced software developer (C, C++, C#, Java, Python, JavaScript, Angular, NodeJS .Net, .Net Core, GraphQL, SQL and more!).</p>
      </div>
    </div>
    <div>
      <Education/>
    </div>
    <div>
      <Experience/>
    </div>
    <div>
      <Interests/>
    </div>
  </div>
</template>

<script>
import Education from './Education'
import Experience from './Experience'
import Interests from './Interests'

export default {
  name: 'about',
  components: {
    Education,
    Experience,
    Interests
  }
}
</script>

<style scoped lang="scss">
.about-container {
  padding: 15px 200px 15px 200px;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(43, 43, 43);
  color: lightgrey;
}

.image {
  float: left;
  padding-right: 15px;
  padding-top: 8px;
}

.about-me {
  padding-bottom: 2px;
  margin: 5px;
}
</style>
