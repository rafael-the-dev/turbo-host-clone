<template>
    <section class="align-start bg-blue flex flex-column justify-start no-repeat px-4
        contain width-100 highlight">
        <div class="width-100 highlight__content">
            <p class="align-center flex justify-start highlight__announcement">
                <span class="fas fa-bell align-center justify-center flex
                highlight__announcement--icon"></span>
                <span>gratis em todos os planos de hospedagem web</span>
            </p>
            <h1 class="highlight__title">Registo de dominio e hospedagem web</h1>
            <p class="highlight__description">
                Melhor plataforma para hospedagem de sites, garantia de 99,9% de tempo
                de actividade, certificado SSL gratuito, instalacao, facil de WordPress.
            </p>
            <router-link class="bg-yellow inline-block highlight__link no-underline"
                :to="{ name: 'Home' }">
                Ver planos de Hospedagem
            </router-link>
        </div>
    </section>
</template>
<style scoped>
    @keyframes ripples {
        from {
            border: 1px solid transparent;
        }
        to {
            opacity: 0;
            border: 20px solid #fff;
        }
    }

    .highlight {
        background-image: url('../../../static/hero-home.svg');
        background-position: bottom;
        background-size: 93%;
        height: 780px;
        padding-top: 20px;
    }

    .highlight__content {
        color: var(--white);
    }

    .highlight__announcement {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 18px;
        font-size: .95rem;
        margin-bottom: 1.5rem;
        padding: 0 1rem 0 0;
        width: 87%;
        float: left;
        display: flex;

    }

    .highlight__announcement--icon {
        background-color: #7ec1e9;
        border-radius: 50%;
        height: 30px;
        margin-right: 11px;
        width: 30px;
        position: relative;
    }

    .highlight__announcement--icon::after {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        border-radius: 50%;
        animation: ripples 1.5s linear infinite;
    }

    .highlight__title {
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 2.8rem;
    }

    .highlight__description {
        font-size: 1.1rem;
        line-height: 2rem;
        margin-top: 18px;
    }

    .highlight__link {
        font-size: 1.09rem;
        line-height: 2rem;
        margin-top: 25px;
        background-color: var(--yellow);
        border-radius: 6px;
        color: inherit;
        font-weight: 500;
        padding: .6rem 1.5rem;
        text-transform: capitalize; 
    }

    @media  screen and (min-width: 510px) {
        .highlight {
            background-position: 85% center;
            background-size: 40%;
            justify-content: center;
            height: 620px;
            padding-left: 8%;
            padding-right: 8%;
        }

        .highlight__content {
            transform: translateY(-30px);
            width: 45%;
        }

        .highlight__announcement {
            font-size: 1.03rem;
            width: 80%;
        }

        .highlight__title {
            font-size: 3rem;
            line-height: 3.7rem;
        }

        .highlight__description {
            font-size: 1.2rem;
        }
    }
</style>