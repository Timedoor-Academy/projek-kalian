// const member = {
//     name: 'Jayyid Saputra',
//     age: 19,
//     school: 'MAN Karangasem',
//     firstName: 'Akasaha ',
//     currentName: 'Naladhipa',
//     number: 1
// }

// const vm = new Vue ({
//     el: '.app',
//     data: member,
//     methods: {
//         getname: function(){
//             return 'Say, ' + this.name
//         },
//         editName: function(newName) {
//             this.name = newName;
//             return this.getname();
//         },
//         balikNama(string) {
//             return string.split('').reverse().join('');
//         }
//     },
//     computed: {
//         editAge: function() {
//             return this.age * 2 + " Years Old"
//         },
//         fullName: function() {
//             return this.firstName + this.currentName
//         },
//         cekNumber() {
//             return this.number%2 === 0 ? 'genap':'ganjil'
//         }
//     }
// })