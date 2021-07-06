<template>
    <section class="align-start bg-blue text-white flex justify-center text-left
        contain no-repeat px-4 width-100 suporte">
        <div class="text-white suporte__content">
            <h2 class="suporte__title">Suporte de Personalizado 24/7</h2>
            <p class="suporte__description">
                Nossos especialistas estão disponíveis 24 horas por dia, 7 
                dias por semana, pelo atendimento ao cliente, chat ao vivo e por 
                telefone, quando você precisar de ajuda. Se você precisar de ajuda 
                com a assistência do servidor, registo de domínios, transferência de 
                domínio e sites, questões relacionadas à hospedagem, orientação do 
                painel de controle, estamos aqui para ajuda-lo!
            </p>
            <div class="suporte__link-container">
                <router-link class="fa fa-comment text-white no-underline suporte__link"
                    to="suporte@turbohost.co.mz">
                    suporte@turbohost.co.mz
                </router-link>
                <router-link class="fa fa-phone-alt text-white no-underline suporte__link"
                    to="+258843670086">
                    +258843670086
                </router-link>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .suporte {
        padding-bottom: 2.5rem;
        padding-top: 2.5rem;
    }

    .suporte__title {
        font-size: 1.9rem;
        font-weight: 600;
    }

    .suporte__description {
        font-size: .95rem;
        font-weight: 400;
        line-height: 1.4rem;
        margin-top: 1.5rem;
    }

    .suporte__link-container {
        margin-top: 1rem;
    }

    .suporte__link {
        font-size: .97rem;
        font-weight: 400;
    }

    .suporte__link:first-child {
        margin-right: 14px;
    }

    .suporte__link::before {
        color: var(--yellow);
        font-size: 1rem;
        font-weight: 600;
        margin-right: 5px;
    }

    @media screen and (min-width: 992px) {
        .suporte {
            align-items: center;
            background-image: url('../../../static/call-center-support.svg');
            background-position: 85% center;
            background-size: 18%;
            height: 350px;
            justify-content: flex-start;
            padding-left: 8%;
            padding-right: 8%;
        }

        .suporte__content {
            width: 50%;
        }

        .suporte__title {
            font-size: 2.3rem;
        }

        .suporte__description {
            font-size: 1rem;
            line-height: 1.55rem;
            margin-top: 1.4rem;
        }

        .suporte__link {
            font-size: 1.1rem;
        }
    }
</style>