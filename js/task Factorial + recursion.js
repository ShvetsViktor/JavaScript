function factorial(n) {

    if (typeof(n) !== 'number' || n % 1 !== 0) {

        return `Type of input data is not a number, it is: ${typeof(n)} or float`;

    } else {

            if (n <= 0) {

                return 1;

            } else {

                return n * factorial(n - 1)

            }

        }

    }