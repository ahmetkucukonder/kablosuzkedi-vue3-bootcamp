Vue.createApp({
    data() {
        return {
            value: ''
        };
    },
    methods: {
        showAlert() {
            alert('foo');
        },
        updateValue(event){
            this.value = event.target.value;
        }
    }
}).mount("#app");
