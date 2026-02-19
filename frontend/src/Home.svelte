<script lang="ts">
    import { Link } from "svelte-routing";

  let isLoggedIn = false;
</script>

{#if isLoggedIn}
  <main>
      <input type="number" name="regid" id="regid" />
      <input type="password" name="pass" id="pass" />
      <button on:click={() => isLoggedIn = true}>View Results</button>
  </main>
{:else}
  <Link to="/results">Results</Link>
{/if}

<style>
  main {
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    background-color: bisque;
  }
</style>
