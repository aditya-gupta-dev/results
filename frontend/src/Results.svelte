<script lang="ts">
    import { beforeUpdate } from "svelte";

    let s = ""

    beforeUpdate(async () => { 
        const res = await fetch("/get-results", { 
            method: "POST", 
            headers: { 
                "Content-Type": "applicaton/json"
            },
            body: JSON.stringify({
                "regid": 12321, 
                "pass": "aspk"
            })
        }); 
        
        if (res.ok) { 
            s = await res.text(); 
        } else { 
            s = "failed"; 
        }
    })
</script>

<h1>This is results page</h1>

<p>{ s }</p>