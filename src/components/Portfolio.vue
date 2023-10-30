<template>
    <div>
        <div class="your-portfolio-container">
            <PortfolioItem v-for="(item, index) in portfolioData" :key="index" :image="item.image" :author="item.author"
                :date="item.date" :title="item.title" :text="item.text" :link="item.link" :icon="item.icon"
                :snowIcon="item.snowIcon" />
        </div>
    </div>
</template>

<script>
import PortfolioItem from './PortfolioItem.vue';

export default {
    components: {
        PortfolioItem,
    },
    data() {
        return {
            portfolioData: [], // Initialize with an empty array
        };
    },
    created() {
        this.fetchPortfolioData();
    },
    methods: {
        async fetchPortfolioData() {
            try {
                const response = await fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/');
                const data = await response.json();
                this.portfolioData = data; // Set the fetched data to the portfolioData array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>
