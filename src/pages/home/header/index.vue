<template>
    <header id="header" class="align-center bg-blue flex flex-column
        justify-between relative px-4 width-100 header">
        <div class="align-center flex justify-between width-100 header__division">
            <router-link class="header__logo-container" :to="{ name: 'Home'}">
                <img class="header__logo" src="../../../static/logo-white.png"/>
            </router-link>
            <div class="align-center flex header__button-container">
                <router-link
                    :to="{ name: 'Home' }"
                    class="fa fa-shopping-cart text-white no-underline">
                </router-link>
                <button
                    aria-label="Toggle menu"
                    id="toggle-button"
                    class="fa fa-bars text-white header__button"
                    @click="clickHandler"
                >
                </button>
            </div>
        </div>
        <nav id="header-navigation" class=" width-100 header__navigation">
            <ul class="align-stretch flex flex-column justify-between 
                header__list width-100">
                <li class="header__item">
                    <router-link class="header__link" :to="{ name: 'Home' }">
                        Dominios
                    </router-link>
                </li>
                <li class="header__item">
                    <router-link class="header__link" :to="{ name: 'Home' }">
                        Hospedagem
                    </router-link>
                </li><li class="header__item">
                    <router-link class="header__link" :to="{ name: 'Home' }">
                        Emails Profissionais
                    </router-link>
                </li>
                <li class="header__item">
                    <router-link class="header__link" :to="{ name: 'Home' }">
                        Empresa
                    </router-link>
                </li>
                <li class="header__item header__item--login">
                    <router-link class="bg-yellow text-center header__link header__link--login" :to="{ name: 'Home' }">
                        <span class="fa fa-user"></span>
                        Login
                    </router-link>
                </li>
                <li class="none header__item header__item--shopping-cart">
                    <router-link class="header__link" :to="{ name: 'Home' }">
                        <span class="fa fa-shopping-cart"></span>
                        Carrinho
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                navigation: null
            }
        },
        mounted() {
            const header = document.querySelector('#header');
            this.navigation = document.querySelector('#header-navigation');

            this.toggleClasses(document.documentElement.scrollTop, header);

            window.onscroll = event => {
                this.toggleClasses(document.documentElement.scrollTop, header);
            };

            window.addEventListener('resize', event => {
                if(event.target.innerWidth > 992) {
                     this.navigation.classList.remove('header__navigation--display');
                }
            });
        },
        methods: {
            toggleClasses(size, header) {
                if(size > 20) {
                    header.classList.add('header--fixed');
                } else {
                    header.classList.remove('header--fixed');
                }
            },
            clickHandler(event) {
                this.navigation.classList.toggle('header__navigation--display');
            }
        }
    }
</script>
<style scoped>
    .header--fixed {
        left: 0;
        position: fixed;
        top: 0;
        z-index: 15;
    }

    .header__button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-left: 15px;
    }

    .header__navigation {
        display: none;
        left: 0;
        top: 0;
        z-index: 10;
    }

    .header__navigation--display {
        display: flex;
    }

    .header__item--login {
        width: 30%;
    }

    .header__item--shopping-cart {
        display: none;
    }

    @media screen and (min-width: 992px) {
        .header {
            flex-direction: row;
            padding-left: 8%;
            padding-right: 8%;
        }

        .header__division, .header__navigation, .header__list, .header__item--login {
            width: auto;
        }

        .header__button-container {
            display: none;
        }

        .header__navigation {
            background-color: transparent;
            display: flex;
            padding: 0;
        }

        .header__list {
            align-items: center;
            background-color: transparent;
            flex-flow: row nowrap;
            padding: 0;
        }

        .header__item--shopping-cart {
            display: inline-block;
        }
    }
</style>