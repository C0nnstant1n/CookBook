# Generated by Django 4.2.5 on 2023-10-02 03:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookbookapi', '0002_remove_category_category_category_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='recipe',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='recipe',
            name='title',
            field=models.CharField(max_length=32),
        ),
    ]
