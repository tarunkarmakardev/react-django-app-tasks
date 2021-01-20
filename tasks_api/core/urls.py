from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('tasks/', views.tasks, name="display_tasks"),
    path('tasks/<int:id>', views.tasks, name="display_tasks")
]
