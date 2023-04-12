from api.models import Category
from rest_framework import serializers


class CategorySerializer1(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class CategorySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')
