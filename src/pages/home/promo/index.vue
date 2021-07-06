<template>
    <section class="align-center text-center flex flex-column px-4 width-100 promo">
        <h2 class="promo__title">
            Motivos para escolher a Turbohost como sua hospedagem favorita.
        </h2>
        <p class="promo__description">
            A TurboHost tem tudo para você garantir sua presença online: 
            registo de domínio, alojamento web, criador de site, e-mail 
            profissional e muito mais...
        </p>
        <div class="align-stretch flex flex-column justify-between width-100 promo__division">
            <article class="relative text-center width-100 promo__card">
                <div class="relative block height-100 width-100 card__body">
                    <span class="fa fa-clock card__icon"></span>
                    <h3 class="card__title">Uptime 99,9%</h3>
                    <p class="card__description">
                        A disponibilidade do seu site é uma de nossas prioridades. 
                        Escolha seu plano e conte com a garantia de 99,9% de uptime 
                        para seu site.
                    </p>
                </div>
                <div class="card__effect absolute"></div>
            </article>
            <article class="relative text-center width-100 promo__card">
                <div class="relative block height-100 width-100 card__body">
                    <span class="fa fa-headset card__icon"></span>
                    <h3 class="card__title">Suporte 24/7</h3>
                    <p class="card__description">
                        Profissionais especializados focados em lhe apoiar sempre 
                        que precisar, a qualquer hora , de dia ou de noite.
                    </p>
                </div>
                <div class="card__effect absolute"></div>
            </article>
            <article class="relative text-center width-100 promo__card">
                <div class="relative block height-100 width-100 card__body">
                    <span class="fa fa-coins card__icon"></span>
                    <h3 class="card__title">Planos Acessíveis</h3>
                    <p class="card__description">
                        Temos o plano de hospedagem na web certo para você, 
                        quer seja uma grande empresa corporativa ou esteja 
                        procurando configurar seu primeiro blog Wordpress.
                    </p>
                </div>
                <div class="card__effect absolute"></div>
            </article>
        </div>
    </section>
</template>
<style scoped>
    .promo{
        margin-top: 6rem;
        padding-bottom: 2rem;
        padding-top: 2rem;
    }

    .promo__title {
        font-size: 2.1rem;
        font-weight: 600;
        line-height: 2.5rem;
    }

    .promo__description {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.4rem;
        margin-top: 15px;
    }

    .promo__division {
        padding-top: 3rem;
    }

    .promo__card {
        border: 1px solid #ccc;
        border-radius: 15px;
        margin-bottom: 20px;
    }

    .promo__card:hover > .card__effect {
        border-radius: 15px;
        height: 100%;
        width: 100%;
    }

    .promo__card:hover .card__body, .promo__card:hover .card__icon {
        color: var(--white);
    }

    .card__body {
        padding: 1.5rem 5%;
        z-index: 10;
    }

    .card__icon {
        color: var(--light-blue);
        padding: 1.2rem 2rem;
    }

    .card__icon::before {
        font-size: 3rem;
    }

    .card__title {
        font-size: 1.4rem;
        font-weight: 600;
    }

    .card__description {
        font-size: .92rem;
        font-weight: 400;
        line-height: 1.4rem;
        margin-top: 12px;
    }

    .card__effect {
        background-color: var(--light-blue);
        bottom: 0;
        border-top-left-radius: 36px;
        border-bottom-right-radius: 15px;
        height: 46px;
        right: 0;
        transition: 1s all ease-out;
        width: 43px;
        z-index: 1;
    }

    @media screen and (min-width: 501px) {
        .promo {
            margin-top: 9rem;
        }
        .promo__division {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        .promo__card {
            margin-right: 2%;
            width: 48%;
        }

        .promo__card:nth-child(2) {
            margin-left: 2%;
            margin-right: 0;
        }
    }

    @media screen and (min-width: 992px) {
        .promo {
            padding: 3rem 8% 6rem 8%;
        }

        .promo__title {
            font-size: 2.5rem;
            line-height: 2.9rem;
            width: 63%;
        }
        .promo__description {
            font-size: 1.2rem;
            line-height: 1.8rem;
            width: 67%;
        }

        .promo__division {
            align-items: stretch;
            justify-content: space-between;
        }

        .promo__card {
            margin: 0 !important;
            width: 31.5%;
        }
    }
</style>