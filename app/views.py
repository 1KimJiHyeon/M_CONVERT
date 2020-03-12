from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'home.html')

def date(request):
    return render(request,'date.html')

def unit(request):
    return render(request,'unit.html')

def length(request):
    return render(request, 'length.html')

def weight(request):
    return render(request, 'weight.html')

def volume(request):
    return render(request, 'volume.html')

