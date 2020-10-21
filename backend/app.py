from flask import Flask, jsonify, make_response
import requests

app = Flask(__name__)

@app.route('/hello')
def get_issues():
	r = requests.get('https://api.github.com/repos/walmartlabs/thorax/issues')
	
	for x in r.json():
		print('state: ', x['state'], 'number: ', x['number'], 'title: ', x['title'] )
	return "success"