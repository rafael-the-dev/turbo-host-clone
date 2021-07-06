<template>
    <section class="align-center flex flex-column px-4 width-100 planos">
        <h2 class="planos__title">Escolha um dos serviços para começar!</h2>
        <p class="planos__description">
            Encontre aqui soluções de acordo com a sua necessidade ...
        </p>
        <div class="align-stretch flex flex-column width-100  planos__division">
            <article class="text-center width-100 plano">
                <h3 class="plano__title plano__title--host">Hospedagem de Sites</h3>
                <p class="plano__description">
                    Tudo que precisa para ter o seu site no ar com contas de 
                    e-mail grátis.
                </p>
                <p class="plano__price">
                    A partir de<br/>
                    <span class="block plano__price--highlight">
                        130 MT <sub class="plano__price--month">/mês</sub>
                    </span> 
                </p>
                <router-link class="no-underline bg-blue text-white plano__link"
                    :to="{ name: 'Home'}">
                    Ver Planos<span class="esconde-visualmente">de hospedagem de sites</span>
                </router-link>
            </article>
            <article class="text-center width-100 plano">
                <h3 class="plano__title plano__title--server">Servidor VPS</h3>
                <p class="plano__description">
                    Para aplicações mais exigentes, que precisam de autonomia e mais 
                    controle.
                </p>
                <p class="plano__price">
                    A partir de<br/>
                    <span class="block plano__price--highlight">
                        900 MT <sub class="plano__price--month">/mês</sub>
                    </span> 
                </p>
                <router-link class="no-underline bg-blue text-white plano__link"
                    :to="{ name: 'Home'}">
                    Ver Planos<span class="esconde-visualmente">de servidor VPS</span>
                </router-link>
            </article>
            <article class="text-center width-100 plano">
                <h3 class="plano__title plano__title--wordpress">Hospedagem Wordpress</h3>
                <p class="plano__description">
                    Totalmente optimizado para o seu site Wordpress.
                </p>
                <p class="plano__price">
                    A partir de<br/>
                    <span class="block plano__price--highlight">
                        600 MT <sub class="plano__price--month">/mês</sub>
                    </span> 
                </p>
                <router-link class="no-underline bg-blue text-white plano__link"
                    :to="{ name: 'Home'}">
                    Ver Planos<span class="esconde-visualmente">de hospedagem wordpress</span>
                </router-link>
            </article>
        </div>
    </section>
</template>
<style scoped>
    .planos {
        background-color: #fafafa;
        padding-top: 2rem;
    }

    .planos__title {
        font-size: 1.85rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: center;
    }

    .planos__description {
        font-size: .85rem;
        margin-top: 22px;
        margin-bottom: 13px;
    }

    .planos__division {
        margin-top: 1.5rem;
    }

    .plano {
        background-color: var(--white);
        border: 1px solid rgba(93, 118, 174, 0.15);
        border-radius: 5px;
        margin-bottom: 2rem;
        padding: 3rem 5%;
    }

    .plano__title {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .plano__title::before {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        content: '';
        display: block;
        height: 67px;
        margin-bottom: 2.5rem;
        margin-left: auto;
        margin-right: auto;
        width: 124px;
    }

    .plano__title--host::before {
        background-image: url('../../../static/dadicate-web-hosting.svg');
    }

    .plano__title--server::before {
        background-image: url('../../../static/vps-hosting.svg');
    }

    .plano__title--wordpress::before {
        background-image: url('../../../static/cloud-hosting.svg');
    }

    .plano__description {
        font-size: 1rem;
        font-weight: 300;
        margin-top: 1.3rem;
    }

    .plano__price {
        color: #24374e;
        font-size: .8rem;
        font-weight: 400;
        margin-top: 1.4rem;
    }

    .plano__price::before {
        content: '';
        background-color: var(--light-blue);
        display: block;
        height: 2px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        width: 48px;
    }

    .plano__price--highlight {
        font-size: 2rem;
        font-weight: 600;
        margin-top: 11px;
    }

    .plano__price--month {
        font-size: 1.4rem;
        font-weight: 400;
        margin-left: 7px;
    }

    .plano__link {
        padding: .7rem 1rem;
        border-radius: 5px;
        display: inline-block;
        margin-top: 19px;
    }

    .esconde-visualmente {
        display: none;
    }

    @media screen and (min-width: 992px) {

        .planos {
            padding-left: 8%;
            padding-right: 8%;
        }

        .planos__division {
            flex-flow: row nowrap;
            justify-content: space-between;
        }

        .plano {
            width: 31.5%;
        }

        .plano__description {
            font-weight: 400;
            line-height: 1.5rem;
        }
    }
</style>