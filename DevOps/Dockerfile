FROM python:3.9-slim
WORKDIR /app

# ติดตั้ง Flask Library
RUN pip install flask

COPY app.py .

# บอกให้รู้ว่า Container นี้จะใช้งาน Port 5000 (เป็นแค่การระบุข้อมูล)
EXPOSE 5000

CMD ["python", "app.py"]