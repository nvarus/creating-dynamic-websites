/**************************************************************************************
 * Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста 
 * (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый
 ***************************************************************************************/

const COUNT = 100;
let dasss = 12


const ageStage = (number) => {

    for (i = 0; i <= number; i++) {
        if (i < 18) {
            console.log(i + " - " + "ребенок");
        } else if (i <= 30) {
            console.log(i + " - " + "молодой");
        } else if (i <= 55) {
            console.log(i + " - " + "зрелый");
        } else {
            console.log(i + " - " + "старый");
        }
    }
}

ageStage(COUNT);