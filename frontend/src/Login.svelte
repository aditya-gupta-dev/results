<script lang="ts">
  import axios from "axios";
  import { isLoggedIn, studentData } from "./store";

  let regid: string = "";
  let pass: string = "";

  async function login() {
    studentData.set({ regid, pass });

    const res = await axios.get("/auth", {
      headers: {
        regid: regid,
        pass: pass,
      },
    });

    if (res.status === 200) {
      isLoggedIn.set(true);
    } else { 
      isLoggedIn.set(false);
      studentData.set({});
    }
  }
</script>

<main>
  <input type="number" name="regid" id="regid" bind:value={regid} />
  <input type="password" name="pass" id="pass" bind:value={pass} />
  <button on:click={login}>View Results</button>
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
