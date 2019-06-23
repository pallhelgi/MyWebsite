<template>
    <div class="home">
        <p class="name">Páll Helgi</p>
        <p class="title">Software Developer</p>
        <p class="saying">"All you need to make a great product is a great team!"</p>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.home {
    text-align: center;
    color: lightgrey;
    display: block;
    width: 100%;
    height: 100%;
    padding: 100px 20px 100px 20px;
    background-color: rgb(32, 32, 32);
  }

.name {
    font-size: 20em;
    font-weight: bold;
}

.title {
    font-size: 1.5em;
}

.saying {
    font-style: italic;
}
</style>
