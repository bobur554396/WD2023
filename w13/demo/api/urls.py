from django.urls import path, re_path
from rest_framework_jwt.views import obtain_jwt_token

from api import views

urlpatterns = [

    path('login/', obtain_jwt_token),

    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),

    # path('categories/', views.category_list),
    # path('categories/<int:category_id>/', views.category_detail),


    # path('products/', views.product_list),
    # path('products/<int:product_id>/', views.product_detail),
]
