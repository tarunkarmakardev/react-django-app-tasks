from django.db import models

# Create your models here.


class Task(models.Model):
    value = models.CharField(max_length=100)

    def __str__(self):
        return self.value
