from flask import Flask, request, render_template, jsonify, redirect, url_for
from flask_cors import CORS ## 설치는 flask-cors 

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
            return 'no prams'

        print(params['data'])
        return jsonify(params)


    

if __name__ == '__main__':
    app.run(debug=True)


