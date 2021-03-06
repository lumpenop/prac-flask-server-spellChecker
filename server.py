from flask import Flask, request, render_template, jsonify, redirect, url_for
from flask_cors import CORS ## 설치는 flask-cors 
from hanspell import spell_checker


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        print('render')
        return render_template('index.html')

    
@app.route('/result', methods=['GET', 'POST'])
def result():
    if request.method == 'POST':

        params = request.json

        if len(params) == 0:
            return 'no params'

        spelled_sent = spell_checker.check(params['data'])
        checked_sent = spelled_sent.checked
        params['data'] = checked_sent
  

        return jsonify(params)


    

if __name__ == '__main__':
    app.run(debug=True)


