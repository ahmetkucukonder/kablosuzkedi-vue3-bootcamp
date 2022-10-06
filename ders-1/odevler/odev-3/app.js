Vue.createApp({
    data() {
        return {
            value: 0,
            result: 'Henüz Bitmedi!!'
        };
    },
    watch: {
        value(v) {
            this.result = v == 33 ? 'Tamamlandı' : 'Henüz Bitmedi!!';
        },
        result() {
            setTimeout(() => {
                this.value = 0;
            }, 5000);
        }
    }
}).mount("#app");
