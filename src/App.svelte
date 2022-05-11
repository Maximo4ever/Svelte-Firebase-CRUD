<script>
  import { addDoc, collection, onSnapshot } from "firebase/firestore";
  import { onDestroy } from "svelte";
  import { db } from "./firebase";

  let task = {
    title: "",
    description: "",
  };
  let tasks = [];

  const handleSubit = async () => {
    // Añadir documento: (db, nombre de la collecion), dato a agregar.
    await addDoc(collection(db, "tasks"), task);
  };
  const unsub = onSnapshot(
    collection(db, "tasks"),
    (querySnapshot) => {
      tasks = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(tasks);
    },
    (err) => {
      console.log(err);
    }
  );

  // Antes de que componente se desmonte, quita el escucha
  onDestroy(unsub);
</script>

<main>
  <form on:submit|preventDefault={handleSubit}>
    <label for="title">Title</label>
    <input bind:value={task.title} type="text" placeholder="Write a title" />

    <label for="description">Description</label>
    <textarea
      bind:value={task.description}
      id="description"
      rows="3"
      placeholder="Write a description"
    />
    <button>Save</button>
  </form>

  {#each tasks as task}
    <div>
      <h5>{task.title}</h5>
      <p>{task.description}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  {/each}
</main>

<style>
</style>
