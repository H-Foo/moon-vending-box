export async function GetPin(paymentId)
{
    const API_URL = `https://moon-vending-api.onrender.com/api/Receipt/Create?userInput=${encodeURIComponent(paymentId)}`;

    const response = await fetch(API_URL, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
    })
    if (!response.ok){
        throw new Error("Sorry! Something went wrong >_<")
    }
    console.log(response);
    return response.text();
}


