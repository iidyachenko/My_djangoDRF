import django_filters.rest_framework as filters

from to_do.models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(filters.FilterSet):
    project = filters.ModelChoiceFilter(queryset=Project.objects.all())
    created = filters.DateFromToRangeFilter(label='Date (Between)')

    class Meta:
        model = ToDo
        fields = ['project', 'created']