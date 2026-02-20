<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";

    let s = ""

    onMount(async () => { 
        const res = await axios.post("/get-results", { 
            regid: "123132", 
            pass: "something" 
        }); 
        
        s = `${res.status} ${res.data}`
    })
</script>

<h1>This is results page</h1>

<p>{ s }</p>