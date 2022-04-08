
class App {
  init() {
    const button = document.querySelector('.button');
    const input = document.querySelector('.input-text')
    button.addEventListener('click', this.spellCheck.bind(this));

    const spell = this.spellCheck.bind(this);
    input.addEventListener('keypress', 
    function (e) {
      if(e.key === 'Enter') {
        spell();
      }
    })   
    
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
    if(text !== '') this.post(text);
  }

  render(response) {
    const resultWrapper = document.querySelector('.response-wrapper');
    document.querySelector('.input-text').value = '';
    resultWrapper.innerHTML = response.data;
  }
}

const app = new App();
app.init();