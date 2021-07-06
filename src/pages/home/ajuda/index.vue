<template>
    <section class="flex flex-column absolute ajuda">
        <form action="width-100 ajuda__form">
            <fieldset class="width-100 text-center ajuda__fieldset">
                 <legend class="block ajuda__legend">Procurando por um domínio perfeito?</legend>
                 <div class="align-center flex flex-column width-100 ajuda__input-group">
                    <input
                        type="text"
                        placeholder="seudomino.co.mz"
                        aria-label="Insira a chave da pesquisa"
                        class="width-100 ajuda__input"
                    />
                    <button type="submit" class="width-100 ajuda__submit">
                        <span class="fa fa-search"></span>Pesquisar
                    </button>
                 </div>
            </fieldset>
        </form>
        <ul class="align-center justify-center width-100 ajuda__list">
            <li class="ajuda__item">
                <router-link :to="{ name: 'Home' }"
                    class="block width-100 no-underline ajuda__link ajuda__link--com">
                    900MT
                </router-link>
            </li>
            <li class="ajuda__item">
                <router-link :to="{ name: 'Home' }"
                    class="block width-100 no-underline ajuda__link ajuda__link--co">
                    2500MT
                </router-link>
            </li>
            <li class="ajuda__item">
                <router-link :to="{ name: 'Home' }"
                    class="block width-100 no-underline ajuda__link ajuda__link--net">
                    1079,20MT
                </router-link>
            </li>
            <li class="ajuda__item">
                <router-link :to="{ name: 'Home' }"
                    class="block width-100 no-underline ajuda__link ajuda__link--org">
                    1103,20MT
                </router-link>
            </li>
            <li class="ajuda__item">
                <router-link :to="{ name: 'Home' }"
                    class="block width-100 no-underline ajuda__link ajuda__link--info">
                    400MT
                </router-link>
            </li>
        </ul>
    </section>
</template>
<style scoped>
    .ajuda {
        background-color: #fafafa;
        border-radius: 10px;
        margin-left: 4%;
        margin-right: 4%;
        padding: 1.5rem 5%;
        transform: translateY(-96px);
        width: 92%
    }

    .ajuda__legend {
        font-size: 1.35rem;
        font-weight: 600;
        margin-bottom: 18px;
    }

    .ajuda__input {
        border: none;
        border-bottom: 2px solid var(--light-blue);
        font-size: .95rem;
        outline: none;
        padding: .6rem .4rem
    }

    .ajuda__submit {
        background-color: var(--light-blue);
        border: none;
        color: var(--white);
        font-size: 1.1rem;
        font-weight: 600;
        margin-top: 11px;
        outline: none;
        padding-bottom: .6rem;
        padding-top: .6rem;
    }

    .ajuda__list {
        display: none;
    }

    @media screen and (min-width: 768px) {
        .ajuda {
            margin-left: 20%;
            margin-right: 20%;
            width: 60%;
        }

        .ajuda__input-group {
            flex-direction: row;
            justify-content: space-between;
        }

        .ajuda__input {
            width: 68%;
        }

        .ajuda__submit {
            width: 28%;
        }

        .ajuda__list {
            display: flex;
            margin-top: 23px;
        }

        .ajuda__item {
            margin-right: 10px;
        }

        .ajuda__link {
            border: 1px solid rgba(93, 118, 174, 0.15);
            color: #ccc;
            padding: .4rem .6rem;
        }

        .ajuda__link::before {
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            content: '';
            display: block;
            height: 20px;
            width: 90%;
        }

        .ajuda__link--com::before {
            background-image: url('../../../static/com.png');
        }

        .ajuda__link--co::before {
            background-image: url('../../../static/co.mz.png');
        }

        .ajuda__link--net::before {
            background-image: url('../../../static/net.png');
        }

        .ajuda__link--org::before {
            background-image: url('../../../static/org.png');
        }

        .ajuda__link--info::before {
            background-image: url('../../../static/info.png');
        }
    }
</style>