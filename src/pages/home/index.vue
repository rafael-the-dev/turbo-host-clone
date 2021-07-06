<template>
    <div>
        <cabecalho />
        <main class="relative">
            <highlight />
            <ajuda />
            <promo />
            <vantagem />
            <planos />
            <services />
            <suporte />
        </main>
        <rodape />
    </div>
</template>
<script>
    import cabecalho from './header';
    import highlight from './highlight';
    import promo from './promo';
    import vantagem from './vantagem';
    import ajuda from './ajuda';
    import services from './services';
    import suporte from './suporte';
    import planos from './planos';
    import rodape from './footer';

    export default {
        components: {
            cabecalho,
            highlight,
            promo,
            vantagem,
            planos,
            ajuda,
            services,
            suporte,
            rodape
        }
    }
</script>