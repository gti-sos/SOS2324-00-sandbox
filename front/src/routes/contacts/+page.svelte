<script>
    import {onMount} from "svelte";
    import { dev } from "$app/environment";
    import { Button, Col, Row } from '@sveltestrap/sveltestrap';


    let API = "/api/v1/contacts";

    if(dev)
        API = "http://localhost:10000"+API;
    
    let contacts = [];
    let newContact = { name: "name", phone: "12345"};
    let errorMsg="";

    onMount(()=>{
        getContacts();   
    })


    async function getContacts(){
        try{
            let response =  await   fetch(API,{
                                        method: "GET"
                                    });

            let data = await response.json();
            contacts = data;
            console.log(data);
        }catch(e){
            errorMsg = e;
        } 
    } 


    async function deleteContact(n){

        console.log(`Deleting contact with name ${n}`);

        try{
            let response =  await   fetch(API+"/"+n,{
                                        method: "DELETE"
                                    });
            
            if(response.status == 200)
                getContacts();
            else
                errorMsg = "code:"+response.status;
            
        }catch(e){
            errorMsg = e;
        } 
    } 


    async function createContact(){
        
        try{
            let response =  await   fetch(API,{
                                    method: "POST",
                                    headers:{
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(newContact)
                                });

            let status = await response.status;
            console.log(`Creation response status ${status}`);
            if(status == 201)
                getContacts();
            else
                errorMsg = "code:"+status;

    
        }catch(e){
            errorMsg = e;
        } 
    }

</script>

<table>
    <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                Phone
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <input bind:value={newContact.name}>
            </td>
            <td>
                <input bind:value={newContact.phone}>
            </td>
        </tr>            
    </tbody>
</table>

<ul>
    {#each contacts as contact}
        <li><a href="/contacts/{contact.name}">{contact.name}</a> {contact.phone} <button on:click="{deleteContact(contact.name)}">Delete</button></li>
    {/each}
    
</ul>
<button on:click="{createContact}">Create</button>

<Button color="primary" outline>Hello World!</Button>


{#if errorMsg != ""}
<hr>
ERROR: {errorMsg}
{/if}