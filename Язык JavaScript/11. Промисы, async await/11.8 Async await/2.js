class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let responce = await fetch(url)
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
} 


async function demoGithubUser() {
    let user;

    while(true) {
        try {
            let name = prompt("Введите логин?", "iliakan");
            user = await loadJson(`https://api.github.com/users/${name}`)
            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch(err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                continue;
            } else {
                throw err;
            }
        };
    }
  }
  
  demoGithubUser();