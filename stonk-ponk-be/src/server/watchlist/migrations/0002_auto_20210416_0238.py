# Generated by Django 3.1.7 on 2021-04-16 02:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('watchlist', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stockwatch',
            old_name='stock',
            new_name='ticker',
        ),
    ]