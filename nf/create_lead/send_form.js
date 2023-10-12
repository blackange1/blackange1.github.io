document.addEventListener("DOMContentLoaded", function (event) {
    const print = console.log
    const $form = document.getElementById('form_create_lead')
    const $submit = document.getElementById('submit_create_lead')
    const urlAPI = 'https://b710-185-19-6-51.ngrok-free.app' + '/api/create_lead'
    const nameInputs = ['name', 'email', 'phone']

    $form.onclick = function (event) {
        event.preventDefault()
    }
    $submit.onclick = function () {
        // document.getElementById('superbatton').onclick = function () {
        // let inputs = []
        let bodyValue = {}
        for (const name of nameInputs) {
            const $input = $form.querySelector(`input[name="${name}"]`)
            // paramForUrl.push(`${name}=${$input.value}`)
            bodyValue[name] = $input.value
            // inputs.push($input)
        }
        print(bodyValue)
        // print(inputs)
        // print(paramForUrl.join('&'))
        // let parametersUrl = ''
        // const url = `${urlAPI}${paramForUrl.join('&')}`
        fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://localhost:63342'
            },
            body: JSON.stringify(bodyValue)

        })
            .then(response => response.json())
            .then(response => {
                print(response)
                if (response.status === 'ok') {
                    $form.reset();
                    alert('The form has been sent successfully');
                } else {
                    console.error(response.message)
                }
                // clearForm(response)
            })
            .catch(error => {
                console.error(error);
            });
    }
})