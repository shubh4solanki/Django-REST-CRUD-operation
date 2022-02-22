from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics
from . import serializer
from rest_framework.response import Response

# Create your views here.
from users.models import UserData


class UserCreateList(generics.ListCreateAPIView):
    queryset = UserData.objects.all()
    serializer_class = serializer.UserListSerializer

class UserUpdate(generics.UpdateAPIView):
    queryset = UserData.objects.all()
    serializer_class = serializer.UserUpdateSerializer

    def put(self, *args, **kwargs):
        instance = UserData.objects.get(id=kwargs.get('id', None))
        serializer_intance = self.serializer_class(instance=instance, data=self.request.data)
        serializer_intance.is_valid(raise_exception=True)
        serializer_intance.update(serializer_intance.instance, serializer_intance.validated_data)

        return Response(serializer_intance.data, status=200)


class UserDelete(generics.DestroyAPIView):
    queryset = UserData.objects.all()