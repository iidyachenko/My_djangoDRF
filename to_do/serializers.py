from rest_framework import serializers

from site_users.models import SUser
from site_users.serializers import UserModelSerializer
from to_do.models import Project, ToDo


class ProjectSerializer(serializers.ModelSerializer):
    users = serializers.SlugRelatedField(many=True, queryset=SUser.objects.all(), slug_field='email')

    class Meta:
        model = Project
        fields = ['name', 'repository_url', 'users']


class ToDoSerializer(serializers.ModelSerializer):
    project = serializers.SlugRelatedField(queryset=Project.objects.all(), slug_field='name')
    user = serializers.PrimaryKeyRelatedField(queryset=SUser.objects.all())

    class Meta:
        model = ToDo
        fields = ['project', 'text', 'created', 'updated', 'user', 'is_active']

