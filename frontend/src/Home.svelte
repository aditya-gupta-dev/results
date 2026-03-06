<script lang="ts">
  import { Link } from "svelte-routing";
  import Login from "./Login.svelte";
    import { isLoggedIn } from "./store";

</script>

{#if $isLoggedIn}
  <Link to="/results">Results</Link>
{:else}
  <Login />
{/if}

<style>

</style>
