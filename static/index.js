
class App {
  init() {
    document
      .querySelector('.button')
      .addEventListener('click', this.spellCheck.bind(this));
  }
  post(body) {
    fetch(`http://localhost:5000/result`, {
      method: 'POST',
      body: JSON.stringify({data:body}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json=>this.render(json));
      
  }
  spellCheck() {
    const text = document.querySelector('.input-text').value;
    this.post(text);
  }

  render(response) {
    const resultWrapper = document.querySelector('.response-wrapper');
    document.querySelector('.input-text').value = '';
    console.log(response);
    resultWrapper.innerHTML = response.data;
  }
}

const app = new App();
app.init();