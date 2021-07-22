<script>
import $ from 'jquery'

/**
 * Nav-bar Component
 */
export default {
    data: function() {
        return {
            search: {
                type: { ip: false, sn: false },
                value: '',
                history: []
            },
            notices: [],
            coverage: {},
            loading: false,
            notices_type_dict: {},
        }
    },
    created() {
        // created 中添加 click 事件句柄  判断点击事件是否发生在某元素上
        document.addEventListener('click', event => {
            const e = event || window.event
            if (this.$refs.app_search && !this.$refs.app_search.contains(e.target)) {
                $(".app-search .dropdown-menu").hide();
            }
        })
    },
    methods: {
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        toggleRightSidebar() {
            this.$parent.toggleRightSidebar();
        },
        initFullScreen() {
            document.body.classList.toggle("fullscreen-enable");
            if (
                !document.fullscreenElement &&
                /* alternative standard method */ !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(
                        Element.ALLOW_KEYBOARD_INPUT
                    );
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },
    }
};
</script>

<template>
    <header id="page-topbar">
        <div class="navbar-header horizon-border">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <router-link tag="a" to="/" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="@/assets/images/logo.png" alt height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/images/logo-dark.png" alt height="17" />
                        </span>
                    </router-link>

                    <router-link tag="a" to="/" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="@/assets/images/logo-light-sm.jpg" alt height="34" />
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/images/logo-light.svg" alt height="30" />
                        </span>
                    </router-link>
                </div>

                <!-- toggle menu -->
                <button
                    id="vertical-menu-btn"
                    type="button"
                    class="btn btn-sm px-3 font-size-15 header-item"
                    @click="toggleMenu"
                >
                    <i class="fa fa-fw fa-bars"></i>
                </button>
            </div>

            <div class="d-flex">
                <!-- div class="dropdown d-none d-lg-inline-block ml-1">
                    <button type="button" class="btn header-item noti-icon" @click="initFullScreen">
                        <i class="bx bx-fullscreen"></i>
                    </button>
                </div -->

                <div class="dropdown d-none d-lg-inline-block ml-1">
                    <router-link :to="{name: 'analysis'}">
                    <button type="button" class="btn header-item noti-icon">
                        <i class="bx bx-user"></i>
                        Demo User
                    </button>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>
