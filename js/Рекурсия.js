// Два алгоритма для возведения в степень
// первый, при помощи классичесского цикла.

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result
// }

// Второй при помощи рекурсии

// Рекурсия — это процесс, при котором функция вызывает саму
// себя для вычисления части задачи, пока не дойдет до простого
// базового случая (например n = 1 , после чего начинается 
// возвращение значений, которые накапливаются и приводят к 
// окончательному результату.

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// Ниже подробное описание шагов выполнения операций
// при использовании рекурсивного метода на примере
// вызова функции pow(2, 3);

pow(x(2), n(3)) {
    return x(2) * pow(x(2), n(2));}; // Тут заходим 
                                     // внутрь след функции
                                     // pow(x(2), n(3-1))
                                     // то есть происходит 
                                     // вызов этой функции. 
                                     // В функцию подставляются
                                     // новые значения
                                     
pow(x(2), n(2)) {
    return x(2) * pow(x(2), n(1));};

// строка #41 
// Опять подставляются новые значения в функцию и переходим её 
// выполнять на строке #65 и теперь мы дошли до минимального 
// значения указанного в условии гдезначение n = 1. И мы 
// определяем равен ли параметр n единице? А так как он равен то мы
// выполняем условие блока if то есть возвращаем 
// значение x равное двойке(избавляемся от функции в уравнении)
// и в результате остается перемножить иксы и вернуть это 
// значение из функции во внешнюю функцию которая 
// находится на строке 32. И теперь эта функция #32 возвращает
// результат вычисления икс * на то что было возвращено функцией
// на строке 47. Мы имеем 2 как параметр у икса и умножаем его
// на 4(результат предыдущей функции). Напомню что там мы
// вернули (x * x) = 4 когда x = 2; 
// Далее на строке 32 мы возвращаем x * 4 = 8 где x = 2. Ведь
// параметром этого вызова функции является значение = 2;
// И мы получаем, что функция 32 возвращает 8 в функцию на
// строке 24. Эта функция выводит выражение x * 8 = 16 где
// параметр икс = 2. 



pow(x(2), n(1)) {
    return x('if n = 1 return x );
}

console.log(pow(2, 4));