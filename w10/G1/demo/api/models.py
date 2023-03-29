from django.db import models

"""
create table products(
    id INTEGER,
    name VARCHAR(255),
    price NUMERIC default 1000
)
"""


# ORM - Object Relational Mapping

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }