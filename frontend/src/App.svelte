<script lang="ts">
</script>

<main>
  <form action="/assets" method="post">
    <input type="number" name="regid" id="regid"/>
    <input type="password" name="pass" id="pass" />
    <button type="submit">
      Login
    </button>
  </form>
</main>

<style>
  main {
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    background-color: bisque;
  }
</style>
