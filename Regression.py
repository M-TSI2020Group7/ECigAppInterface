import numpy as np
import scipy.optimize as opt
import matplotlib.pyplot as plt
import statistics
#import random
#import lmfit

def recommend(data, goal, timeframe):
    #Data is the number of e-cigs that the person used each day since starting the app. It is assumed that data is available for every day since the user started.
    #Goal is the target number of e-cigs every day.
    #Timeframe is the number of days into the future that the person hopes to acheive his or her goal by. 
    def f(x, a, b): #produces logistic curve
        c = len(data) + timeframe - 1 + np.log(2 * (a-0.5))/b
        #print(c)
        return a / (1. + np.exp(-b * (x - c))) + goal
    x = list(range(len(data)))
    y = list(data)
    weights = []
    for i in range(len(data)): #Exponential weighting places emphasis on recent data. 9/7 constant chosen to make the weighted average x value 1/2 week ago, so it essentially looks at past week and ignores everything else.
        weights.append((9/7)**i)
    avg = np.average(data,None,weights)
    for i in range(round(len(data))): #Places half the total weight on a point halfway between the weighted average and the goal in order to prevent the curve from being too sharp
        x.append(len(data)-1+timeframe/2)
        y.append((avg+goal)/2)
    xmean = statistics.mean(x)
    ymean = statistics.mean(y)
    anaive = 2 * (ymean-goal) #Coefficients of a naive curve in order to make sure the optimized curve has a global minimum error
    bnaive = np.log(2 * (anaive-0.5))/(xmean-(len(data) + timeframe - 1))
    trend = opt.curve_fit(f,x,y,[anaive,bnaive])[0]
    #print(trend)
    recs = []
    for i in range(timeframe): #Recommendations are rounded values on the optimized logistic curve
        recs.append(round(f(i+len(data),trend[0],trend[1])))
    recs[len(recs)-1] = round(goal) #Prevents rounding errors for target day
    # Compares error between naive and optimized curves
    # s = 0
    # t = 0
    # for i in range(len(data)):
    #     s += (data[i] - f(i,trend[0],trend[1]))**2
    #     t += (data[i] - f(i,anaive,bnaive))**2
    # print(s,t)
    plt.scatter(x[0:len(data)],y[0:len(data)]) #Plotting data
    plt.plot(f(range(len(data)+timeframe+2),trend[0],trend[1]))
    #plt.plot(f(range(len(data)+timeframe+2),anaive,bnaive))
    plt.show()
    return recs #returns a list
