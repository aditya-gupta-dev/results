<script lang="ts">
  let counter = 0;
  import { Route, Router } from "svelte-routing";
    import Results from "./Results.svelte";
    import Home from "./Home.svelte";
</script>

<Router>
  <Route path="/"><Home/></Route>
  <Route path="/results" component={Results}/>
</Router>

