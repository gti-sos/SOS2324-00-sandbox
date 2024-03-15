<script>
    import {onMount} from "svelte";

    let API = "http://localhost:10000/api/v1/contacts";
    let contacts = [];

    onMount(()=>{
        getContacts();   
    })


    async function getContacts(){
        let response =  await   fetch(API,{
                                    method: "GET"
                                });

        let data = await response.json();
        contacts = data;
        console.log(data);

        
    } 


</script>

<ul>
    {#each contacts as contact}
        <li>{contact.name}</li>
    {/each}
    
</ul>
<button on:click="{getContacts}">Refresh</button>