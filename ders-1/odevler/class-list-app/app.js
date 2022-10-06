const app = Vue.createApp({
    data() {
        return {

        };
    },
    methods: {
        addClass(class_name) {
            this.$refs.textarea.classList.toggle(class_name);

        }
    }
}).mount("#app")
