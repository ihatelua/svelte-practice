<script>
    import { page } from '$app/stores';
    const slugArr = $page.params.slugs.split('/');

    console.log($page.params);
    const { lang } = $page.params;
</script>

{#if lang === "ko"}
    <!-- content here -->

    {#if slugArr.length === 1}
        <h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
    {:else if slugArr.length === 2}
        <h1>Docs 페이지 ; 주제 {slugArr[1]} ; 소주제 {slugArr[1]}</h1>
    {/if}
{:else if lang === "en"}
    <!-- content here -->

    {#if slugArr.length === 1}
        <h1>Docs Page ; Content {slugArr[0]}</h1>
    {:else if slugArr.length === 2}
        <h1>Docs Page ; Content {slugArr[1]} ; Small Content {slugArr[1]}</h1>
    {/if}
{:else}
    {#if slugArr.length === 1}
        <h1>Docs 페이지 ; 주제 {slugArr[0]}</h1>
    {:else if slugArr.length === 2}
        <h1>Docs 페이지 ; 주제 {slugArr[1]} ; 소주제 {slugArr[1]}</h1>
    {/if}
{/if}

