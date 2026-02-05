import tkinter as tk

root = tk.Tk()
root.title("Home")
root.geometry("400x300")

tk.Label(root, text="Crop Disease Detection", font=("Arial",16)).pack(pady=20)
tk.Button(root, text="Upload Image").pack(pady=10)
tk.Button(root, text="Predict Disease").pack(pady=10)

root.mainloop()
