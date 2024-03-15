<script>
    import { dev } from "$app/environment";
    let mode = "poduction";

    if(dev)
        mode = "development";
</script>

This is the contact manager app in {mode} mode

