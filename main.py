import tkinter
from tkinter import *
from team_converter import export_to_packed

def writeFile():
    file = open('team.txt','w')
    file.close()
    file = open('team.txt','a+')
    file.write(metinF.get() + '\n')
    file.close()
    file = open("team.txt", "r")
    team_json = (file.read())
    print(export_to_packed(team_json))
    file.close()

gui = Tk()

gui.title('le convetisseur de team')

metinF = Entry(gui)
metinF.grid(row=9, column=1)

butonWrite = Button(gui)
butonWrite.config(text = 'Conversion !', command = writeFile)
butonWrite.grid(row=8, column=1)

gui.mainloop()
