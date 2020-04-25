
export default async function fetchColor(url) {
    const color = await fetch(url, { method: 'GET',
    mode: 'cors'
    });
    return color.json();
}
