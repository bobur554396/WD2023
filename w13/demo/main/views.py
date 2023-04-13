from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta


def home(request):
    return HttpResponse('home page')


def about(request):
    return HttpResponse("<h1 style='color: red;'>About page</h1>")


def hours_ahead(request, hour):
    current_time = datetime.now() + timedelta(hours=int(hour))
    return HttpResponse(f"<h1 style='color: red;'>Time: {current_time}</h1>")


products = [
    {
        'id': _id,
        'name': f'Product {_id}',
        'price': _id * 1000
    }
    for _id in range(1, 11)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)

    return JsonResponse({'error': 'Product not found'})
