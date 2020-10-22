from flask import Flask, jsonify, make_response
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

url = 'https://sandbox.api.visa.com/dcas/cardservices/v1/cards/<id>/transactions'
cert = 'location to cert file'
key = 'location to key file'
user_id = 'user_id'
password = 'password'
@app.route('/api')
def get_issues():
	r = requests.get(url, cert=(cert, key), auth=(user_id, password))
	return r.json()
