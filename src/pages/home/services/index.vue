<template>
    <section class="align-center flex flex-column text-center px-4 services">
        <h2 class="services__title">
            Por que escolher a TurboHost para hospedar meu site?
        </h2>
        <p class="services__description">
            Temos tudo para você garantir sua presença online: domínio grátis, 
            criador de site, email e muito mais ...!
        </p>
        <div class="align-stretch flex flex-column width-100 services__division">
            <article class="relative text-left width-100 services__card">
                <h3 class="fa fa-shield-alt services__card-title">
                    Construtor de Sites<br>
                    <span class="text-blue uppercase services__card-title--highlight">
                        facil e acessivel
                    </span>
                </h3>
                <p class="services__card-description">
                    Hospedagem optimizada para um desempenho superior em sites 
                    wordpress, com ferramentas que facilitam a sua gestão.
                </p>
                <button class="bg-transparent services__card-button">Entrar em contacto</button>
            </article>
            <article class="relative text-left width-100 services__card">
                <h3 class="fab fa-wordpress services__card-title">
                    Hospedagem wordpress<br>
                    <span class="text-blue uppercase services__card-title--highlight">
                        perfeito para sites em crescimento
                    </span>
                </h3>
                <p class="services__card-description">
                    Hospedagem optimizada para um desempenho superior em sites 
                    wordpress, com ferramentas que facilitam a sua gestão.
                </p>
                <button class="bg-transparent services__card-button">Entrar em contacto</button>
            </article>
            <article class="relative text-left width-100 services__card">
                <h3 class="fa fa-headset services__card-title">
                    Suporte especializado<br>
                    <span class="text-blue uppercase services__card-title--highlight">
                        24 horas por dia
                    </span>
                </h3>
                <p class="services__card-description">
                    Hospedagem optimizada para um desempenho superior em sites 
                    wordpress, com ferramentas que facilitam a sua gestão.
                </p>
                <button class="bg-transparent services__card-button">Entrar em contacto</button>
            </article>
            <article class="relative text-left width-100 services__card">
                <h3 class="fa fa-dolly-flatbed services__card-title">
                    Transferência de website<br>
                    <span class="text-blue uppercase services__card-title--highlight">
                        gratis e tranquila
                    </span>
                </h3>
                <p class="services__card-description">
                    Hospedagem optimizada para um desempenho superior em sites 
                    wordpress, com ferramentas que facilitam a sua gestão.
                </p>
                <button class="bg-transparent services__card-button">Entrar em contacto</button>
            </article>
        </div>
    </section>
</template>
<style scoped>
    .services {
        padding-bottom: 2rem;
        padding-top: 4rem;
    }

    .services__title {
        color: #24374e;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
    }

    .services__description {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-top: 18px;
    }

    .services__division {
        padding-top: 3rem;
    }

    .services__card {
        background-color: #fafafa;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 2rem;
        padding: 1.8rem 10%;
    }

    .services__card-title {
        color: #24374e;
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 600;
    }

    .services__card-title::before {
        color: var(--light-blue);
        font-size: 2.6rem;
        position: absolute;
        right: 38px;
        top: 52px;
    }

    .services__card-title--highlight {
        font-size: .8rem;
    }

    .services__card-description {
        font-size: .97rem;
        font-weight: 400;
        line-height: 1.45rem;
        margin-top: 14px;
    }

    .services__card-button {
        border: 1px solid var(--light-blue);
        border-radius: 5px;
        color: var(--light-blue);
        cursor: pointer;
        font-weight: 600;
        font-size: 1rem;
        margin-top: 26px;
        outline: none;
        padding: .6rem .8rem;
        transition: all 400ms linear;
    }

    .services__card-button:hover {
        background-color: var(--light-blue) !important;
        border: none;
        color: var(--white);
    }

    @media screen and (min-width: 501px) {

        .services__title {
            font-size: 2.5rem;
            line-height: 3rem;
            width: 60%;
        }

        .services__description {
            font-size: 1rem;
            width: 54%;
        }

        .services__division {
            flex-flow: row wrap;
            justify-content: space-between;
        }

        .services__card {
            padding: 1.5rem 5%;
            width: 48.5%;
        }

        .services__card-title {
            color: #24374e;
            font-size: 1.6rem;
            line-height: 1.7rem;
            font-weight: 600;
        }

        .services__card-title--highlight {
            font-size: .95rem;
        }

        .services__card-description {
            font-size: 1rem;
            line-height: 1.6rem;
        }
    }
</style>