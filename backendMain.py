from flask import Flask
from flask import request

app = Flask(__name__)

<<<<<<< HEAD
if __name__ == "__main__":
=======
if __name__ == if __name__ == "__main__":
>>>>>>> master
    app.run(host='0.0.0.0')

@app.route('/', methods=['GET', 'POST'])
def index ():
    return "Hello World!"