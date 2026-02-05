import firebase_admin
from firebase_admin import credentials, auth

cred = credentials.Certificate(r"C:\Users\asus\Desktop\CropDiseaseProject\firebase_key.json")
firebase_admin.initialize_app(cred)




print("Firebase connected successfully")
