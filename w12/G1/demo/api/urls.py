from django.urls import path, re_path
from api import views

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_detail),

]
