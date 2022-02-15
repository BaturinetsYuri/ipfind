export async function getAdress(ip='8.8.8.8') {
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_ycWmg04y4VdtRWg7Qi8JgsittJQQO&ipAddress=${ip}`);
    return await response.json();
}