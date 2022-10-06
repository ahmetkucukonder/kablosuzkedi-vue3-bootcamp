Vue.createApp({
    data() {
        return {
            name: 'Ahmet',
            age: 21,
            image_src: 'https://getlorem.com/static/images/cicero2.jpg'
        };
    },
    methods: {
        randomNumber() {
            return Math.floor(Math.random() * 2);
        }
    }
}).mount("#app");
