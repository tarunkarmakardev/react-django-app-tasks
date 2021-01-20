from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

# Create your views here.


@api_view(['GET'])
def index(request):

    urls = {
        'tasks/': "Displays all the tasks",
        'tasks/<int:id>': "Displays specific task for the id",


    }

    return Response(urls)


@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def tasks(request, id=False):

    if request.method == 'POST':
        data = request.data
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "Task added!"})
        return Response(serializer.errors)

    if request.method == 'PUT':
        task = Task.objects.get(id=id)
        data = request.data
        serializer = TaskSerializer(task, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "Task updated completely!"})
        return Response(serializer.errors)

    if request.method == 'PATCH':
        task = Task.objects.get(id=id)
        data = request.data
        serializer = TaskSerializer(task, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "Task updated partially!"})
        return Response(serializer.errors)

    if request.method == 'DELETE':
        task = Task.objects.get(id=id)
        task.delete()
        return Response({'message': "Task deleted"})

    # GET:

    if(id):
        task = Task.objects.get(id=id)
        serializer = TaskSerializer(task)

    else:
        task = Task.objects.all()
        serializer = TaskSerializer(task, many=True)

    return Response(serializer.data)
