<template>
    <footer class="align-start flex flex-column justify-between px-4
        text-white width-100 footer">
        <section class="align-start flex flex-column justify-start width-100
            footer__section-1">
            <router-link class="footer__logo-container width-100" :to="{ name: 'Home' }">
                <img class="block width-100 height-100" src="../../../static/logo-white.png" />
            </router-link>
            <h2 class="footer__titulo">
                Coloque sua ideia na Internet! Registo de domínio, 
                Alojamento web, alojamento WordPress
            </h2>
            <div class="align-center flex justify-start width-100 footer__icons-container">
                <span class="fab fa-twitter align-center flex justify-center icon icon--twitter"></span>
                <span class="fab fa-youtube align-center flex justify-center icon icon--youtube"></span>
                <span class="fab fa-facebook align-center flex justify-center icon icon--facebook"></span>
                <span class="fab fa-instagram align-center flex justify-center icon icon--instagram"></span>
            </div>
        </section>
        <section class="align-start flex flex-column width-100 empresa">
            <div class="align-start flex flex-column width-100 empresa__servicos">
                <h3 class="empresa__servicos-titulo">Dominios</h3>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Verificar dominio
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Transferir dominio
                </router-link>
            </div>
            <div class="align-start flex flex-column width-100 empresa__servicos">
                <h3 class="empresa__servicos-titulo">Hospedagem</h3>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Hospedagem de Sites
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Hospedagem WordPress
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Email Profissonal
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Hospedagem VPS
                </router-link>
            </div>
            <div class="align-start flex flex-column width-100 empresa__servicos">
                <h3 class="empresa__servicos-titulo">Empresa</h3>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Sobre Nos
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Contacte-nos
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Metodos de Pagamento
                </router-link>

                <h3 class="empresa__servicos-titulo">Legal</h3>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Termos e Condicoes
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Politica de Privacidade
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Email Profissonal
                </router-link>
            </div>
            <div class="align-start flex flex-column width-100 empresa__servicos">
                <h3 class="empresa__servicos-titulo">Ajuda</h3>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Base de Conhecimento
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Contactar Suporte
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Estado dos Servidores
                </router-link>
                <router-link class="no-underline text-white footer__link" :to="{ name: 'Home'}">
                    Recuperar Senha
                </router-link>
            </div>
        </section>
    </footer>
</template>
<style scoped>
    .footer {
        background-color: #2472cc;
        padding-bottom: 3rem;
        padding-top: 3rem;
    }

    .footer__logo-container {
        height: 213px;
    }

    .footer__titulo {
        font-size: 1.2rem;
        line-height: 1.7rem;
    }

    .footer__icons-container {
        margin-bottom: 15px;
        margin-top: 15px;
    }

    .icon {
        border-radius: 5px;
        height: 30px;
        margin-right: 10px;
        width: 30px;
        opacity: 0.8;
        transition: all 400ms;
    }

    .icon:hover {
        border-radius: 50%;
        opacity: 1;
    }

    .icon--twitter {
        background-color: #00a7e6;
    }

    .icon--facebook {
        background-color: #4064ac;
    }

    .icon--youtube {
        background-color: #ff0000;
    }

    .icon--instagram {
        background-color: #C13584;
    }

    .empresa__servicos {
        padding-bottom: 1rem;
        padding-top: 1rem;
    }

    .empresa__servicos-titulo {
        font-size: 1.2rem;
        margin-bottom: 21px;
        opacity: 0.8;
    }

    .footer__link {
        font-size: 1.04rem;
        font-weight: 400;
        margin-bottom: 10px;
        opacity: 0.8;
    }

    .footer__link:hover {
        opacity: 1;
    }

    @media screen and (min-width: 992px) {
        .footer {
            align-items: center;
            flex-flow: row nowrap;
            padding-left: 8%;
            padding-right: 8%;
        }

        .footer__section-1 {
            width: 28%;
        }

        .footer__logo-container {
            height: 150px;
        }

        .empresa {
            align-items: flex-start;
            flex-flow: row nowrap;
            width: 65%;
        }

        .footer__link {
            font-size: 1rem;
        }
    }
</style>