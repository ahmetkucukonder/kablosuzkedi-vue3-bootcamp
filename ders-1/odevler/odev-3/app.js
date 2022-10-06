Vue.createApp({
    data() {
        return {
            value: 0,
            result: 'Henüz Bitmedi!!'
        };
    },
    watch: {
        value() {
            this.result = this.value == 33 ? 'Tamamlandı' : 'Henüz Bitmedi!!';
        },
        result() {
            setTimeout(() => {
                this.value = 0;
            }, 5000);
        }
    }
}).mount("#app");
