const chat = document.getElementById("chat");
const loading = document.getElementById("loading");

async function sendMessage(){

    const input = document.getElementById("message");

    const text = input.value;

    if(!text) return;

    chat.innerHTML += `
        <div class="user-msg">
            ${text}
        </div>
    `;

    loading.classList.remove("hidden");

    try {

        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        const data = await response.json();

        loading.classList.add("hidden");

        chat.innerHTML += `
            <div class="bot-msg">
                ${data.response}
            </div>
        `;

    } catch(error){

        loading.classList.add("hidden");

        chat.innerHTML += `
            <div class="error">
                Erro ao conectar
            </div>
        `;
    }

    input.value = "";
}