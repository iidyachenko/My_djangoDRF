from django.contrib import admin

from to_do.models import Project, ToDo

admin.site.register(Project)
admin.site.register(ToDo)