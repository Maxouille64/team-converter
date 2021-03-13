import tkinter
from tkinter import *
from team_converter import export_to_packed, packed_to_json
import os

def pack_team():
    file = open('team.txt','w')
    file.close()
    file = open('team.txt','a+')
    text = metinF.get("1.0",END)
    file.write(text.strip() + '\n')
    file.close()
    file = open("team.txt", "r")
    team_json = file.read()
    print("|" + team_json.strip() + "|")
    team = export_to_packed(team_json.strip())
    print(team)
    file.close()

def unpack_team():
    file = open('team.txt','w')
    file.close()
    file = open('team.txt','a+')
    text = metinF.get("1.0",END)
    file.write(text.strip() + '\n')
    file.close()
    file = open("team.txt", "r")
    team_packed = file.read()
    print("|" + team_packed.strip() + "|")
    team = packed_to_json(team_packed.strip())
    print(team)
    file.close()

gui = Tk()
gui.geometry("400x400")

gui.title('le convetisseur de team')

frame = Frame(gui)
frame.pack()

metinF = Text(gui, height=20, width=40)
metinF.pack(side=BOTTOM)

text_disp= Button(frame,
                   text="Pack!",
                   fg="red",
                   command=pack_team
                   )
text_disp.pack(side=LEFT)

exit_button = Button(frame,
                   text="Unpack!",
                   fg="green",
                   command=unpack_team)
exit_button.pack(side=RIGHT)

gui.mainloop()
