from django.contrib import admin
from .models import Task

# Register your models here.


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'value']
    list_display_links = ['id', 'value']
    ordering = ['id']
