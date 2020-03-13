from django.shortcuts import render
from django.utils import timezone
from .models import Date_Convert
from .models import Unit_Convert


# Create your views here.

def home(request):
    return render(request,'home.html')

def date(request):
    if request.method == 'POST' :
        Date_Convert = Date_Convert()
        Date_Convert.standard_date = request.POST['standard_date']
        Date_Convert.save()
        return render(request,'date.html')
    else:
        return render(request,'date.html')

def unit(request):
    return render(request,'unit.html')

def length(request):
    if request.method == 'POST' :
        Unit_Convert = Unit_Convert()
        Unit_Convert.standard_length = request.POST['standard_length']
        Unit_Convert.save()
        return render(request,'length.html')
    else:
        return render(request,'length.html')

def weight(request):
    if request.method == 'POST' :
        Unit_Convert = Unit_Convert()
        Unit_Convert.standard_weight = request.POST['standard_weight']
        Unit_Convert.save()
        return render(request,'weight.html')
    else:
        return render(request,'weight.html')

def volume(request):
    if request.method == 'POST' :
        Unit_Convert = Unit_Convert()
        Unit_Convert.standard_volume = request.POST['standard_volume']
        Unit_Convert.save()
        return render(request,'volume.html')
    else:
        return render(request,'volume.html')