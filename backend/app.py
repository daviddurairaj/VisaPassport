from flask import Flask, jsonify, make_response
import requests
from requests.auth import HTTPBasicAuth


app = Flask(__name__)

@app.route('/hello')
def get_issues():
    
	r = requests.get(
	'https://sandbox.api.visa.com/dcas/cardservices/v1/cards/8d212293-c6bc-4738-afaf-bc0ae5456df5/transactions',
    cert=('path to cert file', 'path to key file'),
	auth=HTTPBasicAuth('JZZYCI15ZPIO305G77W721_0tp8rS5WCU3WvsCAQhKFmVXT', 'Z3dnOkLy1R8IvMsHeH0EZ3c0uskvwHXOPi')
	)

	print(r.json())
	return "success"