from rest_framework.serializers import HyperlinkedModelSerializer

from site_users.models import SUser


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = SUser
        fields = ['first_name', 'last_name', 'email', 'age']
