from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'home.html')

def date(request):
    return render(request,'date.html')

def unit(request):
    return render(request,'unit.html')


