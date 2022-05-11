document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);


function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            document.getElementById("customer").innerHTML = `
                <table class="u-full-width">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>${customer.id}</td>
                        <td>${customer.name}</td>
                        <td>${customer.phone}</td>
                        </tr>
                    </tbody>    
                </table>
            `;
        }
    }

    xhr.onerror = function () {
        alert("error")
    }

    xhr.send();
}


function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customers.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);
            document.getElementById("customer").innerHTML = `
                <table class="u-full-width">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>

                    ${customers.map(customer => `<tr>
<td>${customer.id}</td>
<td>${customer.name}</td>
<td>${customer.phone}</td>
</tr>`)
                }
                    
                    </tbody>    
                </table>
            `;
        }
    }

    xhr.onerror = function () {
        alert("error")
    }

    xhr.send();
}