from django.db import models

from site_users.models import SUser


class Project(models.Model):
    name = models.CharField(max_length=64, verbose_name="Имя")
    repository_url = models.URLField(verbose_name="Ссылка на репозиторий")
    users = models.ManyToManyField(SUser, verbose_name="Пользователь")


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name="Проект")
    text = models.TextField(verbose_name="Текст")
    created = models.DateTimeField(verbose_name='создан', auto_now_add=True)
    updated = models.DateTimeField(verbose_name='обновлен', auto_now=True)
    user = models.ForeignKey(SUser, on_delete=models.CASCADE, verbose_name="Создатель")


