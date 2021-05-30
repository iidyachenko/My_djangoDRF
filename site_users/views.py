from django.shortcuts import render
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from site_users.models import SUser
from site_users.serializers import UserModelSerializer


# class UserModelViewSet(ModelViewSet):
#     queryset = SUser.objects.all()
#     serializer_class = UserModelSerializer

class UserModelViewSet(UpdateModelMixin, ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = SUser.objects.all()
    serializer_class = UserModelSerializer
