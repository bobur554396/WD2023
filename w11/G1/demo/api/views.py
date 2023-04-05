from django.shortcuts import Http404
from django.http.response import JsonResponse
from api.models import Product


def product_list(request):
    # select * from api_product;
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, product_id):
    # select * from api_product  where id = <product_id>;
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(product.to_json(), status=200)
