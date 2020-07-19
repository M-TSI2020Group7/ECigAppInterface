from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index ():
    return "Hello World!"

@app.run(host='0.0.0.0')