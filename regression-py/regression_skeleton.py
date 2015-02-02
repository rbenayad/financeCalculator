import sys
import plot_data as pd
import read_file as rf

# example: python regression_skeleton.py test1.txt tab
if len(sys.argv) < 3:
	print "USAGE: read_file.py type"
	exit(1)

filename = sys.argv[1]
filetype = sys.argv[2]


data = rf.read_file(filename, filetype);
print data
pd.plot_points(data["x"],data["y"]);
pd.plot_line(data["x"],data["y"]);
pd.set_axes("time", "price");
pd.show_plot();