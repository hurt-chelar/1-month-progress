from django.shortcuts import  render, HttpResponse

# Create your views here.
def index(request): 
    context = {
        'variable1':"This is Gopikrishna  " , 
        'variable2':"This is Ruth  "
    }
    # return HttpResponse("this is home page "
    # )
    return render(request, "index.html", context)



def about(request): 
    return HttpResponse("this is about page "
    )    

def services(request): 
    return HttpResponse("this is services  page "
    )    

    
def contact(request): 
    return HttpResponse("this is services  page "
    )    

        