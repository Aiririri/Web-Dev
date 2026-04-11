from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ["name"]
    ordering_fields = ["name", "price"]

    def get_queryset(self):
        queryset = Product.objects.all()

        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category_id=category)

        is_active = self.request.query_params.get("is_active")
        if is_active is not None:
            queryset = queryset.filter(is_active=is_active.lower() == "true")

        return queryset

    @action(detail=False, methods=["get"])
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)
        for backend in self.filter_backends:
            queryset = backend().filter_queryset(request, queryset, self)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)