document.addEventListener("DOMContentLoaded", function (event) {
    const print = console.log
    const $form = document.getElementById('form_create_lead')
    const $submit = document.getElementById('submit_create_lead')
    const urlAPI = 'http://localhost:8069/uk/api/create_lead?'
    const nameInputs = ['name', 'email', 'phone']

    $form.onclick = function (event) {
        event.preventDefault()
    }
    $submit.onclick = function () {
        let inputs = []
        let paramForUrl = []
        for (const name of nameInputs) {
            const $input = $form.querySelector(`input[name="${name}"]`)
            paramForUrl.push(`${name}=${$input.value}`)
            inputs.push($input)
        }
        print(inputs)
        print(paramForUrl.join('&'))
        let parametersUrl = ''
        const url = `${urlAPI}${paramForUrl.join('&')}`
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
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