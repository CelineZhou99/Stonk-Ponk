# Generated by Django 3.1.7 on 2021-04-20 12:22

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_auto_20210420_1219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picture',
            field=models.FileField(default='account/default.img', storage=django.core.files.storage.FileSystemStorage(location='/home/kevin/COMP3900/capstone-project-3900-w18b-quuack-heads/stonk-ponk-be/src/server/media'), upload_to='account'),
        ),
    ]
