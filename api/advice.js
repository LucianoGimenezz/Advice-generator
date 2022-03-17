const url = 'https://api.adviceslip.com/advice';

export async function getAdvice() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

