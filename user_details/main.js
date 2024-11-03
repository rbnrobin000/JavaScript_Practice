document.getElementById('load_user').addEventListener('click', function() {
    const userCount = document.getElementById('user_count').value;
    const userCountInt = parseInt(userCount);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data = data.slice(0, userCountInt);
            const userContainer = document.getElementById('user_container');
            userContainer.innerHTML = '';
            for(let i = 0; i < data.length; i++) {
                const user = data[i];
                const createUser = document.createElement('p');
                createUser.innerHTML = `
                Name: <strong>${user.name}</strong> <button onclick="getDetails(${user.id})">Get Details - ${user.id}</button>
                `;
                userContainer.appendChild(createUser);
            }
        })
})


function getDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            const userDetail = document.getElementById('user_detail');
            userDetail.innerHTML = `
            <h1>${data.name}</h1>
            <h4>E-mail: ${data.email}</h4>
            <p>Phone: ${data.phone}</p>
            `;
        })
}