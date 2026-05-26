'use server';

export type CaLculatorState = {
    result: number | null;
    error: string | null;
    number1?: string;
    number2?: string;
    operator?: string;
}

export async function caLculate(prevState: CaLculatorState, formData: FormData): Promise<CaLculatorState> {
    const number1Raw = formData.get('number1') as string;
    const number2Raw = formData.get('number2') as string;
    const operator = formData.get('operator') as string;


    const number1 = parseFloat(number1Raw);
    const number2 = parseFloat(number2Raw);


    if (isNaN(number1) || isNaN(number2)) {


        return {
            result: null,
            error: 'Please enter valid numbers',
            number1: number1Raw,
            number2: number2Raw,
            operator
        }
    }

    let result: number;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                return {
                    result: null,
                    error: 'Cannot divide by zero',
                    number1: number1Raw,
                    number2: number2Raw,
                    operator: operator
                }
            }
            result = number1 / number2;
            break;
        default:
            return {
                result: null,
                error: 'Invalid operator',
                number1: number1Raw,
                number2: number2Raw,
                operator: operator
            }
    }
    console.log(result);

    return {
        result: result,
        error: null,
        number1: number1Raw,
        number2: number2Raw,
        operator: operator
    }
}
