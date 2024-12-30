
const { createApp } = Vue
createApp({
    data() {
        return {
            name: 'Ayse Nur ',
            a: 3,
            b: 4,
            job: 'Engineer',
            website: "https://gokhunyayla.com",
            websiteTag: '<a href="https://webtangular.com">BU da  Html tag eklenerek benim sitem</a>',
            age: 23,
            x: 0,
            y: 0,
            giyim: {
                sapka: true,
                pantolon: 'Kot',
                tshirt: false,
            },
            yetenek: ["Sürücü", "Yazılımcı", "Boksör", "Yüzücü"]
        }
    },
    methods: {
        hesapla: function (isim, gun_durumu) {
            return "İyi " + gun_durumu + " " + this.name;
        },

        topla: function () {
            return this.a + this.b;
        },

        ekle: function () {
            this.age++;
        },
        azalt: function () {
            this.age--;
        },
        ekle10: function (yil) {
            this.age += yil;
        },
        cikar10: function (yil) {
            this.age -= yil;
        },
        updateXY(event) {
            console.log(event);
            this.x = event.offsetX;
            this.Y = event.offsetY;
        }
    }
}).mount("#First");
