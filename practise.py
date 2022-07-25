def parse1():
    for line in open("log.txt"):
      print(line.split("[")[1].split("[")[0])

def parse2():
    for line in open("log.txt","r"):
      print(line.split()[3].strip("[]"))
parse1()
parse2()