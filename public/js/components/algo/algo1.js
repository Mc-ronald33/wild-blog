import template from './algo1.html';

export default {

    template: template,

    controller: function (mapService, $state, $timeout) {
        'ngInject';

        this.$onInit = () => {



        }

// function fourLetters(names) {
//     var tabnames = [];

//     for (let i = 0; i < names.lenght; i++) {
//         if (names[i].lenght == 4) {
//             names.push(names[i])
//         }
//     }
        // return tabnames
// }

// console.log(fourLetters("Ryan", "Kieran", "Mark"))

// var names = ["Ryan", "Kieran", "Mark"];


// function letters() {
//     return names.filter(i => i.length == 4);
// }
