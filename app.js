const { createApp, reactive } = Vue;

// Shared reactive state
const store = reactive({
    title: "1. Instance Baslıgı",
    name: 'Ayse Nur',
    a: 3,
    b: 4,
    c: 0,
    d: 0,
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
    yetenek: ["Sürücü", "Yazılımcı", "Boksör", "Yüzücü"],
    names: '',
    ages: '',
    aktiflik: true,
    ekstra: false,
    error: false,
    success: false,
    karakterler: ["Adnan", "Bihter", "Behlül", "Matmazel"],
    ozellikler: [
        { name: "Adnan", age: 55 },
        { name: "Bihter", age: 40 },
        { name: "Behlül", age: 20 },
        { name: "Matmazel", age: 50 },
    ]
});

var one = createApp({
    data() {
        return store;
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
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        tıkla: function () {
            alert("Buna tıkladım")
        },
        isimYakala: function () {
            console.log("isim alanına bir şey yazdın")
        },
        yasYakala: function () {
            console.log("yaş alanına bir şey yazdın")
        }
    },
    computed: {
        greet: function () {
            return "App 1 Başlığı";
        },
        cyeEkle: function () {
            return this.c + this.age;
        },
        dyeEkle: function () {
            return this.d + this.age;
        },
        degisikligiAlgila: function () {
            return {
                aktif: this.aktiflik,
                ekstra: this.ekstra
            }
        },
    },
});

one.component("eleman", {
    template: '<p> Ben eleman taginin içerisiyim. {{name}}</p><button v-on:click="changeName">İsim Değiştir</button>',
    data() {
        return {
            name: 'Adnan Ziyagil',
        }
    },
    methods: {
        changeName: function () {
            this.name = "Bihter.Ziyagil";
        }
    }
});
one.mount("#app-one");

var two = createApp({
    data() {
        return {
            title: "2. Instance Baslıgı Degisti",
            output: ""
        };
    },
    methods: {
        changeTitle: function () {
            store.title = "1 Instance Baslıgı  Degisti";
            this.title = "2. instance başlığı değişti";
        }
    },
    computed: {
        greet: function () {
            return "App 2 Başlığı";
        }
    },
    readRefs: function () {
        console.log(this.$refs.icerik.value);
    }
});

two.mount("#app-two");
