# Generated by Django 4.1.5 on 2023-01-28 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_announcement_datetime'),
    ]

    operations = [
        migrations.AddField(
            model_name='announcement',
            name='dateTime',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
