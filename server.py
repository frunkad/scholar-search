import flask
from flask import request, jsonify
import scholarly_modified as scholarly
import requests
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)
# app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
    if 'q' in request.args:
        query = request.args['q']
        search_query = scholarly.search_pubs_query(query)
        result = []
        for i in range(10):
            articlex = next(search_query)
            if not articlex:
                break
            filtr = lambda x: articlex.bib[x] if x in articlex.bib  else ''
            article = {
                'abstract': filtr('abstract') ,
                'author':  filtr('author'),
                'title': filtr('title'),
                'url': filtr('url'),
                'pdf': filtr('eprint'),
                'citedby': articlex.citedby,
                'index': i
            }

            result.append(article)
        return jsonify(result)
    return requests.get('http://example.com').content

app.run(port=5042)