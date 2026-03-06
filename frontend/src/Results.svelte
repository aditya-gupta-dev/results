<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import type { StudentResult } from "./models";
  import { studentData } from "./store";

  let result: StudentResult | null = null;
  let loading = true;
  let error: string | null = null;

  onMount(async () => {
    if ($studentData) {
      const { regid, pass } = $studentData;
      try {
        const res = await axios.post<StudentResult>("/get-results", {
          regid: regid,
          pass: pass,
        });

        result = res.data;
      } catch (err: any) {
        error =
          err?.response?.data?.message || err.message || "Something went wrong";
      } finally {
        loading = false;
      }
    } else { 
      loading = false; 
      error = "failed to fetch results"; 
    }
  });
</script>

<h1>This is results page</h1>

{#if loading}
  <p>Loading...</p>
{:else if error}
  <p style="color:red;">Error: {error}</p>
{:else if result}
  <h2>{result.name}</h2>

  <table border="1">
    <thead>
      <tr>
        <th>Subject Code</th>
        <th>Marks</th>
        <th>Max Marks</th>
      </tr>
    </thead>

    <tbody>
      {#each result.subjects as subject}
        <tr>
          <td>{subject.subject_code}</td>
          <td>{subject.marks}</td>
          <td>{subject.maxMarks}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
