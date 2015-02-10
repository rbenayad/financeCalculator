

def read_file(name, ftype):
	fhandle = open(name, "r")

	if(ftype == "comma"):
	    delim = ","
	elif(ftype == "tab"):
	    delim = "	"
	elif (ftype== "semicolon"):
	    delim = ";"
	else:
	    delim = " "

	x = []
	y = []
	for line in fhandle:
		fields = line.split(delim);
		if(len(fields) >= 2):
			xcoord = float(fields[0])
			ycoord = float(fields[1])
			x.append(xcoord)
			y.append(ycoord)

	data = {};
	data["x"] = x;
	data["y"] = y;
	return data