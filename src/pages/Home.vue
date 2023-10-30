<script>
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default {
    components: {
        Icon,
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },

    data() {
        return {
            portfolioData: [], // Initialize with an empty array
            isActive_one: true,
            isActive_two: false,
            isActive_three: false,
            isActive_four: false,
            text_slider: ""
        };
    },
    created() {
        this.fetchPortfolioData();
        this.text_slider = `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has beenLorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been`
    },
    methods: {
        async fetchPortfolioData() {
            try {
                const response = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/');
                const data = await response.json();
                this.portfolioData = data.slice(-5) // Set the fetched data to the portfolioData array

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        formatDate(dateString) {
            // Use the format function from date-fns to format the date
            return format(new Date(dateString), 'dd MMMM yyyy');
        },

        // truncateString(string = '', maxLength = 50) {
        //     string.length > maxLength
        //         ? `${string.substring(0, maxLength)}…`
        //         : string
        // },

        truncateString(string, maxLength = 100) {
            return string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
        },


        toggleActiveState_one() {
            this.isActive_one = !this.isActive_one;
            this.isActive_two = false
            this.isActive_three = false
            this.isActive_four = false
        },
        toggleActiveState_two() {
            this.isActive_two = !this.isActive_two;
            this.isActive_one = false
            this.isActive_three = false
            this.isActive_four = false
        },
        toggleActiveState_three() {
            this.isActive_three = !this.isActive_three;
            this.isActive_one = false
            this.isActive_two = false
            this.isActive_four = false
        },
        toggleActiveState_four() {
            this.isActive_four = !this.isActive_four;
            this.isActive_one = false
            this.isActive_two = false
            this.isActive_three = false
        },

    },
}
</script>
<template>
    <main class="home">
        <div class="container-main">
            <div class="home-content">
                <div class="home-content-top">
                    <p class="home-content-top-text">/ welcome \</p>
                    <h2 class="home-content-top-title">Islamov Sabit</h2>
                    <ul class="home-content-top-list">
                        <li class="home-content-top-item">
                            <router-link to="/" class="home-content-top-link">Frontend</router-link>
                        </li>
                        <li class="home-content-top-item">
                            <router-link to="/" class="home-content-top-link">Backend</router-link>
                        </li>
                        <li class="home-content-top-item">
                            <router-link to="/" class="home-content-top-link">Design</router-link>
                        </li>
                    </ul>
                    <div class="home-content-top-btn-group">
                        <a href="https://www.pinterest.com/pin/331436853843629375/" download type=""
                            class="home-content-top-btn-link">Download</a>
                        <router-link to="/contact" type="" class="home-content-top-btn-link">Contact</router-link>
                    </div>
                </div>
                <div class="home-content-bottom">
                    <ul class="home-content-bottom-list">
                        <li class="home-content-bottom-item">
                            <div class="home-content-bottom-item-icons">
                                <Icon icon="mingcute:code-fill" class="home-content-bottom-item-icon" />
                            </div>
                            <h4 class="home-content-bottom-item-title">More than 10 projects</h4>
                        </li>
                        <li class="home-content-bottom-item">
                            <div class="home-content-bottom-item-icons">
                                <Icon icon="bxs:moon" class="home-content-bottom-item-icon" />
                            </div>
                            <h4 class="home-content-bottom-item-title">18 Hour working hours</h4>
                        </li>
                        <li class="home-content-bottom-item">
                            <div class="home-content-bottom-item-icons">
                                <Icon icon="ic:baseline-work" class="home-content-bottom-item-icon" />
                            </div>
                            <h4 class="home-content-bottom-item-title">1.5 Years of work experience</h4>
                        </li>
                        <li class="home-content-bottom-item">
                            <div class="home-content-bottom-item-icons">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                                    fill="none">
                                    <path
                                        d="M33.3333 3.33334H13.3333C11.4999 3.33334 9.99992 4.83334 9.99992 6.66667V26.6667C9.99992 28.5 11.4999 30 13.3333 30H33.3333C35.1666 30 36.6666 28.5 36.6666 26.6667V6.66667C36.6666 4.83334 35.1666 3.33334 33.3333 3.33334ZM20.7833 23.3333L14.9999 17.5L17.3333 15.15L20.7833 18.6167L29.3333 10L31.6666 12.35L20.7833 23.3333ZM6.66659 10H3.33325V33.3333C3.33325 35.1667 4.83325 36.6667 6.66659 36.6667H29.9999V33.3333H6.66659V10Z"
                                        fill="black" class="home-content-bottom-item-icon" />
                                </svg>
                            </div>
                            <h4 class="home-content-bottom-item-title">Many portfolio projects</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
    <section class="home-component">
        <div class="container-main">
            <div class="home-component-content">
                <div class="home-component-content-one">
                    <div class="home-component-content-one-title-blog">
                        <h4 class="home-component-content-one-title">Get in touch</h4>
                        <p class="home-component-content-one-text">If you need any help with our products or services,
                            choose one of the following ways to contact us.</p>
                    </div>
                    <router-link to="/contact" class="home-component-content-one-link">Contact Us</router-link>
                </div>
                <div class="home-component-content-portfolio">

                    <div class="home-component-content-portfolio-element" v-for="item in this.portfolioData" :key="item.id">
                        <img :src="item.portfolio_img" class="home-component-content-portfolio-element-image" alt="">
                        <ul class="home-component-content-portfolio-element-list">
                            <li class="home-component-content-portfolio-element-item">
                                <span class="home-component-content-portfolio-element-item-span"></span>
                                <h6 class="home-component-content-portfolio-element-item-title">{{ item.uploader_name }}
                                </h6>
                            </li>
                            <li class="home-component-content-portfolio-element-item">
                                <Icon icon="solar:calendar-bold"
                                    class="home-component-content-portfolio-element-item-icon" />
                                <p class="home-component-content-portfolio-element-item-data">{{
                                    formatDate(item.portfolio_data) }} </p>
                            </li>
                        </ul>
                        <h4 class="home-component-content-portfolio-element-title">{{ item.portfolio_title }}</h4>
                        <p class="home-component-content-portfolio-element-text">{{ item.portfolio_text }} </p>
                        <div class="home-component-content-portfolio-element-load-more">
                            <a class="home-component-content-portfolio-element-load-more-link" :href="item.portfolio_link"
                                target='_blank'>Learn More</a>
                            <Icon icon="mingcute:snow-fill" class="home-component-content-portfolio-element-snow-icon" />
                        </div>
                    </div>

                    <div class="home-component-content-portfolio-element-more">
                        <div class="home-component-content-portfolio-more-link">
                            <router-link to="/portfolio"
                                class="home-component-content-portfolio-more-link-router">More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="home-questions">
        <div class="container-main">
            <div class="home-questions-content">
                <ul class="home-questions-content-list">
                    <li class="home-questions-content-item" @click="toggleActiveState_one"
                        :class="{ 'active': isActive_one }">
                        <div class="home-questions-content-item-blog">
                            <h4 class="home-questions-content-item-blog-title">How is the cost of the created project
                                calculated?</h4>
                            <Icon icon="icon-park:left" class="home-questions-content-item-blog-icon" />
                        </div>
                        <p class="home-questions-content-item-blog-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                    </li>
                    <li class="home-questions-content-item" @click="toggleActiveState_two"
                        :class="{ 'active': isActive_two }">
                        <div class="home-questions-content-item-blog">
                            <h4 class="home-questions-content-item-blog-title">How to transfer money?</h4>
                            <Icon icon="icon-park:left" class="home-questions-content-item-blog-icon" />
                        </div>
                        <p class="home-questions-content-item-blog-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                    </li>
                    <li class="home-questions-content-item" @click="toggleActiveState_three"
                        :class="{ 'active': isActive_three }">
                        <div class="home-questions-content-item-blog">
                            <h4 class="home-questions-content-item-blog-title">How does your project stand out from the
                                rest?</h4>
                            <Icon icon="icon-park:left" class="home-questions-content-item-blog-icon" />
                        </div>
                        <p class="home-questions-content-item-blog-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                    </li>
                    <li class="home-questions-content-item" @click="toggleActiveState_four"
                        :class="{ 'active': isActive_four }">
                        <div class="home-questions-content-item-blog">
                            <h4 class="home-questions-content-item-blog-title">What is the project lead time?</h4>
                            <Icon icon="icon-park:left" class="home-questions-content-item-blog-icon" />
                        </div>
                        <p class="home-questions-content-item-blog-text">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                            book.
                        </p>
                    </li>
                </ul>
                <swiper :direction="'vertical'" :pagination="{
                    clickable: true,
                    dynamicBullets: true,
                }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div class="home-slider-user_blog">
                            <div class="home-slider-user_blog_image"></div>
                        </div>
                        <p class="home-slider-user-comment">{{ truncateString(this.text_slider, 180) }}</p>
                        <ul class="home-slider-user_star-list">
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                        </ul>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="home-slider-user_blog">
                            <div class="home-slider-user_blog_image"></div>
                        </div>
                        <p class="home-slider-user-comment">{{ truncateString(this.text_slider, 180) }}</p>
                        <ul class="home-slider-user_star-list">
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                        </ul>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="home-slider-user_blog">
                            <div class="home-slider-user_blog_image"></div>
                        </div>
                        <p class="home-slider-user-comment">
                            {{ truncateString(this.text_slider, 180) }}
                        </p>
                        <ul class="home-slider-user_star-list">
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                            <li class="home-slider-user_star-item">
                                <Icon icon="ic:round-star" class="home-slider-user_star-item-icon" />
                            </li>
                        </ul>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <section class="home-section">
        <div class="container-main">

        </div>
    </section>
</template>