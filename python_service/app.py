from flask import Flask # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {
        'message' : 'This service is running on Python'
    }

@app.route('/to-node')
def to_node():
    return {
        'message' : 'This service is running from Python to be passed on Nodejs service...'
    }

if __name__ == '__main__':
    app.run(debug=True)