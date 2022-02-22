from rest_framework.serializers import ModelSerializer
from .models import UserData
from rest_framework import serializers


class UserListSerializer(ModelSerializer):
    class Meta:
        model = UserData
        fields = "__all__"


class UserUpdateSerializer(serializers.Serializer):
    user_name = serializers.CharField(max_length=200, required=True)
    first_name = serializers.CharField(max_length=200, required=False)
    last_name = serializers.CharField(max_length=200, required=False)
    email = serializers.EmailField(max_length=200, required=False)
    phone_number = serializers.CharField(max_length=10, required=False)


    def update(self, instance, validated_data):
        instance.user_name = validated_data.get('user_name', instance.first_name)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.first_name)
        instance.email = validated_data.get('email', instance.first_name)
        instance.phone_number = validated_data.get('phone_number', instance.first_name)




        instance.save()
        return instance