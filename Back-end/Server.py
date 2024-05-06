from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb+srv://aashok59238:Ashok%402003@cluster0.rilh5me.mongodb.net/")
db = client['Profile']
collection = db['collection']

@app.route('/api/call', methods=['GET'])
def get_data():
    # Retrive the data
    data = list(db.collection.find({}))
    # Convert ObjectId to string
    for item in data:
        item['_id'] = str(item['_id'])
    return jsonify(data)



@app.route('/api/po', methods=['POST'])
def add_data():
    content = request.json
    #insert the data
    db.collection.insert_one(content)
    return jsonify({'status': 'Data will be added'})



@app.route('/api/up/<id>', methods=['PUT'])
def update_data(id):
    content = request.json
    content.pop("_id",None) #Hide the Default id 
    # Update the specific id 
    db.collection.update_one({'_id': ObjectId(id)}, {'$set': content}) 
    return jsonify({'status': 'Data updated successfully'})


@app.route('/api/del/<id>', methods=['DELETE'])
def delete_data(id):
    # delete the row 
    db.collection.delete_one({'_id': ObjectId(id)})
    return jsonify({'status': 'Data deleted successfully'})


if __name__ == '__main__':
    app.run(debug=True)
