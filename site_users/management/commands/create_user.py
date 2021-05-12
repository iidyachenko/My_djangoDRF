from django.core.management import BaseCommand

from authors.models import Author
from site_users.models import SUser


class Command(BaseCommand):
    def handle(self, *args, **options):

        # Author.objects.create(first_name='Igor', last_name='Dyach', birthday_year='1990')
        SUser.objects.create(first_name='Mike', email="Mike@gb.ru", last_name='Black', age='1990')
        SUser.objects.create_superuser('django', "django@gb.ru", 'geekbrains')
