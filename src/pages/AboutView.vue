<script>
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    components: {
        Icon,
    },

    mounted() {
        AOS.init({// Offset (in pixels) from the top of the page
            duration: 800, // Duration (in ms) of the animation
        });
    },

    data() {
        return {
            biography: [],
            portfolio: [],
            name_user: "",
            email_user: "",
            message_user: "",
        };
    },

    created() {
        this.fetchBiographyData();
        this.fetchDataPortfolio();
    },

    methods: {
        async fetchBiographyData() {
            try {
                const response = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v1/biography/');
                const data = await response.json();
                this.biography = data
                console.log(this.biography);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async fetchDataPortfolio() {
            try {
                const response = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/');
                const data = await response.json();
                this.portfolio = data.slice(-5)
                console.log(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        truncateString(string, maxLength = 100) {
            return string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;
        },
        formatDate(dateString) {
            return format(new Date(dateString), 'dd MMMM yyyy');
        },

        sendEmail() {
            emailjs.sendForm('service_xwj8fkw', 'template_wehrfgq', this.$refs.form, 't0uJeXn356UkulIz_')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    setTimeout(() => {
                        this.name_user = ''
                        this.email_user = ''
                        this.message_user = ''
                    }, 1000);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        },
    }
}
</script>
<template>
    <main class="about">
        <div class="container-main">
            <div class="about-content" data-aos="fade-up">
                <div class="about-content-left">
                    <img src="../assets/img/about_logo.png" class="about-content-left-image" alt="">
                </div>
                <div class="about-content-right">
                    <h2 class="about-content-right-title">About Me</h2>
                    <p class="about-content-right-text-one">Themesberg is an experienced and passionate group of designers,
                        developers, project managers, writers and artists. Every client we work with becomes a part of the
                        team. Together we face the challenges and celebrate the victories.</p>
                    <br />
                    <p class="about-content-right-text-two">Our small team is active in the creative community, endlessly
                        interested in what’s next, and generally pleasant to be around.</p>
                    <img src="../assets/img/signature 1.png" class="about-content-right-signature-img" alt="">
                </div>
            </div>
        </div>
    </main>
    <section class="about_biography">
        <div class="container-main">
            <div class="about_biography-content">
                <div class="about_biography-content-blog" data-aos="fade-up">
                    <h4 class="about_biography-content-blog-title">Biography</h4>
                    <ul class="about_biography-content-blog-list">
                        <li class="about_biography-content-blog-item" v-for="item in this.biography" :key="item.id"
                            :data-slug="item.biography_slug">
                            <p class="about_biography-content-blog-item-title">{{ item.biography_title }}</p>
                            <p class="about_biography-content-blog-item-text">{{ item.biography_text }}</p>
                        </li>
                    </ul>
                    <div class="about_biography-content-blog-circle">
                        <div class="about_biography-content-blog-circle_item"></div>
                        <div class="about_biography-content-blog-circle_item"></div>
                        <div class="about_biography-content-blog-circle_item"></div>
                    </div>
                </div>
                <div class="home-component-content-portfolio">
                    <div class="home-component-content-portfolio-element" data-aos="fade-up" v-for="item in this.portfolio"
                        :key="item.id">
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

                    <div class="home-component-content-portfolio-element-more" data-aos="fade-up">
                        <div class="home-component-content-portfolio-more-link">
                            <router-link to="/portfolio"
                                class="home-component-content-portfolio-more-link-router">More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about_contact">
        <div class="container-main">
            <form class="home-section-form" ref="form" @submit.prevent="sendEmail" data-aos="fade-up">
                <label htmlFor="" class="home-section-form-label">
                    <span class="next_form_label_span">Your Name</span>
                    <div class="next_form_label_group">
                        <span class="next_form_label_span_bg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path
                                    d="M13.0001 2.16675C10.1382 2.20324 7.4039 3.35633 5.38011 5.38011C3.35633 7.4039 2.20324 10.1382 2.16675 13.0001C2.18013 14.6672 2.57811 16.3088 3.32972 17.797C4.08133 19.2852 5.16627 20.5798 6.50008 21.5801V21.6667H6.60841C8.4427 23.0724 10.6892 23.8341 13.0001 23.8341C15.311 23.8341 17.5575 23.0724 19.3917 21.6667H19.5001V21.5801C20.8339 20.5798 21.9188 19.2852 22.6704 17.797C23.4221 16.3088 23.82 14.6672 23.8334 13.0001C23.7969 10.1382 22.6438 7.4039 20.62 5.38011C18.5963 3.35633 15.8619 2.20324 13.0001 2.16675ZM8.74258 20.5076C8.90073 19.7833 9.30174 19.1349 9.87909 18.6698C10.4564 18.2048 11.1754 17.9511 11.9167 17.9509H14.0834C14.8248 17.9511 15.5437 18.2048 16.1211 18.6698C16.6984 19.1349 17.0994 19.7833 17.2576 20.5076C15.9672 21.2668 14.4973 21.6671 13.0001 21.6671C11.5029 21.6671 10.033 21.2668 8.74258 20.5076ZM19.0776 19.1101C18.6655 18.1253 17.9716 17.2842 17.0831 16.6925C16.1945 16.1008 15.151 15.7848 14.0834 15.7842H11.9167C10.8492 15.7848 9.80563 16.1008 8.91708 16.6925C8.02854 17.2842 7.33465 18.1253 6.92258 19.1101C6.1108 18.3117 5.46431 17.3611 5.02005 16.3127C4.57578 15.2643 4.34246 14.1387 4.33341 13.0001C4.36151 10.7103 5.28363 8.52216 6.90289 6.90289C8.52216 5.28363 10.7103 4.36151 13.0001 4.33341C15.2899 4.36151 17.478 5.28363 19.0973 6.90289C20.7165 8.52216 21.6386 10.7103 21.6667 13.0001C21.6577 14.1387 21.4244 15.2643 20.9801 16.3127C20.5359 17.3611 19.8894 18.3117 19.0776 19.1101Z"
                                    fill="#24272C" />
                                <path
                                    d="M13 6.49993C12.4273 6.48659 11.8578 6.58955 11.3261 6.8026C10.7943 7.01565 10.3113 7.33435 9.90617 7.73943C9.5011 8.1445 9.1824 8.62754 8.96935 9.15931C8.7563 9.69109 8.65333 10.2606 8.66668 10.8333C8.65333 11.406 8.7563 11.9754 8.96935 12.5072C9.1824 13.039 9.5011 13.522 9.90617 13.9271C10.3113 14.3322 10.7943 14.6509 11.3261 14.8639C11.8578 15.077 12.4273 15.1799 13 15.1666C13.5727 15.1799 14.1422 15.077 14.674 14.8639C15.2057 14.6509 15.6888 14.3322 16.0938 13.9271C16.4989 13.522 16.8176 13.039 17.0307 12.5072C17.2437 11.9754 17.3467 11.406 17.3333 10.8333C17.3467 10.2606 17.2437 9.69109 17.0307 9.15931C16.8176 8.62754 16.4989 8.1445 16.0938 7.73943C15.6888 7.33435 15.2057 7.01565 14.674 6.8026C14.1422 6.58955 13.5727 6.48659 13 6.49993ZM13 12.9999C12.7118 13.0139 12.4238 12.9674 12.1547 12.8634C11.8855 12.7594 11.641 12.6003 11.437 12.3963C11.2329 12.1923 11.0738 11.9478 10.9699 11.6786C10.8659 11.4094 10.8194 11.1215 10.8333 10.8333C10.8194 10.545 10.8659 10.2571 10.9699 9.98791C11.0738 9.71873 11.2329 9.47427 11.437 9.27023C11.641 9.06618 11.8855 8.90708 12.1547 8.80312C12.4238 8.69917 12.7118 8.65266 13 8.66659C13.2882 8.65266 13.5762 8.69917 13.8454 8.80312C14.1145 8.90708 14.359 9.06618 14.563 9.27023C14.7671 9.47427 14.9262 9.71873 15.0301 9.98791C15.1341 10.2571 15.1806 10.545 15.1667 10.8333C15.1806 11.1215 15.1341 11.4094 15.0301 11.6786C14.9262 11.9478 14.7671 12.1923 14.563 12.3963C14.359 12.6003 14.1145 12.7594 13.8454 12.8634C13.5762 12.9674 13.2882 13.0139 13 12.9999Z"
                                    fill="#24272C" />
                            </svg>
                        </span>
                        <input v-model="name_user" name="user_name" type="text" class="next_form_label_input" required />
                    </div>
                </label>

                <label htmlFor="" class="home-section-form-label">
                    <span class="next_form_label_span">Your Email</span>
                    <div class="next_form_label_group">
                        <span class="next_form_label_span_bg">
                            <Icon icon="material-symbols:mail-outline" />
                        </span>
                        <input v-model="email_user" type="email" name="user_email" class="next_form_label_input" required />
                    </div>
                </label>

                <label htmlFor="" class="home-section-form-label">
                    <span class="next_form_label_span">Your Message</span>
                    <textarea v-model="message_user" type="text" name="user_message" class="next_form_label_textarea"
                        required />
                </label>
                <div class="next_form_section_btn_group">
                    <button type='reset' class="next_form_section_btn">Clear Message</button>
                    <button type='submit' class="next_form_section_btn">Send Message</button>
                </div>
            </form>
        </div>
    </section>
</template>