from flask import Flask, request, jsonify

app = Flask(__name__)

# Simulated database to store cylinder inventory data
cylinder_inventory = {
    'cylinder1': {'remaining_volume': 1000},
    'cylinder2': {'remaining_volume': 800},
    # ... Add more cylinders as needed
}

@app.route('/get_remaining_volume/<cylinder_id>', methods=['GET'])
def get_remaining_volume(cylinder_id):
    if cylinder_id in cylinder_inventory:
        return jsonify(cylinder_inventory[cylinder_id])
    else:
        return jsonify({'error': 'Cylinder not found'}), 404

@app.route('/update_volume/<cylinder_id>', methods=['POST'])
def update_volume(cylinder_id):
    if cylinder_id in cylinder_inventory:
        data = request.get_json()
        if 'volume_used' in data and isinstance(data['volume_used'], int):
            cylinder_inventory[cylinder_id]['remaining_volume'] -= data['volume_used']
            return jsonify({'message': 'Volume updated successfully'})
        else:
            return jsonify({'error': 'Invalid data format'}), 400
    else:
        return jsonify({'error': 'Cylinder not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
