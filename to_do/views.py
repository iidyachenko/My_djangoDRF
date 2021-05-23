from rest_framework.viewsets import ModelViewSet

from to_do.models import Project, ToDo
from to_do.serializers import ProjectSerializer, ToDoSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
