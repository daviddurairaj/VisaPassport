from flask import Flask, jsonify, make_response
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

url = 'https://sandbox.api.visa.com/dcas/cardservices/v1/cards/7a353971-l4uo-9877-algd-bp0df3321ly2/transactions'
cert = '/Users/daviddurairaj/Downloads/cert.pem'
key = '/Users/daviddurairaj/Downloads/key_49c7ce0c-2c6a-4e65-9cd6-4a0debf08372.pem'
user_id = 'JZZYCI15ZPIO305G77W721_0tp8rS5WCU3WvsCAQhKFmVXT-o'
password = 'Z3dnOkLy1R8IvMsHeH0EZ3c0uskvwHXOPi'
@app.route('/api')
def get_issues():
	r = requests.get(url, cert=(cert, key), auth=(user_id, password))
	return r.json()