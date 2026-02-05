import tkinter as tk
from tkinter import messagebox

def signup():
    messagebox.showinfo("Signup", "Signup successful (Firebase connected)")

root = tk.Tk()
root.title("Signup")
root.geometry("300x250")

tk.Label(root, text="Email").pack()
tk.Entry(root).pack()

tk.Label(root, text="Password").pack()
tk.Entry(root, show="*").pack()

tk.Button(root, text="Sign Up", command=signup).pack(pady=10)
root.mainloop()
