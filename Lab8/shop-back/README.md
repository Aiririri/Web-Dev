# shop-back

Django REST API backend for the Kaspi Online Store Angular app.

## Setup

```bash

python -m venv venv


venv\Scripts\activate


source venv/bin/activate


pip install -r requirements.txt

python manage.py migrate


python manage.py createsuperuser


python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`
