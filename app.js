
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

        }

    }
}).mount("#First");
