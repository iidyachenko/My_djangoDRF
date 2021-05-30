from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from site_users.models import SUser

admin.site.register(SUser, UserAdmin)