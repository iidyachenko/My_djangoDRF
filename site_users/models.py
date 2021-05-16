from django.contrib.auth.models import AbstractUser
from django.db import models


class SUser(AbstractUser):
    age = models.SmallIntegerField(verbose_name="возраст", default=18)
    email = models.EmailField(verbose_name="email", blank=False)
