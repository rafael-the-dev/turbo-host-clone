<template>
    <section class="align-start flex flex-column justify-start no-repeat px-4
        bg-blue vantagem">
        <div class="vantagem__content">
            <h2 class="vantagem__title">Por que escolher a TurboHost para hospedar meu site?</h2>
            <p class="vantagem__description">
                Garanta sua presença online: domínio grátis, criador de site, email e 
                muito mais ...!
            </p>
            <router-link class="bg-yellow no-underline inline-block vantagem__link"
                :to="{ name: 'Home'}">
                Escolher um plano
            </router-link>
        </div>
    </section>
</template>
<style scoped>
    .vantagem {
        background-image: url('../../../static/server-room.svg');
        background-position: bottom;
        background-size: 89%;
        height: 680px;
        padding-top: 20px;
    }

    .vantagem__content {
        color: var(--white);
    }

    .vantagem__title {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
    }

    .vantagem__description {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-top: 18px;
    }

    .vantagem__link {
        font-size: 1.01rem;
        line-height: 2rem;
        margin-top: 25px;
        background-color: var(--yellow);
        border-radius: 6px;
        color: inherit;
        font-weight: 500;
        padding: .4rem 1.1rem;
        text-transform: capitalize; 
    }

    @media screen and (min-width: 501px) {
        .vantagem {
            background-position: 85% center;
            background-size: 26%;
            justify-content: center;
            height: 420px;
            padding-left: 8%;
            padding-right: 8%;
        }

        .vantagem__content {
            text-align: left;
            width: 45%;
        }

        .vantagem__title {
            font-size: 2.3rem;
        }
    }
</style>