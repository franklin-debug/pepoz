from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class Subscriber(models.Model):
	email = models.EmailField(unique=True)


	def __str__(self):
		return self.email

class EmailTemplate(models.Model):
	subject = models.CharField(max_length=255)
	message = RichTextField()
	recipient = models.ManyToManyField(Subscriber)


	
	def __str__(self):
		return self.subject


class Frequent_questions(models.Model):
	question = models.CharField(max_length=500)
	
	answer = models.CharField(max_length=600)


	def __str__(self):
		return self.question