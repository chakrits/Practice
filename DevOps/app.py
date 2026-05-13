import os
from flask import Flask

app = Flask(__name__)

# ไปหยิบค่าจาก APP_COLOR ถ้าหาไม่เจอให้ใช้สีขาว (white) เป็นค่าเริ่มต้น
bg_color = os.getenv('APP_COLOR', 'white') 
user = os.getenv('USER_NAME', 'Guest')

@app.route('/')
def home():
    # เราเอาตัวแปร bg_color มาใส่ใน style ของ HTML
    return f"""
    <body style="background-color: {bg_color};">
        <h1>Hello {user}! 🚀</h1>
        <p>ตอนนี้พื้นหลังเป็นสี: {bg_color}</p>
    </body>
    """

if __name__ == "__main__":
    # สั่งให้รันที่ port 5000 ภายใน Container
    app.run(host='0.0.0.0', port=5000)