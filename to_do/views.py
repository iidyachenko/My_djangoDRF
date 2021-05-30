from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from to_do.filters import ProjectFilter, ToDoFilter
from to_do.models import Project, ToDo
from to_do.serializers import ProjectSerializer, ToDoSerializer


class ProjectPaginator(PageNumberPagination):
    page_size = 10


class ToDoPaginator(PageNumberPagination):
    page_size = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectPaginator


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    filterset_class = ToDoFilter
    pagination_class = ToDoPaginator

    def destroy(self, request, *args, **kwargs):
        todo = self.get_object()
        todo.is_active = False
        todo.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProjectAPIVIew(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        project = Project.objects.all()
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)
