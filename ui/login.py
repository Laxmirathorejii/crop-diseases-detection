import tkinter as tk
from tkinter import messagebox

def login():
    messagebox.showinfo("Login", "Login successful")
    root.destroy()
    import home

root = tk.Tk()
root.title("Login")
root.geometry("300x250")

tk.Label(root, text="Email").pack()
tk.Entry(root).pack()

tk.Label(root, text="Password").pack()
tk.Entry(root, show="*").pack()

tk.Button(root, text="Login", command=login).pack(pady=10)
root.mainloop()
