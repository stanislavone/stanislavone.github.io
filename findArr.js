var arr = ['a', 'b', 'c', 'd'];
function findArr(symb){
    while(true) {
        find = arr.indexOf(symb);
        if(find != -1) {
            console.log(find);
            break;
        }else{
            console.log('Not found');
            break;
        }
    }
}
findArr(); // Поиск символа