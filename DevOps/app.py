from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Hello from Docker + Flask! 🚀</h1><p>Running on OrbStack ⚡️</p>"

if __name__ == "__main__":
    # สั่งให้รันที่ port 5000 ภายใน Container
    app.run(host='0.0.0.0', port=5000)