<script>
    import { page } from '$app/stores';
    const { productId } = $page.params;
</script>

<h1>제품{productId} 페이지 입니다.</h1>

<a href="/products">제품리스트로 이동</a>