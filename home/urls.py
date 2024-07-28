from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('core_leadership/',views.core_leadership,name='core_leadership'),
    path('download/',views.download,name='download'),
]
