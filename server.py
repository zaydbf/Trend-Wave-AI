from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess  # Import subprocess module to run scripts

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/update-env', methods=['POST'])
def update_env():
    try:
        # Get data from the request
        data = request.json
        username = data.get("username")
        password = data.get("password")

        if not username or not password:
            return jsonify({"success": False, "message": "Both fields are required!"}), 400

        # Read the existing .env file
        with open(".env", "r") as env_file:
            lines = env_file.readlines()

        # Update only the specific lines
        updated_lines = []
        for line in lines:
            if line.startswith("TWITTER_USERNAME="):
                updated_lines.append(f'TWITTER_USERNAME="{username}"\n')
            elif line.startswith("TWITTER_PASSWORD="):
                updated_lines.append(f'TWITTER_PASSWORD="{password}"\n')
            else:
                updated_lines.append(line)

        # Write the updated lines back to the .env file
        with open(".env", "w") as env_file:
            env_file.writelines(updated_lines)

        # Run main.py after updating the .env file
        subprocess.run(["python", "main.py"], check=True)  # Run the Python script

        return jsonify({"success": True, "message": ".env updated and main.py executed!"})

    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,  port=5001)
