from django.db import models

'''
Table relations:

1) OneToOne - each "User" can crate only one "Profile"
2) OneToMany (ForeignKey) - "Category" might contain many "Products"
3) ManyToMany - "Post" might have many "Tags", one "Tag" can be in many "Posts"
'''


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return f'{self.id}: {self.name}'


# select * from api_product where category_id = <id>;
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }
