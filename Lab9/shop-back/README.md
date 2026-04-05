# shop-back

Django REST API backend for the Kaspi Online Store Angular app.

## Setup

```bash
# 1. Create and activate virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Apply migrations (creates db.sqlite3)
python manage.py migrate

# 4. (Optional) Create a superuser for Django Admin
python manage.py createsuperuser

# 5. Run the development server
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`

## API Endpoints

| Method | Endpoint                              | Description                  |
|--------|---------------------------------------|------------------------------|
| GET    | `/api/products/`                      | List all products            |
| GET    | `/api/products/<id>/`                 | Get one product by ID        |
| GET    | `/api/categories/`                    | List all categories          |
| GET    | `/api/categories/<id>/`               | Get one category by ID       |
| GET    | `/api/categories/<id>/products/`      | List products by category    |

## Example Responses

### GET /api/products/
```json
[
  {
    "id": 1,
    "name": "iPhone 17 Pro",
    "price": 727335.0,
    "description": "Latest Apple flagship smartphone",
    "count": 10,
    "is_active": true,
    "category_id": 1,
    "category": "Smartphones"
  }
]
```

### GET /api/categories/
```json
[
  { "id": 1, "name": "Smartphones" },
  { "id": 2, "name": "Laptops" }
]
```

## Project Structure

```
shop-back/
├── manage.py
├── requirements.txt
├── .gitignore
├── shop_back/           # Project config package
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── api/                 # App with models & endpoints
    ├── __init__.py
    ├── apps.py
    ├── models.py        # Category, Product
    ├── views.py         # 5 JSON view functions
    ├── urls.py          # URL patterns
    ├── admin.py
    └── migrations/
        ├── __init__.py
        └── 0001_initial.py
```
