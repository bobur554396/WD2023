import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.response import Response
from api.models import Category
from api.serializers import CategorySerializer, CategorySerializer2


@csrf_exempt
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer2(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data = json.loads(request.body)
        category_name = data.get('name', '')
        category = Category.objects.create(name=category_name)
        return JsonResponse(category.to_json())


@csrf_exempt
def category_detail(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        serializer = CategorySerializer2(category)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_category_name = data.get('name', category.name)
        # desc = data.get('desc', category.desc)
        category.name = new_category_name
        category.save()
        return JsonResponse(category.to_json())
    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'deleted': True})
