<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
}
</script>

<template>
    <header class="header">
        <div class="container-header">
            <div class="header-content">
                <div class="header-content-left">
                    <router-link to="/" class="header-content-left-title">B</router-link>
                    <ul class="header-content-left-list">
                        <li class="header-content-left-item">
                            <router-link to="/about" class="header-content-left-link">About</router-link>
                        </li>
                        <li class="header-content-left-item">
                            <router-link to="/education" class="header-content-left-link">Education</router-link>
                        </li>
                        <li class="header-content-left-item">
                            <router-link to="/portfolio" class="header-content-left-link">Portfolio</router-link>
                        </li>
                        <li class="header-content-left-item">
                            <router-link to="/service" class="header-content-left-link">Service</router-link>
                        </li>
                        <li class="header-content-left-item">
                            <router-link to="/contact" class="header-content-left-link">Contact</router-link>
                        </li>
                    </ul>
                </div>
                <div class="header-content-right">
                    <ul class="header-content-right-list">
                        <li class="header-content-right-item">
                            <a href="#!" target="_blank" class="header-content-right-link">
                                <Icon icon="devicon:github" class="header-content-right-link-icon" />
                            </a>
                        </li>
                        
                        <li class="header-content-right-item">
                            <a href="#!" target="_blank" class="header-content-right-link">
                                <Icon icon="icon-park:telegram" class="header-content-right-link-icon" />
                            </a>
                        </li>
                        
                        <li class="header-content-right-item">
                            <a href="#!" target="_blank" class="header-content-right-link">
                                <Icon icon="mdi:instagram" class="header-content-right-link-icon" />
                            </a>
                        </li>
                    </ul>
                    <div class="header-content-right-btn-group">
                        <button class="header-content-right-btn-theme">
                            <div class="header-content-right-btn-theme-day-moon">
                                <Icon icon="mi:sun" class="header-content-right-btn-theme-icon-day" />
                                <Icon icon="majesticons:moon-line" class="header-content-right-btn-theme-icon-moon" />
                            </div>
                        </button>
                        <button class="header-content-right-btn-library">Library</button>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
</template>

