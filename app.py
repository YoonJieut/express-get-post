from flask import Flask, request, send_from_directory

app = Flask(__name__, static_folder='public')

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('public', 'index.html')

@app.route('/submit', methods=['POST'])
def submit():
    input_data = request.form.get('inputData')
    print(input_data)
    return 'Data received!'

if __name__ == '__main__':
    app.run(debug=True, port=3000)
