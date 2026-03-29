import json
from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Product, Category




def product_to_dict(product):
    return {
        'id':          product.id,
        'name':        product.name,
        'price':       product.price,
        'description': product.description,
        'count':       product.count,
        'is_active':   product.is_active,
        'category_id': product.category_id,
        'category':    product.category.name,
    }


def category_to_dict(category):
    return {
        'id':   category.id,
        'name': category.name,
    }



@require_GET
def product_list(request):
    """Return a list of all products."""
    products = Product.objects.select_related('category').all()
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)


@require_GET
def product_detail(request, id):
    """Return a single product by ID."""
    try:
        product = Product.objects.select_related('category').get(pk=id)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)
    return JsonResponse(product_to_dict(product))



@require_GET
def category_list(request):
    """Return a list of all categories."""
    categories = Category.objects.all()
    data = [category_to_dict(c) for c in categories]
    return JsonResponse(data, safe=False)


@require_GET
def category_detail(request, id):
    """Return a single category by ID."""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
    return JsonResponse(category_to_dict(category))




@require_GET
def category_products(request, id):
    """Return all products that belong to a specific category."""
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = Product.objects.select_related('category').filter(category=category)
    data = [product_to_dict(p) for p in products]
    return JsonResponse(data, safe=False)
