import scipy as sc
import numpy as np 
import matplotlib.pyplot as plt

def plot_points(x,y):
	plt.plot(x,y,'b^');

def plot_line(x,y):
	plt.plot(x,y,'b-');

def set_axes(xa,ya):
	plt.ylabel(ya);
	plt.xlabel(xa);

def show_plot():
	plt.show();