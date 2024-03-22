<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import { Styles } from '@sveltestrap/sveltestrap';

</script>

<svelte:head>
	<title>Contact Manager</title>
</svelte:head>

<Header/>
<h1>Contact Manager</h1>
<hr>
<slot></slot>
<hr>
<Footer/>
  
<Styles />
