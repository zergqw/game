const check = (chooseUser) => {
    const chooseAI = Math.floor(Math.random() * 12);;
    if (chooseAI <= 4) { //Камень
        console.log('Компьютер выбирает: Камень');
        if (chooseUser === 1){
            return console.log ('Ничья!')
        }
        return chooseUser === 3? console.log('Результат: Вы победили! Бумага побежадает камень.') : console.log('Результат: Вы проиграли! Камень ломает ножницы.')
    }
    if (chooseAI <= 8) { //Ножницы
        if (chooseUser === 2){
            return console.log ('Ничья!')
        }
        console.log('Компьютер выбирает: Ножницы');
        return chooseUser === 1? console.log('Результат: Вы победили! Камень ломает ножницы.') : console.log('Результат: Вы проиграли! Ножницы режут бумагу.')
    }
    console.log('Компьютер выбирает: Бумагу');
    if (chooseUser === 3){
        return console.log ('Ничья!')
    }
    return chooseUser === 2? console.log('Результат: Вы победили! Ножницы режут бумагу.') : console.log('Результат: Вы проиграли! Бумага побежадает камень.')  //Бумага
  };
const readlineSync = require('readline-sync');
console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!');
const exit = 0;
while(exit === 0){
    console.log('Выберете вашу фигуру: \n', 
    '1 - Камень\n',
    '2 - Ножницы\n',
    '3 - Бумага')
    let choose = readlineSync.question('Ваш выбор: ')
    switch(choose){
        case '1':
            console.log('Вы выбрали: Камень');
            check(1);
            break
        case '2':
            console.log('Вы выбрали: Ножницы');
            check(2);
            break
        case '3':
            console.log('Вы выбрали: Бумага');
            check(3);
            break
        default:
            console.log('ERROR');
    }
    let exit = readlineSync.question('Хотите сыграть еще раз? (да/нет): ');
    if (exit.toLowerCase()  !== 'да') {
        break;
    } 
};
console.log('Спасибо за игру! До встречи!')
