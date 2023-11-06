<script>
import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon,
    },
}
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="container-header">
                <div class="footer-content-blog">
                    <div class="footer-content-blog-left">
                        <router-link to="/" class="footer-content-blog-left-home-link">B</router-link>
                        <ul class="footer-content-blog-left-list">
                            <li class="footer-content-blog-left-item">
                                <router-link to="/about" class="footer-content-blog-left-link">About</router-link>
                            </li>
                            <li class="footer-content-blog-left-item">
                                <router-link to="/education" class="footer-content-blog-left-link">Education</router-link>
                            </li>
                            <li class="footer-content-blog-left-item">
                                <router-link to="/portfolio" class="footer-content-blog-left-link">Portfolio</router-link>
                            </li>
                            <li class="footer-content-blog-left-item">
                                <router-link to="/service" class="footer-content-blog-left-link">Service</router-link>
                            </li>
                            <li class="footer-content-blog-left-item">
                                <router-link to="/contact" class="footer-content-blog-left-link">Contact</router-link>
                            </li>
                        </ul>
                        <ul class="footer-content-blog-left-icon-list">
                            <li class="footer-content-blog-left-icon-item">
                                <a href="https://github.com/islamovsabit" target='_blank' class="footer-content-blog-left-icon-link">
                                    <Icon icon="devicon:github" class="header-content-right-link-icon" />
                                </a>
                            </li>
                            <li className={styled.main_block_cat_one_content_icons_item}>
                                <a href="https://t.me/Sabit_Islamov" target='_blank' class="footer-content-blog-left-icon-link">
                                    <Icon icon="icon-park:telegram" class="header-content-right-link-icon" />
                                </a>
                            </li>
                            <li class="">
                                <a href="https://www.instagram.com/_bilmer_" target='_blank' class="footer-content-blog-left-icon-link">
                                    <Icon icon="mdi:instagram" class="header-content-right-link-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-content-blog-right">
                        <div class="footer-content-blog-right-text"></div>
                        <div class="footer-content-blog-right-title">© 2023/Bilmer-Islamov</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>