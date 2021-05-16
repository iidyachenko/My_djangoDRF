from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from site_users.models import SUser
from site_users.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = SUser.objects.all()
    serializer_class = UserModelSerializer

